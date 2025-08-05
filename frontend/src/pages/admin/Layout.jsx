import React from 'react'
import { assets } from '../../assets/assets'
import {Outlet, useNavigate} from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar';
const Layout = () => {
  const navigate = useNavigate();
  const logout = () =>{
    navigate('/')
  }
  return (
    <>
    <div className='px-4 py-2 h-[70px] sm:px-12 border-b border-gray-300 flex items-center justify-between'>
      <img src={assets.logo} alt="" className='w-32 sm:w-40 cursor-pointer' onClick={()=>navigate('/')} />
      <button onClick={logout} className='px-8 py-2 text-sm bg-blue-700 text-white rounded-full cursor-pointer'>Logout</button>
    </div>
    <div className='flex h-[calc(100vh - 70px)]'>
      <Sidebar/>
      <Outlet/>
    </div>
    </>
  )
}

export default Layout