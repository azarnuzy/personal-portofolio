// pages/api/sendEmail.ts

// import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' })
    // return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = await req.json()

  // Create a nodemailer transporter with your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  })

  try {
    // Send the email using nodemailer
    await transporter.sendMail({
      from: email,
      to: process.env.MY_EMAIL,
      subject: `New message from ${email} - ${name}`,
      text: message,
    })

    return NextResponse.json({ message: 'Email sent successfully' })
    // res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' })
    // res.status(500).json({ message: 'Something went wrong' })
  }
}
