import React from 'react'
import Azure from '../assets/Azure.png';
import Django from '../assets/Django.png';
import Docker from '../assets/Docker.png';
import Java from '../assets/Java.png';
import MySQL from '../assets/MySQL.png';
import NodeJS from '../assets/NodeJS.png';
import Python from '../assets/Python.png';
import ReactLogo from '../assets/ReactLogo.png';

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#20242b] bg-opacity-100 text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-green-600'>Skills</p>
                <p className='py-4 text-lg text-[#8892b0] hover:text-green-600'>I've worked with the following technologies</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 ease-in duration:500 hover:text-green-600'>
                    <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 ease-in duration:500 hover:text-green-600'>
                    <img className='w-20 mx-auto' src={Django} alt="Django icon" />
                    <p className='my-4'>Django</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 ease-in duration:500 hover:text-green-600'>
                    <img className='w-20 mx-auto' src={NodeJS} alt="NodeJS icon" />
                    <p className='my-4'>NodeJS (Express)</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 ease-in duration:500 hover:text-green-600'>
                    <img className='w-20 mx-auto' src={ReactLogo} alt="React icon" />
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 ease-in duration:500 hover:text-green-600'>
                    <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 ease-in duration:500 hover:text-green-600'>
                    <img className='w-20 mx-auto' src={MySQL} alt="MySQL icon" />
                    <p className='my-4'>MySQL</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 ease-in duration:500 hover:text-green-600'>
                    <img className='w-20 mx-auto' src={Docker} alt="Docker icon" />
                    <p className='my-4'>Docker</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 ease-in duration:500 hover:text-green-600'>
                    <img className='w-20 mx-auto' src={Azure} alt="Azure icon" />
                    <p className='my-4'>Azure</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
