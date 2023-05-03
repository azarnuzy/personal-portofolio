import Image from 'next/image'
import React from 'react'
import { dataHeading } from '../utils/data'

type Heading = {
  intro: string
  title: string
  subtitle: string[]
  description: string
  cvFile: string
}

const heading: Heading = dataHeading

interface Mode {
  isDark: boolean
}

function Heading(props: Mode) {
  return (
    <section className='container sm:flex justify-between mt-[43px]'>
      <div className='relative px-4 z-10 flex flex-col w-full md:w-3/5 gap-1 sm:pl-16'>
        <h3 className='text-primary tracking-widest'>{heading.intro}</h3>
        <h1 className='font-extrabold text-light-gray text-[43px] sm:text-[51px] mb-0'>
          {heading.title}
        </h1>
        <h2 className='font-extrabold text-dark-gray text-[32px] sm:text-[45px]'>
          {heading.subtitle[0]}
        </h2>
        <p className='text-dark-gray'>{heading.description}</p>
        <a
          href={`/${heading.cvFile}`}
          className='w-fit outline-none bg-transparent border-solid text-primary border-primary border-[1px] rounded-md py-2 px-8 mt-8'
        >
          Download CV
        </a>
      </div>
      <div className='absolute  top-24 -right-20 sm:top-0 sm:right-0 sm:relative z-0 transform -translate-x-20 opacity-50 sm:opacity-100'>
        <Image
          src={'/polygon.svg'}
          alt='Polygon Luminary'
          width={521}
          height={449}
          priority
        />
      </div>
    </section>
  )
}

export default Heading
