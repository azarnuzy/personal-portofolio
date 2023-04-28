import Image from 'next/image'
import React from 'react'

type Content = {
  intro: string
  title: string
  subtitle: string[]
  description: string
}

const content: Content = {
  intro: 'Hi, my name is',
  title: 'Sekar Madu K.',
  subtitle: [
    'Hooked by Visuals',
    'Fascinated by Technology',
    'Fuelled by Craftmanship',
    'Meaningful Aesthetics',
  ],
  description:
    'Undergraduate computer science student in Universitas Pendidikan Indonesia, software engineer specializing in back-end development. I am currently as a software engineer intern in GITS Indonesia.',
}

function Heading() {
  return (
    <section className='container flex justify-between mt-[43px]'>
      <div className='relative z-10 flex flex-col w-full md:w-3/5 gap-1 pl-16'>
        <h3 className='text-primary tracking-widest'>{content.intro}</h3>
        <h1 className='font-extrabold text-light-gray text-[51px] mb-0'>
          {content.title}
        </h1>
        <h2 className='font-extrabold text-dark-gray text-[45px]'>
          {content.subtitle[0]}
        </h2>
        <p className='text-dark-gray'>{content.description}</p>
        <a
          href='/newest_CV.pdf'
          className='w-fit outline-none bg-transparent border-solid text-primary border-primary border-[1px] rounded-md py-2 px-8 mt-8'
        >
          Download CV
        </a>
      </div>
      <div className='relative z-0 transform -translate-x-20'>
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
