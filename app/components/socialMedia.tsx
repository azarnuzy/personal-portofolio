import Image from 'next/image'
import React from 'react'
import { dataSocialMedia } from '../utils/data'

type SocialMedia = {
  link: string
  logo: string
}

const socialMedia: { data: SocialMedia[]; email: string } = dataSocialMedia

export default function SocialMedia() {
  return (
    <aside className='hidden sm:flex container relative  justify-between'>
      <div className='fixed z-10 left-8 items-center bottom-0 flex flex-col justify-center'>
        {socialMedia.data.map((item, i) => (
          <a
            href={`${item.link}`}
            target='_blank'
            className='mb-4'
          >
            <Image
              src={`/${item.logo}`}
              alt={item.logo}
              key={i}
              height={24}
              width={24}
            />
          </a>
        ))}
        <div className='h-[120px] w-[1px] bg-light-gray'></div>
      </div>
      <div className='fixed right-8 flex flex-col items-center bottom-0'>
        <span className='transform rotate-90 absolute text-dark-gray tracking-widest -translate-y-36'>
          {socialMedia.email}
        </span>

        <div className='block h-[150px] w-[1px] bg-light-gray'></div>
      </div>
    </aside>
  )
}
