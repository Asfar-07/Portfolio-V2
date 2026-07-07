"use client"
import React, { useRef } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import "@/styles/experience.css"
import { experiences } from '@/store/db/experience';
import RobotExperience from '../techModels/RobotExperience';

export default function Experience() {
  const experiencesBody = useRef(null);
  const experiencesMain = useRef(null);
  const robotBody = useRef(null);
  const leftHeading = useRef(null);
  const rightHeading = useRef(null);

 return (
    <div ref={experiencesBody} className=' relative'>
      <div className="bg-(--p-bg-deep) text-(--p-font) h-screen min-h-[600px] relative p-[0rem_4rem] w-full max-md:p-[0rem_1.5rem] max-lg:p-[0rem_2rem]">
        <main ref={experiencesMain} className=" flex flex-col justify-center items-center  w-100% m-auto  max-w-[1250px] min-h-[600px] relative text-(--p-font) overflow-hidden  max-md:w-full max-md:h-auto">
          <section>
            
          </section>
          <div ref={robotBody} className=' relative size-140'>
            <div className=' absolute top-[25%] -left-[35%]  scale-y-[1.2] scale-x-[1.5] overflow-hidden'>
              <h4 ref={leftHeading} className='text-6xl font-extrabold'>Interfaces</h4>
              <span className='exp-heading-tittle'>memorical</span>
            </div>
            <div className=' absolute bottom-[25%] -right-[38%]  scale-y-[1.2] scale-x-[1.5] overflow-hidden'>
              <h4 ref={rightHeading} className='text-6xl font-extrabold'>Experience</h4>
              <span className='exp-heading-tittle'>path</span>
            </div>
            <figure className='w-full h-full'>
              <RobotExperience experiencesBody={experiencesBody} leftHeading={leftHeading} rightHeading={rightHeading} robotBody={robotBody} experiencesMain={experiencesMain}/>
            </figure>
          </div>
        </main>
      </div>
    </div>
  );
}
