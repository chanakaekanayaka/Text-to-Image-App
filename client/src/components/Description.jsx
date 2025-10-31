import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-[70px] gap-1 '>

        <h1 className='text-3xl sm:text-4xl font-semibold mb-3 mt-1'>Create AI images</h1>
        <p className='text-lg text-gray-600 mb-10'>Turn your imagination into visuals</p>

        <div className='flex flex-row gap-[80px] md:flex-row'>
            <img src={assets.sample_img_1} alt="" className='h-[500px] w-[600px] hover:bg-blue-300 hover:scale-105 duration-300 shadow-xl rounded-xl '/> 
            <p className='text-center hover:text-blue-600 '>NextGenCV is an innovative, AI-powered resume and CV builder designed to help individuals craft stunning, job-winning resumes in just minutes.
                                        In today’s competitive world, where first impressions matter more than ever, NextGenCV empowers students, graduates, and professionals to present their skills, experience, and achievements with precision and confidence.

                                         Our intelligent platform uses advanced artificial intelligence to analyze your inputs, recommend optimized content, and ensure your resume aligns with industry standards and ATS (Applicant Tracking System) requirements — helping you stand out to recruiters and hiring managers.

                                        With NextGenCV, you don’t need design skills or formatting expertise. Choose from a library of modern, professional templates that adapt perfectly to every career field — whether you’re a developer, designer, marketer, or engineer.
                                        The built-in editor allows real-time customization, keyword optimization, and instant preview options, so you can refine every section of your CV effortlessly.

                                        NextGenCV isn’t just another resume generator — it’s your career companion. Our AI assistant provides writing suggestions, power verbs, and formatting enhancements that improve clarity and impact. The platform also supports multilingual output and PDF export, making it ideal for global job seekers.

                                        Whether you’re creating your first resume, updating an old one, or preparing for a big career move, NextGenCV combines smart automation with beautiful design to make the process fast, efficient, and inspiring.

                                        Build your future confidently.
                                        With NextGenCV, your next career opportunity is only one perfect resume away.</p>
        </div>
      
    </div>

    
  )
}

export default Description
