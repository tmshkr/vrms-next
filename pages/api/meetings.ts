// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const meetings = await prisma.meeting.findMany({where: {}})
  res.status(200).json({ meetings })
}
