import React from 'react'
import './generalLoading.css'
export default function GeneralLoading() {
  return (
    <div className='w-full z-500 h-screen fixed inset-0 flex justify-center items-center bg-[#0f0520] text-white'>
      <div className="spinner z-500">       
      </div>
    </div>
  )
}
