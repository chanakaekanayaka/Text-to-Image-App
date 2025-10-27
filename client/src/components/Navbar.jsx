import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [user , setUser] = useState(null);

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
        <div className='flex item-center gap-4 py-7 px-7  '>
            <p className='text-XL'>pricing</p>
            <button>Login</button>
        </div>
        }
        
        
       </div>


    </div>
  )
}

export default Navbar
