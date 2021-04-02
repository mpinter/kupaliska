// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/gql'
import _ from 'lodash'
import { entryRequest } from '../../utils/validations'

// TODO should be linked to facility, currently isn't
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      return res.status(400).json({})
    }
    const { id } = await entryRequest.validate(req.body, {
      stripUnknown: true,
    })
    const ticket = await client.Ticket({ id })
    const entries = await client.EntriesForTicket({ ticketId: id })
    // TODO this is not the nicest - also we should sanity check we're at the same facility
    const orderedEntries = _.orderBy(
      entries.entries,
      ['entry_date', 'updated_at'],
      ['desc', 'desc']
    )
    const lastEntry = orderedEntries[0]
    if (!lastEntry || lastEntry.left) {
      return res.status(400).json({ ticket, lastEntry })
    }
    await client.UpdateEntry({ id: lastEntry.id, left: true })
    return res.status(200).json({ ticket, lastEntry })
  } catch (e) {
    console.error(e)
    return res.status(500).json({})
  }
}

export default handler
