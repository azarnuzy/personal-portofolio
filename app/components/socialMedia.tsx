import Image from 'next/image'
import React from 'react'

const content: string[] = [
  'gmail',
  'github',
  'instagram',
  'twitter',
  'linkedin',
]

export default function SocialMedia() {
  return (
    <aside className='container relative flex justify-between'>
      <div className='fixed left-8 items-center bottom-0 flex flex-col justify-center'>
        {content.map((item: string, i: number) => (
          <a
            href={`https://${item}.com`}
            target='_blank'
            className='mb-4'
          >
            <Image
              src={`/logos_${item}.svg`}
              alt={item}
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
          sekarmadu99@gmail.com
        </span>

        <div className='block h-[150px] w-[1px] bg-light-gray'></div>
      </div>
    </aside>
  )
}
