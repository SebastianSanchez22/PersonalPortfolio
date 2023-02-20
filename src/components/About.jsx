import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#20242b] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-green-600'>About</p>
            </div>
            <div>
            </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-5xl text-bold animate-text bg-gradient-to-r from-green-700 via-purple-500 to-orange-500 bg-clip-text text-transparent'>
                    <p>Hi, I'm Sebastian, nice to meet you. </p>
                </div>
                <div>
                    <p className='text-[#8892b0] text-lg hover:text-green-600'> I am currently in my 4th year in CS and Systems Engineering at EIA University.<br></br>Passionate about software
                        development, data science and cloud computing. I'm naturally curious, with a great desire to learn, working on improving
                        my skills.<br></br>When I'm not coding or studying,
                        I am either lifting weights at the gym, playing basketball, chess, watching a movie or hanging out. 
                          </p>
                </div>

            </div>
          </div>
    </div>
  )
}

export default About;

