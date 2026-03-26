import React from 'react'
import "@/styles/header.css"

export default function Header() {
  return (
    <header id='header' className='fixed inset-0 flex justify-between items-center z-20 mx-auto w-[88%] max-w-350 min-w-100 h-22 text-(--p-font)' >
      <div className=' uppercase font-bold text-3xl'>Logo</div>
      <nav className=' flex list-none max-md:hidden'>
        <ul className=' flex gap-15'>
          <a href='#home'>HOME</a>
          <a href='#about'>ABOUT</a>
          <a href='#project'>PROJECT</a>
          <a href='#contact'>CONTACT</a>
        </ul>
      </nav>
    </header>
  )
}
