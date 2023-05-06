import Image from 'next/image'
import React from 'react'

import { dataAbout } from '../utils/data'
import { useInView } from 'react-intersection-observer'

const about: { description: string[]; techs: string[]; image: string } =
  dataAbout

function About() {
  const { ref, inView } = useInView({
    threshold: 0.2, // Change this value as needed
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className={`container mt-32 sm:mt-1 animate__ animate__animated ${
        inView ? 'animate__fadeInUp animate__slow' : ''
      }`}
    >
      <div className=' sm:flex justify-between items-center'>
        <div className='w-full sm:w-[60%] flex flex-col px-4 sm:pl-16'>
          <div className='flex gap-5  items-center mb-5'>
            <h2
              className='title  min-w-fit'
              id='about'
            >
              <span className='text-primary dark:text-dark-blue-2'>01. </span>
              About Me
            </h2>
            <div className='horizontal-line'></div>
          </div>
          {about.description.map((item, i) => (
            <p
              className='text-dark-gray dark:text-dark-blue block mb-5'
              key={i}
            >
              {item}
            </p>
          ))}
        </div>
        <div className='w-full sm:w-[40%] p-10 justify-center flex'>
          <div className='w-[230px] max-h-[260px] relative object-cover object-center'>
            <Image
              src={`/${about.image}`}
              alt='My Image'
              width={230}
              height={260}
              className='object-cover transform -translate-x-3 rounded-lg min-w-[230px] h-[260px]'
            />
            <div className='transform  absolute top-0 w-[230px] h-[260px] -translate-x-3 border-solid dark:border-dark-blue-2 border-primary rounded-lg bg-primary dark:bg-dark-blue-2 opacity-40 hover:opacity-0 transition duration-300 ease-in-out border-[1px]'></div>
            <div className='transform translate-y-3 absolute top-0 w-[230px] h-[260px] -z-10 border-solid dark:border-dark-blue border-primary rounded-lg bg-transparent border-[1px]'></div>
          </div>
        </div>
      </div>
      <div className='horizontal-line mx-auto'></div>
      <div className='mt-5 px-4 sm:px-16'>
        <h4 className='text-light-gray text-xl dark:text-dark-blue-2'>
          Tech Stack
        </h4>
        <p className='text-dark-gray dark:text-dark-blue text-lg'>
          Languages and libraries I Know
        </p>
        <div className='mt-5 flex flex-wrap gap-5 justify-center'>
          {about.techs.map((item, i) => (
            <div
              className='bg-light-gray dark:bg-light-white p-2 w-16 h-16 rounded-xl shadow-xl'
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
