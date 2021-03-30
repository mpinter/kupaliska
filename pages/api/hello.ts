// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/gql'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    res.json({ what: 'ever' })
  } else if (req.method === 'GET') {
    res.json(await client.Tickets())
  } else {
    res.statusCode = 200
  }
  return
  res.statusCode = 200
  res.json({ greeting: 'Hello from the API!' })
}

export default handler
