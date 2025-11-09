import React, { useState } from 'react'
import { assets, plans } from '../assets/assets'

const BuyCredit = () => {
  const [user , setUSer] = useState(null)

  return (
    <div className='min-h-[80hv] text-center pt-16 mb-10 '>

      
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>

      <div className='flex flex-wrap justify-center gap-6 text-left '>
        
        {plans.map((item ,index)=>(
          
          <div key={index} className=  'hover:bg-blue-900  cursor-pointer hover:scale-105 duration-3s00 shadow-2xl bg-blue-950  rounded-lg py-12 px-8 text-gray-200  transition-all'>
           
            <img width={50} src='logoicon.svg ' className='' ></img>
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.id}</p>
            <p className='mt-6 '><span className='text-3xl font-medium text-green-500'>${item.price}</span> / {item.credits} Credits</p>
            <button className='w-full bg-violet-500 hover:bg-green-600 text-black  mt-9 text-lg  rounded-lg py-2.5 min-w-52'>{user ? 'Purchase':'Get Started'}</button>
            

          </div>
        ))}
      </div>

        
      
    </div>
  )
}

export default BuyCredit
