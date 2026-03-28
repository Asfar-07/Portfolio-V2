"use client"
import {useRef,useEffect} from 'react'
import "../../styles/heroBg.css"

export default function HeroBg() {
    const starDiv=useRef();
    useEffect(()=>{
        if (starDiv.current) {
          const starsContainer = starDiv.current;
          for (let i = 0; i < 120; i++) {
            const star = document.createElement("div");
            star.className = "star";
            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 70 + "%";
            star.style.animationDelay = Math.random() * 3 + "s";
            star.style.animationDuration = 1.5 + Math.random() * 2 + "s";
            if (Math.random() > 0.85) {
              star.style.width = "3px";
              star.style.height = "3px";
              star.style.boxShadow = "0 0 4px white";
            }
            starsContainer.appendChild(star);
          }
        }
    },[])
  return (
    <div className='fixed w-full h-screen inset-0 z-0'>
      <div className="hero-bg w-full h-screen">
      </div>
      <div className="stars" id="stars" ref={starDiv}></div>
      <div className="clouds">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
          <div className="cloud cloud-4"></div>
          <div className="cloud cloud-5"></div>
          <div className="cloud cloud-6"></div>
        </div>
    </div>
  );
}
