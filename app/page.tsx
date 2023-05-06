'use client'
import Navbar from './components/navbar'
import Heading from './components/heading'
import SocialMedia from './components/socialMedia'
import About from './components/about'
import Experiences from './components/experiences'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import { useState } from 'react'

export default function Home() {
  return (
    <>
      <Navbar />
      <Heading />
      <SocialMedia />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
