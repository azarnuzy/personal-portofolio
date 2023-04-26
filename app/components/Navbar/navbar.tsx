import Image from 'next/image'
import React from 'react'

type Content = {
  title: string
  menuList: string[]
}

const content: Content = {
  title: '<Sekar/>',
  menuList: ['About', 'Experiences', 'Projects', 'Contact'],
}
function Navbar() {
  return (
    <nav className='container flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-primary'>{content.title}</h1>
      <ul className='flex gap-8 text-light-gray list-none p-0 items-center'>
        {content.menuList.map((item: string, i: number) => (
          <a
            href={`#${item.toLowerCase()}`}
            key={i}
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
    </nav>
  )
}

export default Navbar
