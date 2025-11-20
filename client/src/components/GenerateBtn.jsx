import React, { useContext } from 'react'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const GenerateBtn = () => {

  const {user , setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = ()=>{

    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }

  }     


  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}} 
    className='flex flex-col justify-center items-center text-center my-[40px] gap-1'>

        <p className='text-3xl sm:text-4xl font-semibold mb-3 mt-1'>Experience the Power, Convert for Free</p>

        <motion.button onClick={onClickHandler}
        initial={{opacity:0,y:-20}}
        transition={{delay:0.7,duration:0.8}}
        animate={{opacity:1,y:0}}
        className='inline-flex  items-center gap-2 px-12 py-3 bg-blue-950 hover:bg-blue-300 hover:text-black rounded-2xl cursor-pointer mt-5 hover:scale-105 duration-300 shadow-3xl text-xl'>Generate Image
            <img src='aibtn.png' className='w-10  transition-transform duration-700  hover:rotate-[360deg]'></img>
        </motion.button>

      
    </motion.div>
  )
}

export default GenerateBtn
