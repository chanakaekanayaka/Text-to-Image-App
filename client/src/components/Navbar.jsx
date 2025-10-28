import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [user , setUser] = useState(true);
    const navigate =useNavigate();

  return (
    <div className='flex item-center justify-between py-4'>
      <Link to='/'>
      <img src='./logo.svg' alt='' className='w-[450px] ' ></img>
      </Link>
      
       <div className='py-4'>
        {
        user ? 
        <div className='flex items-center gap-2 sm:gap-4'>
          
          <button className='flex items-center gap-2 bg-blend-luminosity px-3 sm:px-5 py-1.5 sm:py-3 rounded-md hover:scale-105 transition-all duration-300'>
            <img src='./Credit_star.png' className=' w-[45px] '></img>
            <p className=' hover:text-blue-500  font-medium '>Credit Left : 50</p>
          </button>

          
          <p className=' pt-[1%]'>Hi ,<span className=' text-blue-500'>Chanaka</span> </p>

          <div className='relative group'>
            <img src='./user_icon.png ' className='w-[45px] drop-shadow-sm'></img>
            <div className='absolute hidden group-hover:block   pt-3 pr-3   rounded pt-1 '>
              <ul className='list-none m-0 bg-red-600 rounded-md  text-sm'>
                <li className='py-1 px-1 cursor-pointer pr-1'>
                  Logout
                </li>
              </ul>
            </div>
          </div>
         
          
          

        </div>
        :
        <div className='flex item-center gap-4 py-7 px-10  '>
            <p onClick={()=>navigate('/buy')} className='text-XL  font-medium cursor-pointer px-10  hover:text-blue-500 px-10 rounded-full'>pricing</p>
            <button className='  hover:bg-blue-800   font-medium rounded-full px-9'>Login</button>
        </div>
        }
        
        
       </div>


    </div>
  )
}

export default Navbar
