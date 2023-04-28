'use client'

import React, { useState } from 'react'

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

const experiences: Experiences[] = [
  {
    title: 'Software Engineer Intern - GITS Indonesia',
    detail: {
      position: 'Software Engineer Intern',
      place: 'GITS Indonesia',
      time: 'January - Now 2023',
      jobdesc: [
        'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
      ],
    },
    active: true,
  },
  {
    title: 'Assisten Lecturer OOP - UPI',
    detail: {
      position: 'Assisten Lecturer OOP',
      place: 'Universitas Pendidikan Indonesia',
      time: 'February - September 2022',
      jobdesc: [
        'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
      ],
    },
    active: false,
  },
  {
    title: 'Software Engineer Intern - GITS Indonesia',
    detail: {
      position: 'Software Engineer Intern',
      place: 'GITS Indonesia',
      time: 'January - Now 2023',
      jobdesc: [
        'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
      ],
    },
    active: false,
  },
  {
    title: 'Assisten Lecturer OOP - UPI',
    detail: {
      position: 'Assisten Lecturer OOP',
      place: 'Universitas Pendidikan Indonesia',
      time: 'February - September 2022',
      jobdesc: [
        'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
      ],
    },
    active: false,
  },
  {
    title: 'Software Engineer Intern - GITS Indonesia',
    detail: {
      position: 'Software Engineer Intern',
      place: 'GITS Indonesia',
      time: 'January - Now 2023',
      jobdesc: [
        'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
      ],
    },
    active: false,
  },
  {
    title: 'Assisten Lecturer OOP - UPI',
    detail: {
      position: 'Assisten Lecturer OOP',
      place: 'Universitas Pendidikan Indonesia',
      time: 'February - September 2022',
      jobdesc: [
        'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
      ],
    },
    active: false,
  },
]

function Experiences() {
  const [content, setContent] = useState(experiences)

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
      className='container mt-8'
      id='experiences'
    >
      <div className='mx-16 flex gap-5  items-center'>
        <h2
          className='title min-w-fit'
          id='about'
        >
          <span className='text-primary'>02. </span>Experiences
        </h2>
        <div className='horizontal-line'></div>
      </div>
      <div className='flex mt-4 gap-16 mx-24'>
        <div className='min-w-fit gap-3 flex'>
          <div className='min-h-full w-[1px] bg-light-gray'></div>
          <div className='relative'>
            {content.map((item, i) => (
              <div
                className='relative cursor-pointer'
                key={i}
                onClick={() => handleClick(i)}
              >
                <h5
                  className={`tracking-wide text-[18px] text-dark-gray py-1 transition-colors duration-500 ease-in-out ${
                    item.active ? 'active-experience' : ''
                  }`}
                >
                  {limitChars(item.title, 24)}
                </h5>
                {item.active === true && (
                  <div className='absolute -left-[13.8px] min-h-[110%] top-0 rounded-sm w-[3px] bg-primary'></div>
                )}
              </div>
            ))}
          </div>
        </div>
        {content.map((item, i) => (
          <div
            className={` transition duration-500 ease-in-out ${
              item.active ? 'opacity-100' : 'opacity-0 hidden '
            } w-full`}
            key={i}
          >
            <h3 className='font-bold text-xl text-light-gray mb-2'>
              {item.detail.position} @
              <span className='text-primary'>{item.detail.place}</span>
            </h3>
            <span className='text-dark-gray text-lg mb-2 block'>
              {item.detail.time}
            </span>
            <ul className='text-dark-gray '>
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
        ))}
      </div>
    </section>
  )
}

export default Experiences
