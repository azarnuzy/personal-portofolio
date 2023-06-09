'use client'

import React, { useState } from 'react'
import { dataExperiences } from '../utils/data'
import { useInView } from 'react-intersection-observer'

type Experiences = {
  title: string
  detail: {
    position: string
    place: string
    time: string
    jobdesc: string[]
  }
  active: boolean
}

const experiences: Experiences[] = dataExperiences

function Experiences() {
  const [content, setContent] = useState(experiences)
  const { ref, inView } = useInView({
    threshold: 0.2, // Change this value as needed
    triggerOnce: true,
  })

  const limitChars = (str: string, maxLength: number): string => {
    if (str.length > maxLength) {
      if (str[maxLength - 1] === ' ') {
        maxLength--
      }
      return str.substring(0, maxLength) + ' ...'
    } else {
      return str
    }
  }

  const handleClick = (index: number) => {
    const updatedExperiences = content.map((experience, i) => {
      if (i === index) {
        return { ...experience, active: true }
      } else {
        return { ...experience, active: false }
      }
    })
    setContent(updatedExperiences)
  }

  return (
    <section
      ref={ref}
      className={`container mt-8 animate__animated ${
        inView ? 'animate__fadeIn animate__slow' : ''
      }`}
      id='experiences'
    >
      <div className='mx-4 sm:mx-16 flex gap-5  items-center'>
        <h2
          className='title min-w-fit'
          id='about'
        >
          <span className='text-primary dark:text-dark-blue-2'>02. </span>
          Experiences
        </h2>
        <div className='horizontal-line'></div>
      </div>
      <div className='mt-4 overflow-hidden h-[80vh] sm:h-[310px] relative gap-16 mx-6 sm:mx-24'>
        {content.map((item, i) => (
          <div
            className='flex'
            key={i}
          >
            <div className='max-h-fit min-w-fit gap-3 flex'>
              <div className='flex gap-3 h-fit'>
                <div className='min-h-fit w-[1px] bg-light-gray dark:bg-dark-blue-2'></div>
                <div className='relative'>
                  <div
                    className='relative cursor-pointer'
                    key={i}
                    onClick={() => handleClick(i)}
                  >
                    <h5
                      className={`tracking-wide text-[18px] text-dark-gray dark:text-dark-blue py-1 transition-colors duration-500 ease-in-out ${
                        item.active ? 'active-experience' : ''
                      }`}
                    >
                      {limitChars(item.title, 24)}
                    </h5>
                    {item.active === true && (
                      <div className='absolute -left-[13.8px] min-h-[110%] top-0 rounded-sm w-[3px] dark:bg-dark-blue-2 bg-primary'></div>
                    )}
                  </div>
                  {/* ))} */}
                </div>
              </div>
            </div>
            <div
              className={`w-full sm:w-1/2 absolute sm:top-0 top-60 right-0  ${
                item.active
                  ? 'opacity-100 transition-opacity duration-500 ease-in-out'
                  : 'opacity-0 max-w-0 max-h-0'
              } `}
              key={i}
            >
              <h3 className='font-bold text-xl text-light-gray dark:text-dark-blue-2 mb-2'>
                {item.detail.position} @
                <span className='text-primary dark:text-dark-blue'>
                  {item.detail.place}
                </span>
              </h3>
              <span className='text-dark-gray dark:text-dark-blue text-lg mb-2 block'>
                {item.detail.time}
              </span>
              <ul className='text-dark-gray dark:text-dark-blue'>
                {item.detail.jobdesc.map((job, i) => (
                  <li
                    className='list-disc list-outside '
                    key={i}
                  >
                    {job}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experiences
