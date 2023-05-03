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
import { useEffect, useState } from 'react'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'My Website',
  description:
    'Welcome to my personal site! This is where you can learn more about me, my interests, and my work. Explore my portfolio, blog, and more to get a better sense of who I am and what I do.',
  keywords:
    'personal, portfolio, blog, about me, interests, work, projects, skills, experience, education, achievements, contact, homepage',
  author: 'John Doe',
  image: '/images/homepage.png',
  url: 'https://www.your-url.com',
  twitterUsername: '@yourtwitterusername',
  siteName: 'Personal Site',
  siteLanguage: 'en-US',
  siteLocale: 'id_ID',
  type: 'website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('mode')) {
      setIsDark(JSON.parse(localStorage.getItem('mode')!))
    }
  }, [])
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
