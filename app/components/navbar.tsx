'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { dataNavbar } from '../utils/data'
import { useThemeContext } from '../context/context'
import { useInView } from 'react-intersection-observer'
type Navbar = {
  title: string
  menuList: string[]
}

const navbar: Navbar = dataNavbar

function Navbar() {
  const { ref, inView } = useInView({
    threshold: 0.2, // Change this value as needed
    triggerOnce: true,
  })
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)
  const { isDark, setIsDark } = useThemeContext()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav
        ref={ref}
        className={` ${
          isSticky
            ? 'fixed z-30 top-0 left-1/2 w-full -translate-x-1/2 transform bg-dark-blue dark:bg-white shadow-lg'
            : ''
        } ${inView ? 'animate__fadeIn animate__slow' : ''}`}
      >
        <div className='flex justify-between items-center px-4 sm:px-8 py-3'>
          <h1 className='text-2xl font-bold text-primary dark:text-dark-blue-2'>
            {navbar.title}
          </h1>
          {/* desktop navbar */}
          <ul className='hidden sm:flex gap-8 text-light-gray dark:text-dark-blue-2 list-none p-0 items-center dark:font-medium'>
            {navbar.menuList.map((item: string, i: number) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={i}
              >
                <span className='text-primary dark:text-dark-blue'>
                  0{i + 1}.{' '}
                </span>
                {item}
              </a>
            ))}
            <li
              className={`flex items-center w-10 h-10 p-1 justify-center dark:bg-dark-blue-2 bg-light-gray
             rounded-[10px] overflow-hidden cursor-pointer relative`}
              onClick={() => setIsDark((prev) => !prev)}
            >
              <Image
                src={'/logos_moon.svg'}
                alt='Sun Logo'
                className={`absolute ${
                  isDark ? 'translate-y-full' : 'translate-y-0'
                } duration-300  transform transition-transform ease-in-out`}
                width={35}
                height={35}
              />
              <Image
                src={'/logos_sun.svg'}
                alt='Sun Logo'
                className={`absolute ${
                  !isDark ? 'translate-y-[200%]' : 'translate-y-0'
                } duration-300  transform transition-transform ease-in-out`}
                width={32}
                height={32}
              />
            </li>
          </ul>
          {isDark ? (
            <Image
              src={'/logos_menu_light.svg'}
              alt='Menu Logo'
              width={35}
              height={35}
              className='sm:hidden'
              onClick={() => setIsActive((isActive) => true)}
            />
          ) : (
            <Image
              src={'/logos_menu.svg'}
              alt='Menu Logo'
              width={35}
              height={35}
              className='sm:hidden'
              onClick={() => setIsActive((isActive) => true)}
            />
          )}

          {/* Mobile navbar */}
          <div
            className={`fixed flex flex-col bg-dark-blue-2 text-primary max-w-[300px] transform  gap-8 h-screen w-full top-0 z-50 px-4 pt-3 right-0 duration-500 ease-in-out flex-between ${
              isActive ? 'translate-x-0' : 'translate-x-[200%]'
            }`}
          >
            <div className='w-full flex justify-end'>
              <Image
                src={'/logos_close.svg'}
                alt='Close Logo'
                width={40}
                height={40}
                onClick={() => setIsActive((isActive) => false)}
              />
            </div>
            <ul className='flex h-[60%] flex-col justify-center gap-8 text-light-gray list-none p-0 items-center'>
              {navbar.menuList.map((item: string, i: number) => (
                <a
                  href={`#${item.toLowerCase()}`}
                  key={i}
                  className='font-bold'
                  onClick={() => setIsActive((isActive) => false)}
                >
                  <span className='text-primary'>0{i + 1}. </span>
                  {item}
                </a>
              ))}
              <li
                className='flex items-center w-10 h-10 p-1 justify-center bg-light-gray rounded-[10px] overflow-hidden relative'
                onClick={() => setIsDark((prev) => !prev)}
              >
                <Image
                  src={'/logos_moon.svg'}
                  alt='Sun Logo'
                  className={`absolute ${
                    isDark ? 'translate-y-full' : 'translate-y-0'
                  } duration-300  transform transition-transform ease-in-out`}
                  width={35}
                  height={35}
                />
                <Image
                  src={'/logos_sun.svg'}
                  alt='Sun Logo'
                  className={`absolute ${
                    !isDark ? 'translate-y-[200%]' : 'translate-y-0'
                  } duration-300  transform transition-transform ease-in-out`}
                  width={32}
                  height={32}
                />
              </li>
            </ul>
          </div>
          {/* background overlay*/}
          <div
            className={`${
              isActive ? 'absolute' : 'hidden'
            } w-full h-screen backdrop-blur-3xl z-20 bg-dark-blue-2 opacity-60 top-0 left-0`}
            onClick={() => {
              setIsActive(() => false)
            }}
          ></div>
        </div>
      </nav>
      <div className={` ${isSticky ? 'h-[64px] w-full' : ''}`}></div>
    </>
  )
}

export default Navbar
