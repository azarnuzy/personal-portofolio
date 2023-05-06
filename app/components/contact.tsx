'use client'

import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const res = await response.json()
      Swal.fire({
        position: 'top-end',
        title: res.message,
        showConfirmButton: false,
        timer: 1500,
      })
      setStatus(res.message)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error(error)
      setStatus('Something went wrong')
    }
  }
  return (
    <div
      className='container'
      id='contact'
    >
      <div className='mx-4 sm:mx-16 flex gap-5  items-center mb-5'>
        <h2
          className='title min-w-fit'
          id='about'
        >
          <span className='text-primary'>04. </span> Let&apos;s Make Something
          Great
        </h2>
        <div className='horizontal-line'></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className='mx-4 sm:mx-16 bg-dark-blue-2 p-4 rounded-xl flex gap-4 flex-wrap justify-between'
      >
        <div className='w-full sm:w-[45%]'>
          <label
            htmlFor='name'
            className='font-bold text-lg mb-2 inline-block text-white'
          >
            Your Name
          </label>
          <div className='px-4 py-2 bg-[#aaf1e044] rounded-lg shadow-xl'>
            <input
              type='text'
              id='name'
              className='outline-none w-full bg-transparent text-slate-50 font-bold'
              placeholder='John Doe'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='w-full sm:w-[45%]'>
          <label
            htmlFor='email'
            className='font-bold text-lg mb-2 inline-block text-white'
          >
            Your Email
          </label>
          <div className='px-4 py-2 bg-[#aaf1e044] rounded-lg shadow-xl'>
            <input
              type='email'
              id='email'
              className='outline-none w-full bg-transparent text-white font-bold'
              placeholder='johndoe@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='w-full'>
          <label
            htmlFor='message'
            className='font-bold text-lg mb-2 inline-block text-white'
          >
            Your Message
          </label>
          <div className='px-4 py-2 bg-[#aaf1e044] rounded-lg shadow-xl'>
            <textarea
              id='message'
              className='outline-none w-full bg-transparent text-white font-bold '
              placeholder='Write your messages...'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className='w-full flex justify-end'>
          <button
            type='submit'
            className='bg-primary outline-none px-6 py-1 rounded-md font-bold text-dark-blue'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
