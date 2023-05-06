'use client'
import Navbar from './components/navbar'
import Heading from './components/heading'
import SocialMedia from './components/socialMedia'
import About from './components/about'
import Experiences from './components/experiences'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import { useThemeContext } from './context/context'

import 'animate.css'

export default function Home() {
  const { isDark } = useThemeContext()

  return (
    <div className={`${isDark ? ' dark bg-white' : 'bg-dark-blue'} `}>
      <Navbar />
      <Heading />
      <SocialMedia />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
