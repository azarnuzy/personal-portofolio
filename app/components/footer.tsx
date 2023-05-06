import React from 'react'

function Footer() {
  return (
    <a
      href='https://github.com/azarnuzy/personal-portofolio'
      target='_blank'
      className='container flex flex-col justify-center items-center py-5'
    >
      <h5 className='font-bold text-sm text-light-gray dark:text-dark-blue'>
        Copyright © 2023
      </h5>
      {/* <h5 className='font-bold text-sm text-light-gray'>
        Made by{' '}
        <a
          href='https://azarsite.netlify.app'
          target='_blank'
          className='text-primary'
        >
          M. Azar Nuzy
        </a>
      </h5> */}
    </a>
  )
}

export default Footer
