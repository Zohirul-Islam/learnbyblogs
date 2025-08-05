import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 sm:px-16 lg-px-24 xl:px-32 bg-blue-300/3'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-10 py-10 border-b border-gray-500 text-gray-500'>
            <div>
                <img src={assets.logo} className='w-32 sm:w-44' alt="" />
                <p className='max-w-[410px] mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?</p>
            </div>
            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
                {
                    footer_data.map((item,index)=>(
                        <div key={index}>
                            <h3 className='font-bold'>{item.title}</h3>
                            <ul>
                                {
                                    item.links.map((link,index)=>(
                                        <li key={index}>{link}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
        <p className='text-center text-gray-700 text-sm md:text-base py-4'>Copyright 2025 © QuickBlog GreatStack - All Right Reserved.</p>
    </div>
  )
}

export default Footer