// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { LocalDate } from '@js-joda/core'
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
    const ticket = await client.Ticket({ id })
    const entries = await client.EntriesForTicket({ ticketId: id })
    const validationResult = isTicketValidForEntry(
      ticket.tickets_by_pk,
      entries.entries,
      facility
    )
    if (validationResult.valid) {
      await client.InsertEntry({
        ticketId: id,
        facility,
        entryDate: LocalDate.now().toString(),
      })
      return res.status(200).json({ ticket, validationResult })
    } else {
      return res.status(403).json({ ticket, validationResult })
    }
  } catch (e) {
    console.error(e)
    return res.status(500).json({})
  }
}

export default handler
