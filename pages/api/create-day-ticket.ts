// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/gql'
import { oneDaySchema } from '../../utils/validations'
import _ from 'lodash'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      return res.status(400).json({})
    }
    const ticketRequest = await oneDaySchema
      .omit(['consent'])
      .validate(req.body, { stripUnknown: true })
    const result = await client.InsertTicket(ticketRequest)
    return res.status(200).json(result.insert_tickets.returning[0])
  } catch (e) {
    console.log(e)
    return res.status(500).json({})
  }
}

export default handler
