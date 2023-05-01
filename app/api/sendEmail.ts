// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
  message: string
}

const emailEnv = process.env.MY_EMAIL
const pass = process.env.MY_PASSWORD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Create a nodemailer transporter with your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailEnv,
      pass: pass,
    },
  })

  try {
    // Send the email using nodemailer
    await transporter.sendMail({
      from: email,
      to: process.env.NEXT_PUBLIC_MY_EMAIL,
      subject: `New message from ${name}`,
      text: message,
    })

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
