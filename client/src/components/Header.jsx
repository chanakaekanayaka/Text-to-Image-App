import React, { useContext, useState } from 'react'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {user , setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = ()=>{

    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }

  }

    const [open , setOpen] = useState(false);

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-[30px] gap-4 
    'initial={{opacity:0.3,y:200}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}>
        
            <motion.p className='text-4xl max-w-[390px] sm:text-6xl sm:max-w-[800px]  '
            initial={{opacity:0,y:-20}}
            transition={{delay:0.2,duration:0.8}}
            animate={{opacity:1,y:0}}>TURN WORDS INTO <span className='text-blue-500 hover:text-balance '>BEAUTIFUL</span>  AI IMAGES.</motion.p>

            <motion.p className='text-center max-w-xl py-6 mx-auto'
              initial={{opacity:0,y:20}}
              transition={{delay:0.4,duration:1}}
              animate={{opacity:1,y:0}}
              >DreamPixel is an AI-powered text-to-image generator that turns your words into stunning visuals instantly. Simply type your idea — from dreamy landscapes to futuristic designs — and let our intelligent engine bring it to life.</motion.p>

            <motion.button onClick={onClickHandler} className='rounded-xl  text-3xl flex flex-col hover:text-blue-500 px-10 py-2'
            initial={{opacity:0,y:-20}}
            transition={{delay:0.7,duration:0.8}}
            animate={{opacity:1,y:0}}
            >

                Try it now !

                <img src='moon.svg' className='w-auto h-12 transition-transform duration-700  hover:rotate-[360deg]'></img>

            </motion.button>

            <p className='text-2xl mt-6'>AI-generated with <span className='text-blue-500 hover:text-balance ' >DreamPixel</span> </p>

            <motion.div className='flex flex-wrap justify-center gap-5 mt-[10px] '
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1,duration:1}}>
                
                
                <img src='ai1.jpg' className='h-[180px] w-[300px] flex flex-col items-start  hover:bg-blue-300 hover:scale-105 duration-300 shadow-xl rounded-xl }' ></img>
                <img src='ai2.jpg' className='h-[180px] w-[300px] flex flex-col items-start  hover:bg-blue-300 hover:scale-105 duration-300 shadow-xl rounded-xl'></img>
                <img src='ai3.jpg' className='h-[180px] w-[300px] flex flex-col items-start   hover:bg-blue-300 hover:scale-105 duration-300 shadow-xl rounded-xl'></img>
                <img src='ai4.jpg' className='h-[180px] w-[300px] flex flex-col items-start  hover:bg-blue-300 hover:scale-105 duration-300 shadow-xl rounded-xl'></img>
                <img src='ai5.jpg' className='h-[180px] w-[300px] flex flex-col items-start   hover:bg-blue-300 hover:scale-105 duration-300 shadow-xl rounded-xl'></img>
                <img src='ai6.jpg'  className='h-[180px] w-[300px] flex flex-col items-start   hover:bg-blue-300 hover:scale-105 duration-300 shadow-xl rounded-xl'></img>
                

            </motion.div>


        
      
    </motion.div>
  )
}

export default Header
