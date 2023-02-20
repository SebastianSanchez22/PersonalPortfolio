import React from 'react'
import NeuralNetwork from '../assets/NeuralNetwork.jpg'
import TelegramBot from '../assets/TelegramBot.png'
import ExpressAPI from '../assets/ExpressAPI.png'
import YoloV5 from '../assets/YoloV5.png'

export const Work = () => {
  return (
    <div name='work' className=' w-full md:h-screen text-gray-300  bg-[#20242b]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-600'>Work</p>
            <p className='mt-4 text-xl hover:text-green-600'>Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className='mt-4 grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
            
            {/* Grid items */}
            <div style={{backgroundImage: `url(${TelegramBot})`}}  
            className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        API with Telegram Bot Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/SebastianSanchez22/Api_Contact">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#8892b0] font-bold text-lg hover:bg-green-600 hover:text-white'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Grid items */}
            <div style={{backgroundImage: `url(${ExpressAPI})`}}  
            className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        NodeJS (Express) Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/SebastianSanchez22/IIS-Final-API">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#8892b0] font-bold text-lg hover:bg-green-600 hover:text-white'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Grid items */}
            <div style={{backgroundImage: `url(${YoloV5})`}}  
            className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Images classifier using YoloV5
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/SebastianSanchez22/YoloV5-Classification">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#8892b0] font-bold text-lg hover:bg-green-600 hover:text-white'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Grid items */}
            <div style={{backgroundImage: `url(${NeuralNetwork})`}}  
            className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider ml-2 box-decoration-clone'>
                        Multiple classifiers made with Sklearn and Tensorflow
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/SebastianSanchez22/ML_DL-Classifier">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#8892b0] font-bold text-lg hover:bg-green-600 hover:text-white'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work;
