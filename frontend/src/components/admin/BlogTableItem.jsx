import React from 'react'
import { assets } from '../../assets/assets';

const BlogTableItem = ({blog,fetchBlogs,index}) => {
    const {title,createdAt} = blog;
    const blogDate = new Date(createdAt)
  return (
    <tr className='border-y border-gray-300'>
        <th className='px-2 py-4'>{index}</th>
        <td className='px-2 py-4'>{title}</td>
        <td className='px-2 py-4 max-sm:hidden'>{blogDate.toDateString()}</td>
        <td className='px-2 py-4 max-sm:hidden'>
            <p className={`${blog.isPublished ? 'text-green-600' :'text-orange-600'}`}>{blog.isPublished ? 'Published':"Unpublishe"}</p>
        </td>
        <td className='px-2 py-4 flex text-xs gap-3'>
            <button className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.isPublished ? 'Published':"Unpublishe"}</button>
            <img className='w-8 cursor-pointer hover:scale-110 transition-all' src={assets.cross_icon} alt="" />
        </td>
    </tr>
  )
}

export default BlogTableItem