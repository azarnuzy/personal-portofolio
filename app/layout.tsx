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

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Sekar Madu K | Home',
  description:
    'Welcome to my personal site! This is where you can learn more about me, my interests, and my work. Explore my portfolio, blog, and more to get a better sense of who I am and what I do.',
  keywords:
    'personal, portfolio, blog, about me, interests, work, projects, skills, experience, education, achievements, contact, homepage',
  author: 'Sekar Madu K',
  image: '/images/homepage.jpg',
  url: 'https://www.sekarmaduk.com/',
  twitterUsername: '@yourtwitterusername',
  siteName: 'Sekar Madu K',
  siteLanguage: 'en-US',
  siteLocale: 'id_ID',
  type: 'website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
        <Navbar />
        <Heading />
        <SocialMedia />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        {children}
      </body>
    </html>
  )
}
