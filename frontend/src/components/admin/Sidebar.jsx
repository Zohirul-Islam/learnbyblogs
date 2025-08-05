import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div>
        <NavLink to={'/admin'} end = {true} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "border-r-4 bg-blue-100 border-blue-800 "}`}>
            <img src={assets.home_icon} alt="" className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>
        <NavLink to={'/admin/addblogs'}  className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "border-r-4 bg-blue-100 border-blue-800 "}`}>
            <img src={assets.add_icon} alt="" className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Add Blog</p>
        </NavLink>
        <NavLink to={'/admin/listblogs'}  className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "border-r-4 bg-blue-100 border-blue-800 "}`}>
            <img src={assets.list_icon} alt="" className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Blog list</p>
        </NavLink>
        <NavLink to={'/admin/comments'}  className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "border-r-4 bg-blue-100 border-blue-800 "}`}>
            <img src={assets.comment_icon} alt="" className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Comments</p>
        </NavLink>
    </div>
  )
}

export default Sidebar