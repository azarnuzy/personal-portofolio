'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { dataNavbar } from '../utils/data'

type Navbar = {
  title: string
  menuList: string[]
}

interface Mode {
  isDark: boolean
}

const navbar: Navbar = dataNavbar

function Navbar(props: Mode) {
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)

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
    <nav
      className={` ${
        isSticky
          ? 'fixed z-30 top-0 left-1/2 w-full -translate-x-1/2 transform bg-dark-blue shadow-lg'
          : ''
      }`}
    >
      <div className='flex justify-between items-center px-2 sm:px-8 sm:py-3'>
        <h1 className='text-2xl font-bold text-primary'>{navbar.title}</h1>
        {/* desktop navbar */}
        <ul className='hidden sm:flex gap-8 text-light-gray list-none p-0 items-center'>
          {navbar.menuList.map((item: string, i: number) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={i}
            >
              <span className='text-primary'>0{i + 1}. </span>
              {item}
            </a>
          ))}
          <li
            className='flex items-center w-10 h-10 p-1 justify-center bg-light-gray rounded-[10px] overflow-hidden'
            onClick={() => {}}
          >
            <Image
              src={'/logos_moon.svg'}
              alt='Sun Logo'
              width={35}
              height={35}
            />
          </li>
        </ul>
        <Image
          src={'/logos_menu.svg'}
          alt='Menu Logo'
          width={35}
          height={35}
          className='sm:hidden'
          onClick={() => setIsActive((isActive) => true)}
        />
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
            <li className='flex items-center w-10 h-10 p-1 justify-center bg-light-gray rounded-[10px]'>
              <Image
                src={'/logos_moon.svg'}
                alt='Sun Logo'
                width={35}
                height={35}
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
  )
}

export default Navbar
