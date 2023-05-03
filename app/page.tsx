'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Heading from './components/heading'
import SocialMedia from './components/socialMedia'
import About from './components/about'
import Experiences from './components/experiences'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  return (
    <>
      <Navbar isDark={isDark} />
      <Heading isDark={isDark} />
      <SocialMedia isDark={isDark} />
      <About isDark={isDark} />
      <Experiences isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </>
  )
}
