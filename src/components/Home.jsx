import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#20242b]'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#8892b0] text-xl hover:text-green-600' >Hi, my name is</p>
        <h1 className='animate-typing overflow-hidden whitespace-nowrap animate-text bg-gradient-to-r from-green-700 via-purple-500 to-orange-500 text-4xl sm:text-7xl font-bold bg-clip-text text-transparent'>Sebastian Sanchez</h1>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0] hover:text-green-600'>Software Engineering / CS student.</h2>
        <p className='text-[#8892b0] py-4 max-w-[750px] hover:text-green-600'>I'm a 4th year student in EIA University, currently focusing in software development and data science.</p>
        <div>
            <Link to='work'>
            <button className='text-white rounded-md group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-700 hover:border-green-700'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/> 
            </span>
            </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
