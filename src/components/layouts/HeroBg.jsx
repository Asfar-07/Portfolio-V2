"use client"
import {useRef,useEffect} from 'react'
import DroneExperience from '../models/DroneExperience';
import "../../styles/heroBg.css"
import PlanetExperience from '../heromodel/PlanetExperience';

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
    <div className="fixed w-full h-screen min-h-[600px] inset-0 z-0 overflow-hidden">
      <div className="hero-bg w-full h-screen"></div>
      <div className="stars" id="stars" ref={starDiv}></div>
      <div className="clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
        <div className="cloud cloud-5"></div>
        <div className="cloud cloud-6"></div>
      </div>
      <div>
        
        <div className="moon-planet absolute bottom-[10%] right-0 h-100 w-[40%] max-sm:hidden">
          {/* <figure >
              <DroneExperience />
            </figure> */}
        </div>

        <div className=" flex justify-end items-center  w-[40%] h-full absolute right-0 bottom-0 max-md:w-full max-md:justify-center ">
          <div className=" w-[95%] h-[70%] translate-x-1/6  rotate-20 max-md:translate-x-0 max-md:w-full">
            <figure className="w-full h-full">
              <PlanetExperience />
            </figure>
          </div>
        </div>

      </div>
    </div>
  );
}
