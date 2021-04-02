// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/gql'
import { oneDaySchema } from '../../utils/validations'
import _ from 'lodash'

// TODO payment request will be created somewhere here
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      return res.status(400).json({})
    }
    const ticketRequest = await oneDaySchema
      .omit(['consent'])
      .validate(req.body, { stripUnknown: true })
    const userResult = await client.InsertUser({
      object: {
        email: ticketRequest.email,
        phone: ticketRequest.phone,
      },
    })
    const ticketResult = await client.InsertTicket({
      persons: ticketRequest.persons,
      ticketType: 'single_entry',
      userId: userResult.insert_users_one.id,
    })
    return res.status(200).json({
      user: userResult.insert_users_one,
      ticket: ticketResult.insert_tickets_one,
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({})
  }
}

export default handler
