'use client'

import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'
import Image from 'next/image'

type Projects = {
  thumbnail: string
  title: string
  description: string
  technology: string[]
  productLink?: string
  resourceLink?: string
}

const projects: Projects[] = [
  {
    thumbnail: 'chatbot.jpg',
    title: 'API Chatbot Library UPI',
    description:
      'Make API Chatbot library UPI to provide some information and some activity to make student more easier to access some feature in library UPI',
    technology: ['Express Js', 'Docker'],
    productLink: 'perpustakaan.upi.edu:8080',
    resourceLink: 'github.com',
  },
  {
    thumbnail: 'chatbot.jpg',
    title: 'API Chatbot Library UPI',
    description:
      'Make API Chatbot library UPI to provide some information and some activity to make student more easier to access some feature in library UPI',
    technology: ['Express Js', 'Docker'],
    productLink: 'perpustakaan.upi.edu:8080',
    resourceLink: 'github.com',
  },
  {
    thumbnail: 'chatbot.jpg',
    title: 'API Chatbot Library UPI',
    description:
      'Make API Chatbot library UPI to provide some information and some activity to make student more easier to access some feature in library UPI',
    technology: ['Express Js', 'Docker'],
    productLink: 'perpustakaan.upi.edu:8080',
    resourceLink: 'github.com',
  },
  {
    thumbnail: 'chatbot.jpg',
    title: 'API Chatbot Library UPI',
    description:
      'Make API Chatbot library UPI to provide some information and some activity to make student more easier to access some feature in library UPI',
    technology: ['Express Js', 'Docker'],
    productLink: 'perpustakaan.upi.edu:8080',
    resourceLink: 'github.com',
  },
]

function Projects() {
  const [slidesPerView, setSlidesPerView] = useState<number>(1)

  useEffect(() => {
    const setSlides = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3)
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(1)
      }
    }

    setSlides()

    window.addEventListener('resize', setSlides)

    return () => {
      window.removeEventListener('resize', setSlides)
    }
  }, [])
  return (
    <div
      id='projects'
      className='container relative'
    >
      <div className='mx-4 sm:mx-16 flex gap-5  items-center mb-5'>
        <h2
          className='title min-w-fit'
          id='about'
        >
          <span className='text-primary'>03. </span> Something I've Built
        </h2>
        <div className='horizontal-line'></div>
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className='mySwiper w-full'
      >
        {projects.map((item, i) => (
          <SwiperSlide
            className='w-1/3 bg-dark-blue-2 text-light-gray rounded-[15px] shadow-lg'
            key={i}
          >
            <div className='w-full'>
              <Image
                src={`/${item.thumbnail}`}
                alt={item.title}
                width='300'
                height={150}
                className='rounded-t-[15px] w-full h-[150px] mb-3 object-cover object-top'
              />
              <div className='px-4 py-2'>
                <h5 className='text-lg text-light-gray font-bold mb-2'>
                  {item.title}
                </h5>
                <p className='text-light-gray mb-2'>{item.description}</p>
                <div className='flex justify-between'>
                  <div className='flex gap-3'>
                    {item.technology.map((tech, i) => (
                      <p className='text-dark-gray'>{tech}</p>
                    ))}
                  </div>
                  <div className='flex gap-2'>
                    <a href={`${item.resourceLink}`}>
                      <Image
                        src={`/logos_github.svg`}
                        alt='Logo Github'
                        width={24}
                        height={24}
                      />
                    </a>
                    <a href={`${item.productLink}`}>
                      <Image
                        src={`/logos_link.svg`}
                        alt='Logo Github'
                        width={24}
                        height={24}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Projects
