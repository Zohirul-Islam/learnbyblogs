import React from 'react'
import { motion } from "motion/react";
import { useNavigate } from 'react-router-dom';
const Blogcard = ({blog}) => {
    const navigate = useNavigate()
    const {title,description,category,image,_id} = blog;
    
  return (
    <motion.div
    layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
     onClick={()=>navigate(`/blog/${_id}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-100 hover:shadow-blue-100 duration-300 cursor-pointer'>
       <img src={image} className='aspect-video' alt="" />
       <span className='ml-5 mt-4 px-3 py-1 inline-block rounded-full bg-blue-600 text-white text-sm'>{category}</span>
       <div className='p-5'>
        <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
        <p  className='mb-3 text-xs text-gray-600' dangerouslySetInnerHTML={{'__html':description.slice(0,80)}}></p>
       </div>
    </motion.div>
  )
}

export default Blogcard