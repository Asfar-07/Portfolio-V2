"use client"
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "@/styles/experience.css"
import { experiences } from '@/store/db/experience';

const ExperienceCard = ({experience})=>(
  <VerticalTimelineElement contentStyle={{background:"rgba(0, 229, 255, 0.03)", color:"#fff"}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img 
        src={experience.icon}
        alt={experience.company_name}
        className=' size-full object-contain rounded-full'
      />
    </div>
  }
  >
    <div>
      <h4 className='text-white text-[22px] font-bold m-0'>{experience.title}</h4>
      <p className='text-[#ffffff7f] text-[14px] font-light m-0' style={{margin:"0px",fontSize:"14px",fontWeight:"400"}}>{experience.company_name}</p>
    </div>
    <p style={{fontSize:"16px",fontWeight:"300", lineHeight:"1.4"}}>{experience.points}</p>
    <div className=' w-full'>
      <ul className='mt-5 flex gap-2 flex-wrap list-none w-full'>
      {experience.skills.map((skill,index)=>(
        <li 
        key={`skill-${index}`}
        className='text-white-100 px-3 py-1 text-[10px] rounded-xl  border border-cyan-400'
        > 
          {skill}
        </li>
      ))}
    </ul>
    </div>
  </VerticalTimelineElement>
)

export default function Experience() {
  return (
    <section id="experience" className=" relative p-[7rem_4rem] w-full z-10 text-white max-md:p-[3rem_1.5rem]">
      <div className='w-100% max-w-[1250px] m-auto '>
        <div className='w-full md:text-center'>
          {/* <p>What I have done so far</p> */}
          <h2 >Education & Experience</h2>
        </div>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
