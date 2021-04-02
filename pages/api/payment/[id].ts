// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/gql'
import _ from 'lodash'

// TODO will be a webhook from payment gate likely
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      return res.status(400).json({})
    }
    const { id } = req.query
    const result = await client.PayForTicket({ id })
    if (result.update_tickets_by_pk.was_paid) {
      return res.status(200).json({ id })
    } else {
      return res.status(500).json({})
    }
  } catch (e) {
    console.error(e)
    return res.status(500).json({})
  }
}

export default handler
