"use client"
import React,{useEffect, useRef} from 'react'
import "@/styles/header.css"
import { useWindowScroll  } from 'react-use';
import { gsap } from 'gsap';

export default function Header() {
  const [lastScrolled, setLastScrolled] = React.useState(0);
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  const navContainer = useRef(null);
  const navItems=["Home","About","Services","Contact"];
  
  const { y:currentScrollY } = useWindowScroll();

  React.useEffect(() => {
    console.log(currentScrollY);
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainer.current.classList.remove("floating-nav")
      navContainer.current.style.color="white"
    }else if (currentScrollY > lastScrolled && currentScrollY > 100) {
      setIsNavVisible(false);
      navContainer.current.classList.add("floating-nav")
       navContainer.current.style.color="black"
    } else if(currentScrollY < lastScrolled) {
      setIsNavVisible(true);
      navContainer.current.classList.add("floating-nav")
       navContainer.current.style.color="black"
    }
    setLastScrolled(currentScrollY);
  }, [currentScrollY, lastScrolled]);  
  React.useEffect(() => {
    gsap.to(navContainer.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.5,
    });
  },[isNavVisible])
  return (
   <div ref={navContainer} id='#header' className='fixed inset-x-0 top-4 z-50 h-15 border-0 transition-all duration-700 sm:inset-x-6 rounded-lg'>
    <header className=' absolute top-1/2 w-full -translate-y-1/2'>
    <nav className='flex size-full items-center justify-between p-4'>
      <div className='flex items-center gap-7'>
           <h4 className=" uppercase font-bold text-2xl m-0">Asfar</h4>
      </div>
      <div className='flex h-full item-center'>
        <div className='hidden md:block'>
          {navItems.map((item,index)=>(
            <a key={index} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
    </header>


   </div>
  );
}
