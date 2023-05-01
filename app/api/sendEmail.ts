// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Create a nodemailer transporter with your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  })

  try {
    // Send the email using nodemailer
    await transporter.sendMail({
      from: email,
      to: 'recipient-email@example.com',
      subject: `New message from ${name}`,
      text: message,
    })

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
