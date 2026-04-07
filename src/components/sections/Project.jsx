"use client"
import React,{useState,useRef} from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectExperience from '../projectModel/ProjectExperience';
import ShowProjects from '../ui/ShowProjects';
import projects from '@/store/db/projectData';
import { displayTool } from '@/utils/displayTool';
import { displayImage } from '@/utils/dispalyImage';
import { ArrowLeftCircle, ArrowRightCircle,Check,CloudLightningIcon,LucideEdit, check } from 'lucide-react';
import '@/styles/project.css'

gsap.registerPlugin(ScrollTrigger);
const ControllerContext = React.createContext();
const SpeedContext = React.createContext();

export default function Project() {
    const [isNaming, setIsNaming] = useState(false);
    const [direction, setDirection] = useState(0); 
    const [targetSpeed, setTargetSpeed] = useState(5);
    const [name, setName] = useState("Bot");
    const clipRef=useRef(null);

  useGSAP(() => {
    const clipAnimation=gsap.timeline({
      scrollTrigger:{
        trigger:clipRef.current,
        start:'center center',
        end: `+=${800 + projects.length * 700}`,
        scrub:0.5,
        // markers:true,
        pin:true,
      } });
      clipAnimation.to(".mask-clip-path",{
        width:"100vw",
        height:'100vh',
        borderRadius:0,

       },0)
       clipAnimation.to(".plane-controller",{
        opacity:1
       },0)

       let startTime = 1; 
       const q = gsap.utils.selector(clipRef);
       //start
       projects.forEach((project, i) => {
         if (i !== 0) {
           clipAnimation.to(
             q(".left-top"),
             {
               x: -80,
               opacity: 0,
               duration: 0.4,
             },
             startTime,
           );

           clipAnimation.to(
             q(".right-top"),
             {
               scale: 0.8,
               rotate: 5,
               opacity: 0,
               duration: 0.4,
             },
             startTime,
           );

           clipAnimation.to(
             q(".left-bottom"),
             {
               y: 50,
               opacity: 0,
               duration: 0.4,
             },
             startTime,
           );

           startTime += 0.4;
         }

         // CHANGE CONTENT
         clipAnimation.call(
           () => {
             q(".project-name")[0].innerText = project.name;
             q(".project-type")[0].innerHTML =project.type;
             q(".project-desc")[0].innerText = project.description;
             q(".project-image")[0].innerHTML = displayImage(project.image,project.display);
             q(".project-tools")[0].innerHTML = displayTool(project.tool);
           },
           null,
           startTime,
         );

         // end
         clipAnimation.fromTo(
           q(".left-top"),
           { x: 80, opacity: 0 },
           { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
           startTime,
         );

         clipAnimation.fromTo(
           q(".right-top"),
           { scale: 1.2, rotate: -5, opacity: 0 },
           {
             scale: 1,
             rotate: 0,
             opacity: 1,
             duration: 0.7,
             ease: "power2.out",
           },
           startTime,
         );

         clipAnimation.fromTo(
           q(".left-bottom"),
           { y: 60, opacity: 0 },
           { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
           startTime + 0.1,
         );

         startTime += 0.9;
       });
  }, []);


  return (
    <div id="project" className="relative w-full text-(--p-font) z-3 ">
      <section className="w-full mb-7  text-(--p-font) relative z-3 p-[2rem_2rem] max-md:p-[2rem_1.5rem]">
        <main className="w-[90%] flex flex-col items-center max-w-350 m-auto max-md:w-full">
          <div className="text-sm uppercase ms:text-[10px]">
            Welcome to my garage
          </div>

          <div className="project-head mt-6 text-center w-[80%] min-w-80 font-bold max-md:w-full  uppercase leading-[0.8] ">
            Discover My best project and service that I can offer to you
          </div>
        </main>
      </section>

      {/* garage sections */}
      <section
        id="clip"
        ref={clipRef}
        className="relative flex justify-center w-full h-dvh overflow-hidden"
      >
        <ShowProjects />
        <div className=" relative h-full w-100 rounded-2xl overflow-hidden mask-clip-path">
          <img
            src="/images/Garege.webp"
            alt="Background"
            className=" absolute left-0 top-0 size-full object-cover z-10"
          />
          <div className="absolute w-120 min-w-80 h-100 left-1/2 bottom-0  -translate-x-1/2  z-50 overflow-hidden">
            <figure className="size-full overflow-hidden">
              <SpeedContext.Provider value={targetSpeed}>
                <ControllerContext.Provider value={direction}>
                  <ProjectExperience />
                </ControllerContext.Provider>
              </SpeedContext.Provider>
            </figure>
          </div>
          {/* {pilate name} */}
          <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
            {name}
          </div>
          {/* controller model */}
          <div className="plane-controller  opacity-0 flex justify-around p-5 items-center gap-5 absolute right-10 bottom-5 z-50 max-md:hidden">
            <button className=""
            onClick={() => {setTargetSpeed(50)
              setTimeout(()=>{setTargetSpeed(5)
              },5000);
            }}>
              BOOST <CloudLightningIcon />
            </button>
            <div className="flex">
              <button
                onMouseDown={() => setDirection(-1)}
                onMouseUp={() => setDirection(0)}
                onMouseLeave={() => setDirection(0)}
              >
                <ArrowLeftCircle />
              </button>
              <button
                onMouseDown={() => setDirection(1)}
                onMouseUp={() => setDirection(0)}
                onMouseLeave={() => setDirection(0)}
              >
                <ArrowRightCircle />
              </button>
            </div>
            {isNaming ? (
              <div className="flex">
                <input
                  type="text"
                  value={name}
                  className="w-26"
                  maxLength={8}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <button onClick={() => setIsNaming(false)}>
                  <Check />
                </button>
              </div>
            ) : (
              <button onClick={() => setIsNaming(true)}>
                <LucideEdit />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
export { ControllerContext };
export { SpeedContext };