import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-20 xl:mx-32  relative'>
        <div className='mt-20 mb-8 text-center'>
            <div className='inline-flex items-center justify-center gap-2 border rounded-full px-6 py-2 bg-blue-200/40 text-blue-400 text-sm'>
                <p>New: AI feature integrated</p>
                <img src={assets.star_icon} className='w-2.5' alt="star icon" />
            </div>
            <h1 className="text-3xl mt-4 sm:text-6xl font-semibold sm:leading-16 text-gray-700">Your own <span className="text-blue-700"> blogging</span> <br/> platform.</h1>
            <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.</p>
            <form className='flex overflow-hidden justify-between max-w-lg mx-auto border border-gray-300 rounded-full px-4 py-2'>
                <input className='w-full outline-0 pl-4' required type="text" placeholder='search for blogs' />
                <button className='px-8 py-2 bg-blue-600 text-white rounded' type='submit'>search</button>
            </form>
        </div>
        <img src={assets.gradientBackground} alt="" className='absolute opacity-50 -top-50 -z-1' />
    </div>
  )
}

export default Header