import React, { useState } from 'react'

const Header = () => {

    const [open , setOpen] = useState(false);

  return (
    <div className='flex flex-col justify-center items-center text-center my-[30px] gap-4 '>
        
            <p className='text-4xl max-w-[390px] sm:text-6xl sm:max-w-[800px]  '>TURN WORDS INTO <span className='text-blue-500 hover:text-balance '>BEAUTIFUL</span>  AI IMAGES.</p>

            <p className='text-center max-w-xl py-6 mx-auto'>DreamPixel is an AI-powered text-to-image generator that turns your words into stunning visuals instantly. Simply type your idea — from dreamy landscapes to futuristic designs — and let our intelligent engine bring it to life.</p>

            <button className='rounded-xl  text-3xl flex flex-col hover:text-blue-500 px-10 py-2'>

                Try it now !

                <img src='moon.svg' className='w-auto h-12 transition-transform duration-700  hover:rotate-[360deg]'></img>

            </button>

            <p className='text-2xl mt-6'>AI-generated with <span className='text-blue-500 hover:text-balance ' >DreamPixel</span> </p>

            <div className='flex flex-wrap justify-center gap-5 mt-[10px] '>
                
                
                <img src='ai1.jpg' className='h-[180px] w-[300px] flex flex-col items-start  hover:bg-blue-300 hover:scale-105 duration-300 shadow-xl rounded-xl }' ></img>
                <img src='ai2.jpg' className='h-[180px] w-[300px] flex flex-col items-start  hover:bg-blue-300 hover:scale-105 duration-300 shadow-xl rounded-xl'></img>
                <img src='ai3.jpg' className='h-[180px] w-[300px] flex flex-col items-start   hover:bg-blue-300 hover:scale-105 duration-300 shadow-xl rounded-xl'></img>
                <img src='ai4.jpg' className='h-[180px] w-[300px] flex flex-col items-start  hover:bg-blue-300 hover:scale-105 duration-300 shadow-xl rounded-xl'></img>
                <img src='ai5.jpg' className='h-[180px] w-[300px] flex flex-col items-start   hover:bg-blue-300 hover:scale-105 duration-300 shadow-xl rounded-xl'></img>
                <img src='ai6.jpg'  className='h-[180px] w-[300px] flex flex-col items-start   hover:bg-blue-300 hover:scale-105 duration-300 shadow-xl rounded-xl'></img>
                

            </div>


        
      
    </div>
  )
}

export default Header
