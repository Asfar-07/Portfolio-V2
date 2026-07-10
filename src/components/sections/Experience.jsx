"use client"
import React, { useRef } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import "@/styles/experience.css"
import { experiences } from '@/store/db/experience';
import RobotExperience from '../techModels/RobotExperience';
import { FileBadge, CircleX, University, Download } from 'lucide-react';

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
         <section className=" flex items-center justify-center absolute inset-0 ">

          {/* Display the Certificate */}
          <div className="relative z-30 w-[60%] h-[70%] flex items-center px-6 py-10 bg-[#5917ff] rounded-2xl hidden">
            <aside className='absolute -top-2 -right-2 p-1 bg-amber-50 rounded-full cursor-pointer'><CircleX className=" size-5 text-[#3e00c5da]" /></aside>
            <section className='flex-4 h-[90%] bg-amber-700 border border-white rounded-2xl overflow-hidden'>
              <img className='size-full' src="https://img.magnific.com/free-psd/elegant-certificate-template-with-golden-details_69286-459.jpg?semt=ais_hybrid&w=740&q=80" alt="display" />
            </section>
            <section className='relative flex-3 h-[90%] pl-3 '>
              <h4 className=" font-bold text-lg uppercase">
               BSc Computer Science
             </h4>
              <div className="italic flex items-center text-[10px]">
               <div className='p-.5 bg-[#3e00c57a] mr-2 rounded-full'><University className=" size-3" /></div> 
               University of Kerala <span className="ml-4 text-[#9d77ff]">2021 - 2024</span>
             </div>
             <div className="mt-5 text-[#ffffffba] font-extralight text-[12px] w-full max-w-130 leading-[1.5] tracking-wider">
               Pursued a full undergraduate degree in computer science, gaining deep expertise in data structures, algorithms, software engineering, and more.
             </div>
             <button className=" absolute right-0 bottom-0 flex items-center gap-2 mt-8 px-5 py-2 text-[12px] text-[#9d77ff] bg-[#ffffff] tracking-wider rounded-3xl uppercase cursor-pointer">
               <Download className=' size-5'/>
               Download
             </button>
            </section>
          </div> 

          {experiences.map((exp,index)=>(
           <aside key={index} className={`experience-card absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} top-1/2 p-10 max-w-155 b rounded-2xl 
           border border-[#04deff78] bg-transparent backdrop-blur-3xl max-md:p-5`}>
             {/* <div className='flex items-center gap-2 text-[#cdbbfc] uppercase w-fit text-[12px] rounded-xl px-2.5 py-px bg-[#3e00c53b]'>
              <University className=" size-3" />
              Education
             </div> */}
             <h4 className=" font-bold text-4xl uppercase my-1">
               {exp.title}
             </h4>
             <div className="italic flex items-center mt-2 text-[15px]">
               <div className='p-1.5 bg-[#3e00c57a] mr-2 rounded-full'>{exp.company_name[1]}</div> 
               {exp.company_name[0]} <span className="ml-4 text-[#9d77ff]">{exp.date}</span>
             </div>
             <div className="mt-5 text-[#ffffffba] font-extralight text-[15px] w-full max-w-130 leading-[1.5] tracking-wider">
               {exp.points}
             </div>
             <div className="flex flex-wrap gap-2  mt-4 text-[13px] tracking-wider font-light">
              {exp.skills.map((skill,index)=>(
                <span key={index} className="flex gap-1 px-3 py-2 border border-[#ffffff32] rounded-xl items-center">
                  <div className='p-1.5 bg-[#5100ff7a] mr-2 rounded-lg'>{skill.icon}</div>
                  {skill.name}
                </span>
              ))}
             </div>
             <button className="flex items-center gap-2 mt-8 px-5 py-2 text-[14px] bg-[#5917ff] tracking-wider rounded-3xl uppercase cursor-pointer tracking-wider">
               <FileBadge className=' size-5'/>
               Certification
             </button>
           </aside>
          ))}
           
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
