import React from 'react'

function Contact() {
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
          <span className='text-primary'>04. </span> Let's Make Something Great
        </h2>
        <div className='horizontal-line'></div>
      </div>
      <form className='mx-4 sm:mx-16 bg-dark-blue-2 p-4 rounded-xl flex gap-4 flex-wrap justify-between'>
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
