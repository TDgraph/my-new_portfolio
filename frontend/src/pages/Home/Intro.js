import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 w-2/3 py-10'>
      <h1 className='text-white'>Hi, I'm</h1>
      <h1 className='text-tertiary text-7xl font-semibold'>Temitope Obuba Douglas</h1>
      <h1 className='text-white text-6xl text-semibold'>I Build and Develop Websites</h1>
      <p className='text-white w-2/3'>
        I'm a fullstack web developer, currently studying Software Engineering with ALX Africa.
        I build and design highly functional and responsive web applications Ranging from 
        E-commerce website to business portfolio websites.
      </p>
      <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default Intro