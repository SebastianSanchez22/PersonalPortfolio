import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#20242b] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/a30ff862-8d3c-4d97-9989-99253b3cfedc" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-green-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 p-4'>// Submit the form below or shoot me an email - sebastiansaor22@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows={10} placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
