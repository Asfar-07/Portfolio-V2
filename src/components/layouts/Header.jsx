import React from 'react'
import "@/styles/header.css"

export default function Header() {
  return (
    <header
      id="header"
      className="fixed flex  items-center w-full h-20 inset-0  z-20  text-(--p-font)"
    >
      <main className='m-auto w-[88%] max-w-350 min-w-100  flex items-center justify-between'>
        <div className=" uppercase font-bold text-2xl">Asfar</div>
        <nav className=" flex items-center list-none max-md:hidden">
          <ul className=" flex items-center gap-10">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#project">PROJECT</a>
            <a href="#contact">CONTACT</a>
            <a
              href="/cv.pdf"
              download
              className=" uppercase btn border border(--cyan-mark) font-bold"
            >
              Download CV
            </a>
          </ul>
        </nav>
      </main>
    </header>
  );
}
