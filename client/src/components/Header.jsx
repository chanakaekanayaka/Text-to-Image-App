import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-[30px] gap-4 '>
        
            <p className='text-4xl max-w-[390px] sm:text-6xl sm:max-w-[800px]  '>TURN WORDS INTO <span className='text-blue-500 hover:text-balance '>BEAUTIFUL</span>  AI IMAGES.</p>

            <p className='text-center max-w-xl py-6 mx-auto'>DreamPixel is an AI-powered text-to-image generator that turns your words into stunning visuals instantly. Simply type your idea — from dreamy landscapes to futuristic designs — and let our intelligent engine bring it to life.</p>

            <button className='rounded-xl  text-3xl flex flex-col hover:text-blue-500 bg-black px-10 py-2'>

                Try it now !

                <img src='moon.svg' className='w-auto h-12 transition-transform duration-700  hover:rotate-[360deg]'></img>

            </button>
        
      
    </div>
  )
}

export default Header
