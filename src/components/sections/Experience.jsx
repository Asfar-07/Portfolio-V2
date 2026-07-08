"use client"
import React, { useRef } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import "@/styles/experience.css"
import { experiences } from '@/store/db/experience';
import RobotExperience from '../techModels/RobotExperience';
import { FileBadge, University } from 'lucide-react';

export default function Experience() {
  const experiencesBody = useRef(null);
  const experiencesMain = useRef(null);
  const robotBody = useRef(null);
  const leftHeading = useRef(null);
  const rightHeading = useRef(null);

 return (
   <div ref={experiencesBody} className=" relative">
     <div className={`bg-(--p-bg-deep) text-(--p-font) h-screen min-h-[600px] relative p-[0rem_4rem] w-full 
     max-md:p-[0rem_1rem] max-lg:p-[0rem_2rem] overflow-hidden`}>
       <main
         ref={experiencesMain}
         className={`flex flex-col justify-center items-center h-full w-100% m-auto relative text-(--p-font)  
         max-w-[1250px] min-h-[600px] max-md:w-full max-md:h-screen`}
       >
         <section className=" absolute inset-0 ">
           <aside className={`experience-card absolute left-0 top-1/2 p-10 max-w-155 -translate-y-1/2 b rounded-2xl 
           border border-[#04deff78] bg-transparent backdrop-blur-3xl max-md:p-5`}>
             {/* <div className='flex items-center gap-2 text-[#cdbbfc] uppercase w-fit text-[12px] rounded-xl px-2.5 py-px bg-[#3e00c53b]'>
              <University className=" size-3" />
              Education
             </div> */}
             <h4 className=" font-bold text-4xl uppercase my-1">
               BSc Computer Science
             </h4>
             <div className="italic flex items-center mt-2 text-[15px]">
               <div className='p-1.5 bg-[#3e00c57a] mr-2 rounded-full'><University className="text-[#9d77ff] size-5" /></div> University of
               Kerala <span className="ml-4 text-[#9d77ff]">2021 - 2024</span>
             </div>
             <div className="mt-5 text-[#ffffffba] font-extralight text-[15px] w-full max-w-130 leading-[1.5] tracking-wider">
               Pursued a full undergraduate degree in computer science, gaining
               deep expertise in data structures, algorithms, software
               engineering, and more.
             </div>
             <div className="flex flex-wrap gap-2  mt-4 text-[13px] tracking-wider font-light">
               {/* <div class>Data Structures & Algorithms</div> */}
               <span className="flex gap-1 px-3 py-2 border border-[#ffffff32] rounded-xl items-center">
                  <div className='p-1.5 bg-[#5100ff7a] mr-2 rounded-lg'><University className="text-[#9d77ff] size-5.5" /> </div>
                  Data Structures & Algorithms
               </span>
               <span className="flex gap-1 px-3 py-2 border border-[#ffffff32] rounded-xl items-center">
                  <div className='p-1.5 bg-[#5100ff7a] mr-2 rounded-lg'><University className="text-[#9d77ff] size-5.5" /> </div>
                 Software
                 Engineering
               </span>
               <span className="flex gap-1 px-3 py-2 border border-[#ffffff32] rounded-xl items-center">
                  <div className='p-1.5 bg-[#5100ff7a] mr-2 rounded-lg'><University className="text-[#9d77ff] size-5.5" /> </div>
                  Database Systems
               </span>
               <span className="flex gap-1 px-3 py-2 border border-[#ffffff32] rounded-xl items-center">
                 <div className='p-1.5 bg-[#5100ff7a] mr-2 rounded-lg'><University className="text-[#9d77ff] size-5.5" /></div> Operating
                 Systems
               </span>
               {/* <span className="flex gap-1 px-3 py-2 border border-[#ffffff8c] rounded-xl items-center">
                  <div className='p-1.5 bg-[#5100ff7a] mr-2 rounded-lg'><University className="text-[#9d77ff] size-5.5" /> </div>
                 Networking
               </span> */}
             </div>
             <button className="flex items-center gap-2 mt-8 px-5 py-2 text-[14px] bg-[#5917ff] tracking-wider rounded-3xl uppercase cursor-pointer tracking-wider">
               <FileBadge className=' size-5'/>
               Certification
             </button>
           </aside>
         </section>
         <div ref={robotBody} className=" relative size-140">
           <div className=" absolute top-[25%] -left-[35%]  scale-y-[1.2] scale-x-[1.5] overflow-hidden">
             <h4 ref={leftHeading} className="text-6xl font-extrabold">
               Interfaces
             </h4>
             <span className="exp-heading-tittle">memorical</span>
           </div>
           <div className=" absolute bottom-[25%] -right-[38%]  scale-y-[1.2] scale-x-[1.5] overflow-hidden">
             <h4 ref={rightHeading} className="text-6xl font-extrabold">
               Experience
             </h4>
             <span className="exp-heading-tittle">path</span>
           </div>
           <figure className="w-full h-full">
             <RobotExperience
               experiencesBody={experiencesBody}
               leftHeading={leftHeading}
               rightHeading={rightHeading}
               robotBody={robotBody}
               experiencesMain={experiencesMain}
             />
           </figure>
         </div>
       </main>
     </div>
   </div>
 );
}
