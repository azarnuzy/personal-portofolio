import Image from 'next/image'
import React from 'react'

const content: { description: string[]; techs: string[] } = {
  description: [
    'Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!',
    "Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients. ",
    'I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.',
  ],
  techs: [
    'html',
    'css',
    'javascript',
    'golang',
    'c',
    'php',
    'phyton',
    'nodejs',
    'laravel',
    'postgresql',
    'mysql',
    'git',
  ],
}

function About() {
  return (
    <section className='container'>
      <div className=' flex justify-between items-center'>
        <div className='w-[60%] flex flex-col pl-16'>
          <div className='flex gap-5  items-center mb-5'>
            <h2
              className='title min-w-fit'
              id='about'
            >
              <span className='text-primary'>01. </span>About Me
            </h2>
            <div className='horizontal-line'></div>
          </div>
          {content.description.map((item, i) => (
            <p
              className='text-dark-gray block mb-5'
              key={i}
            >
              {item}
            </p>
          ))}
        </div>
        <div className='w-[40%] p-10 justify-center flex'>
          <div className='max-w-[230px] max-h-[260px] relative object-cover object-center'>
            <Image
              src={'/women.svg'}
              alt='My Image'
              width={230}
              height={260}
              className='object-cover transform -translate-x-3 rounded-lg h-[260px]'
            />
            <div className='transform  absolute top-0 w-[230px] h-[260px] -translate-x-3 border-solid border-primary rounded-lg bg-primary opacity-40 hover:opacity-0 transition duration-300 ease-in-out border-[1px]'></div>
            <div className='transform translate-y-3 absolute top-0 w-[230px] h-[260px] -z-10 border-solid border-primary rounded-lg bg-transparent border-[1px]'></div>
          </div>
        </div>
      </div>
      <div className='horizontal-line mx-auto'></div>
      <div className='mt-5 px-16'>
        <h4 className='text-light-gray text-xl'>Tech Stack</h4>
        <p className='text-dark-gray text-lg'>Languages and libraries I Know</p>
        <div className='mt-5 flex gap-5 justify-center'>
          {content.techs.map((item, i) => (
            <div
              className='bg-light-gray p-2 w-16 h-16 rounded-xl shadow-xl'
              key={i}
            >
              <Image
                src={`logos_${item}.svg`}
                alt={item}
                width={50}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
