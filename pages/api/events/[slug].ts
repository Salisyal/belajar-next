// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const { events } = require('./data.json')

type Data = {
    message: string

}

export default function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
    
    const evt = events.filter((ev: { slug: string | string[] | undefined }) => ev.slug === req.query.slug)

    if (req.method === 'GET') {
        res.status(200).json(evt)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({message: `Method ${req.method} is not allowed`})
    }
}
