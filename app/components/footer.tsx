import React from 'react'

function Footer() {
  return (
    <div className='container flex flex-col justify-center items-center py-5'>
      <h5 className='font-bold text-lg text-light-gray'>Copyright © 2023</h5>
      <h5 className='font-bold text-lg text-light-gray'>
        Made by{' '}
        <a
          href='https://azarsite.netlify.app'
          target='_blank'
          className='text-primary'
        >
          M. Azar Nuzy
        </a>
      </h5>
    </div>
  )
}

export default Footer
