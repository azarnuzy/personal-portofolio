'use client'

import Head from 'next/head'
import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from './components/navbar'
import Heading from './components/heading'
import SocialMedia from './components/socialMedia'
import About from './components/about'
import Experiences from './components/experiences'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import { dataMetaData } from './utils/data'
import { useState } from 'react'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata = dataMetaData

let mode = false
if (localStorage.getItem('mode')) {
  mode = JSON.parse(localStorage.getItem('mode')!)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(mode)

  return (
    <html
      lang='en'
      className='scroll-smooth'
    >
      <Head>
        <link
          rel='icon'
          href='/logo.ico'
        />
      </Head>
      <body className={poppins.className + ' bg-dark-blue h-screen'}>
        <Navbar isDark={isDark} />
        <Heading isDark={isDark} />
        <SocialMedia isDark={isDark} />
        <About isDark={isDark} />
        <Experiences isDark={isDark} />
        <Projects isDark={isDark} />
        <Contact isDark={isDark} />
        <Footer isDark={isDark} />
        {children}
      </body>
    </html>
  )
}
