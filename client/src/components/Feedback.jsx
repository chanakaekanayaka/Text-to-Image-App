import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Feedback = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-[70px] gap-1 '>

        <h1 className='text-3xl sm:text-4xl font-semibold mb-3 mt-1'>Turn Your Experience Into Words</h1>
        <p className='text-lg text-gray-600 mb-10'>"image-to-text" theme, mirroring the style of your original phrase.</p>

         
        <div className='flex flex-wrap gap-9   justify-center items-center'>
            {testimonialsData.map((testimonial,index)=>(
                <div key={index} className=' hover:bg-blue-950 rounded-2xl  mt-5 hover:scale-105 duration-300 shadow-xl shadow-4xl p-12  w-60 m-auto cursor-pointer  transition-all' >
                    <div className='flex flex-col items-center ' >
                        <img src={testimonial.image} className='rounded-full w-14 '></img>
                        <h2  className='text-blue-600'>{testimonial.name} </h2>
                        <p>{testimonial.role}</p>
                        <div className='flex mb-4'>
                            {Array(testimonial.stars).fill().map(
                                (item,index)=>(
                                    <img key={index} src={assets.rating_star} className=''></img>
                                )
                            )}
                            

                        </div>
                        <p className='text-sm  text-blue-300 '>{testimonial.text}</p>
                        
                    </div>

                </div>
            ))}

        </div>
      
    </div>
  )
}

export default Feedback
