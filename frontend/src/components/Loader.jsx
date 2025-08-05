import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-16 h-16 animate-spin rounded-full border-4 border-t-white border-gray-300'></div>
    </div>
  )
}

export default Loader