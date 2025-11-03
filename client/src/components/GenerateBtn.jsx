import React from 'react'

const GenerateBtn = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-[40px] gap-1'>

        <p className='text-3xl sm:text-4xl font-semibold mb-3 mt-1'>Experience the Power, Convert for Free</p>

        <button className='inline-flex items-center gap-2 px-12 py-3 bg-blue-950 hover:bg-blue-300 hover:text-black rounded-2xl cursor-pointer mt-5 hover:scale-105 duration-300 shadow-3xl text-xl'>Generate Image
            <img src='aibtn.png' className='w-10  transition-transform duration-700  hover:rotate-[360deg]'></img>
        </button>

      
    </div>
  )
}

export default GenerateBtn
