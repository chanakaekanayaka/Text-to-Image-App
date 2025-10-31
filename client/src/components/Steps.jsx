import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-[40px] gap-1 '>

        <h1 className='text-3xl sm:text-4xl font-semibold mb-3 mt-1 '>How it works</h1>
        <p className='text-lg text-gray-600 mb-10'>Transform words into stunning words</p>

        <div className=''>
           {stepsData.map((item, index)=>(
            <div className=' hover:bg-blue-950 rounded-2xl cursor-pointer mt-5 hover:scale-105 duration-300 shadow-xl '>
                <img src={item.icon} alt="" className='w-auto h-20 transition-transform duration-700  hover:rotate-[360deg] px-[300px]' ></img>
                <div className=' py-2 hover:bg shadow-md'>
                    <h2 className='text-blue-500'>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            </div>
           ))}
        
        </div>

      
    </div>
  )
}

export default Steps
