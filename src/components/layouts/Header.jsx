"use client"
import React,{useEffect, useRef} from 'react'
import "@/styles/header.css"
import { useWindowScroll  } from 'react-use';
import { Menu } from 'lucide-react';
import { gsap } from 'gsap';

export default function Header() {
  const [lastScrolled, setLastScrolled] = React.useState(0);
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  const navContainer = useRef(null);
  const navSwitchContainer = useRef(null);
  const navItems=["Home","About","Services","Contact"];
  
  const { y:currentScrollY } = useWindowScroll();

  React.useEffect(() => {

    if (currentScrollY < 300) {
      setIsNavVisible(true);
      navContainer.current.classList.remove("floating-nav")
      navContainer.current.style.color="white"
    }else if (currentScrollY > lastScrolled && currentScrollY > 300) {
      setIsNavVisible(false);
    } else if(currentScrollY < lastScrolled ) {
      setIsNavVisible(false);
    }

    setLastScrolled(currentScrollY);
  }, [currentScrollY, lastScrolled]);  


  React.useEffect(() => {
    gsap.to(navContainer.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.1,
    });
  },[isNavVisible])

    React.useEffect(() => {
    gsap.to(navSwitchContainer.current, {
      x: !isNavVisible ? "50%" : 100,
      opacity: !isNavVisible ? 1 : 0,
      duration: 0.1,
    });
  },[isNavVisible])
  function showNavBar(){
    setIsNavVisible(true);
    navContainer.current.classList.add("floating-nav")
    navContainer.current.style.color="black"
  }
  return (
    <>
      {/* right-switch button for display NAVBAR */}
      <div ref={navSwitchContainer} onClick={showNavBar}  className=" fixed flex items-center z-50 right-0 top-0 w-28 h-28 rounded-b-full translate-x-1/2 p-4 -translate-y-1/2 -rotate-45  bg-white cursor-pointer
       hover:border hover:border-cyan-400">
          <Menu className='text-black rotate-45'/>
      </div>

      <div
        ref={navContainer}
        id="#header"
        className="fixed inset-x-0 top-4 z-50 h-15 border-0 transition-all duration-700 sm:inset-x-6 rounded-lg"
      >
        

        <header className=" absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4">
            <div className="flex items-center gap-7">
              <h4 className=" uppercase font-bold text-2xl m-0">Asfar</h4>
            </div>
            <div className="flex h-full item-center">
              <div className="hidden md:block">
                {navItems.map((item, index) => (
                  <a key={index} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
