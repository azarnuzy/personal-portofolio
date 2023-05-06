import Head from 'next/head'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ThemeContextProvider } from './context/context'

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
      <ThemeContextProvider>
        <body className={poppins.className + ' h-screen'}>{children}</body>
      </ThemeContextProvider>
    </html>
  )
}
