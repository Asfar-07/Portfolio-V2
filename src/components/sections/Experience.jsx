"use client"
import React, { useRef, useState } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import "@/styles/experience.css"
import { experiences } from '@/store/db/experience';
import RobotExperience from '../techModels/RobotExperience';
import { FileBadge, CircleX, University, Download } from 'lucide-react';
import Image from 'next/image';



export default function Experience({experiencesBody, leftHeading, rightHeading, robotBody, experiencesMain, groupRobot, setRobotRef}) {


  const [selectedIndex, setSelectedIndex] = useState(null);

  function DisplayCertification({exp}) {
    
    {/* Display the Certificate */}
    return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-100 max-sm:pt-14">
        <div
          className="absolute inset-0 bg-opacity-50"
          onClick={() => setSelectedIndex(null)}
        ></div>
        <div className= {`relative z-100 w-[60%] h-[65%]  flex items-center px-6 py-8 bg-[#5917ff] rounded-2xl
          min-w-150 min-h-90 max-w-180 max-h-100 max-sm:w-[100%] max-sm:min-w-60 max-sm:h-full max-sm:max-h-[90%] max-sm:flex-col max-sm:p-4`}>
          <aside
            className="absolute -top-2 -right-2 p-1 bg-amber-50 rounded-full cursor-pointer"
            onClick={() => setSelectedIndex(null)}
          >
            <CircleX className=" size-5 text-[#3e00c5da]" />
          </aside>
          <section className="flex-4 relative h-[90%] border border-white rounded-sm overflow-hidden max-sm:w-full">
            {exp.certificate ? (
              <Image
                className="size-full"
                src={exp.certificate}
                loading="lazy"
                sizes="(max-width: 768px) 60vw, 200px"
                fill
                alt="display"
              />
            ) : (
              <div className=" size-full bg-[#8c8c8c4a] flex justify-center items-center text-4xl font-bold">
                NONE
              </div>
            )}
          </section>
          <section className="relative flex-3 h-[90%] pl-3 max-sm:w-full max-sm:pl-0 max-sm:pt-3">
            <h4 className=" font-bold text-lg uppercase">{exp.title}</h4>
            <div className="italic flex items-center text-[10px]">
              <div className="p-.5 bg-[#3e00c57a] mr-2 rounded-full">
                <University className=" size-3" />
              </div>
              {exp.company_name[0]}{" "}
              <span className="ml-4 text-[#9d77ff]">{exp.date}</span>
            </div>
            <div className="mt-5 text-[#ffffffba] font-extralight text-[12px] w-full max-h-20 max-w-130 leading-[1.5] tracking-wider">
              {exp.points}
            </div>
            <div className="relative w-full h-[30%] bg-amber-50 mt-2 rounded-xl overflow-hidden">
              <Image
                src={exp.banner}
                alt="Banner"
                fill
                sizes="(max-width: 768px) 100vw, 150px"
                loading="lazy"
                className=" size-full object-cover"
              />
            </div>
            {exp.certificate ? (
              <a
                href={exp.banner}
                target="_blank"
                rel="noopener noreferrer"
                download={true}
                className=" absolute right-0 bottom-0 flex items-center gap-2 mt-8 px-5 py-2 text-[12px] text-[#9d77ff] bg-[#ffffff] tracking-wider rounded-3xl uppercase cursor-pointer"
              >
                <Download className=" size-5" />
                Download
              </a>
            ) : (
              <button className=" absolute right-0 bottom-0 flex items-center gap-2 mt-8 px-5 py-2 text-[12px] text-[#9e77ffbc] bg-[#5959595a] tracking-wider rounded-3xl uppercase cursor-pointer">
                <Download className=" size-5" />
                Download
              </button>
            )}
          </section>
        </div>
      </div>
    );
  }

 return (
   <div ref={experiencesBody} className="absolute min-h-[650px] inset-0">
     <div
       className={`bg-(--p-bg-deep) text-(--p-font) h-screen min-h-[600px] relative p-[0rem_4rem] w-full 
     max-md:p-[0rem_1rem] max-lg:p-[0rem_2rem] overflow-hidden`}
     >
       <main
         ref={experiencesMain}
         className={`flex flex-col justify-center items-center h-full w-100% m-auto relative text-(--p-font)  
         max-w-[1250px] min-h-[600px] max-md:w-full max-md:h-screen`}
       >
         <section className=" flex items-center justify-center absolute inset-0 ">
           {experiences.map((exp, index) => (
             <div key={index}>
               {selectedIndex === index && <DisplayCertification exp={exp} />}

               <aside
                 className={`experience-card absolute ${index % 2 === 0 ? "left-0" : "right-0"} top-1/2 p-10 max-w-155 b rounded-2xl 
           border border-[#04deff78] bg-transparent backdrop-blur-3xl max-md:p-5`}
               >
                 {/* <div className='flex items-center gap-2 text-[#cdbbfc] uppercase w-fit text-[12px] rounded-xl px-2.5 py-px bg-[#3e00c53b]'>
              <University className=" size-3" />
              Education
             </div> */}
                 <h4 className=" font-bold text-4xl uppercase my-1">
                   {exp.title}
                 </h4>
                 <div className="italic flex items-center mt-2 text-[15px]">
                   <div className="p-1.5 bg-[#3e00c57a] mr-2 rounded-full">
                     {exp.company_name[1]}
                   </div>
                   {exp.company_name[0]}{" "}
                   <span className="ml-4 text-[#9d77ff]">{exp.date}</span>
                 </div>
                 <div className="mt-5 text-[#ffffffba] font-extralight text-[15px] w-full max-w-130 leading-[1.5] tracking-wider">
                   {exp.points}
                 </div>
                 <div className="flex flex-wrap gap-2  mt-4 text-[13px] tracking-wider font-light">
                   {exp.skills.map((skill, index) => (
                     <span
                       key={index}
                       className="flex gap-1 px-3 py-2 border border-[#ffffff32] rounded-xl items-center"
                     >
                       <div className="p-1.5 bg-[#5100ff7a] mr-2 rounded-lg">
                         {skill.icon}
                       </div>
                       {skill.name}
                     </span>
                   ))}
                 </div>
                 <button
                   className="flex items-center gap-2 mt-8 px-5 py-2 text-[14px] bg-[#5917ff] tracking-wider rounded-3xl uppercase cursor-pointer tracking-wider"
                   onClick={() => setSelectedIndex(index)}
                 >
                   <FileBadge className=" size-5" />
                   Certification
                 </button>
               </aside>
             </div>
           ))}
         </section>
         <div ref={robotBody} className=" relative size-140">
           <section className="absolute top-[25%] -left-[35%]">
             <div className="floating-box absolute -top-[70%] left-0 size-14 p-2 bg-[#49e1ff] rounded-[10px]">
               <Image
                 className="size-full"
                 src="/images/experience/icons/art.webp"
                 alt="icon"
                 sizes="(max-width: 768px) 20vw, 50px"
                 loading="lazy"
                 width={100}
                 height={100}
               />
             </div>
             <div className="floating-box absolute top-[0%] -left-[45%] p-2 size-12 bg-white rounded-[10px]">
               <Image
                 className="size-full"
                 src="/images/experience/icons/college.webp"
                 alt="icon"
                 sizes="(max-width: 768px) 20vw, 50px"
                 loading="lazy"
                 width={100}
                 height={100}
               />
             </div>
             <div className="floating-box absolute -bottom-[70%] -left-[10%] p-2 size-10 bg-[#ffd49c] rounded-[10px]">
               <Image
                 className="size-full"
                 src="/images/experience/icons/rank.webp"
                 alt="icon"
                 sizes="(max-width: 768px) 20vw, 50px"
                 loading="lazy"
                 width={100}
                 height={100}
               />
             </div>
             <div className="scale-y-[1.2] scale-x-[1.5] overflow-hidden">
               <h4 ref={leftHeading} className="text-6xl font-extrabold">
                 Interfaces
               </h4>
               <span className="exp-heading-tittle text-[#f4ecff]">
                 Showcase
               </span>
             </div>
           </section>
           <section className="absolute bottom-[25%] -right-[38%]">
             <div className="floating-box absolute -top-[70%] right-0 size-14">
               <Image
                 className="size-full"
                 src="/images/experience/icons/net.webp"
                 alt="icon"
                 sizes="(max-width: 768px) 20vw, 50px"
                 loading="lazy"
                 width={100}
                 height={100}
               />
             </div>
             <div className="floating-box absolute top-[0%] -right-[45%] size-12 p-1.5 bg-[#85a4ff] rounded-[10px]">
               <Image
                 className="size-full"
                 src="/images/experience/icons/computer.webp"
                 alt="icon"
                 sizes="(max-width: 768px) 20vw, 50px"
                 loading="lazy"
                 width={100}
                 height={100}
               />
             </div>
             <div className="floating-box absolute -bottom-[70%] -right-[10%] size-11">
               <Image
                 className="size-full"
                 src="/images/experience/icons/code.webp"
                 alt="icon"
                 sizes="(max-width: 768px) 20vw, 50px"
                 loading="lazy"
                 width={100}
                 height={100}
               />
             </div>
             <div className="scale-y-[1.2] scale-x-[1.5] overflow-hidden">
               <h4 ref={rightHeading} className="text-6xl font-extrabold">
                 Experience
               </h4>
               <span className="exp-heading-tittle text-[#f4ecff]">Growth</span>
             </div>
           </section>
           <figure className="w-full h-full">
             <RobotExperience
               groupRobot={groupRobot}
               setRobotRef={setRobotRef}
             />
           </figure>
         </div>
       </main>
     </div>
   </div>
 );
}
