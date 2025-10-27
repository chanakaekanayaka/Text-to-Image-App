import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [user , setUser] = useState(null);
    const navigate =useNavigate();

  return (
    <div className='flex item-center justify-between py-4'>
      <Link to='/'>
      <img src='./logo.svg' alt='' className='w-[500px] ' ></img>
      </Link>
      
       <div className='py-4'>
        {
        user ? 
        <div ></div>
        :
        <div className='flex item-center gap-4 py-7 px-10  '>
            <p onClick={()=>navigate('/buy')} className='text-XL cursor-pointer px-10 text-2xl hover:text-blue-500 px-10 rounded-full'>pricing</p>
            <button className='-400 text-2xl hover:bg-blue-800  rounded-full px-9'>Login</button>
        </div>
        }
        
        
       </div>


    </div>
  )
}

export default Navbar
