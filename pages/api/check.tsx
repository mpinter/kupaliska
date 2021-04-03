// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'
import { client } from '../../utils/gql'
import { isTicketValidForEntry } from '../../utils/tickets'
import { entryRequest } from '../../utils/validations'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
    if (req.method !== 'POST') {
      return res.status(400).json({})
    }
    const { id, facility } = await entryRequest.validate(req.body, {
      stripUnknown: true,
    })
    const ticket = (await client.Ticket({ id }))?.tickets_by_pk
    const entries = (await client.EntriesForTicket({ ticketId: id }))?.entries
    // todo user
    const validationResult = isTicketValidForEntry(ticket, entries, facility)
    return res.status(200).json({ ticket, validationResult })
  } catch (e) {
    console.error(e)
    return res.status(500).json({})
  }
}

export default handler
