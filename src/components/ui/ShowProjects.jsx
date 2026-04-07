import React from 'react'

export default function ShowProjects() {
  return (
    <div className="show-project absolute inset-0 size-full z-50 ">
      <div className="left-top absolute left-10 top-20 w-1/2 min-w-90 p-5 max-md:w-full  max-md:left-0  max-md:right-0">
        <div className="absolute inset-0 size-full z-2 rotate-180 blur-[30px] bg-[#01020a]"></div>
        <h2 className="project-name relative z-10 mb-1 leading-none "></h2>
        <span className="project-type relative z-10 mb-2 text-cyan-400 font-bold "></span>
        <p className="project-desc relative z-10 leading-none "></p>
      </div>

      <div className="right-top absolute right-10 top-20 w-90 h-55 p-5 rounded-md overflow-hidden max-md:hidden">
        <div className="project-image size-full">
          
        </div>
      </div>

      <div className="left-bottom   absolute left-10 bottom-5 p-5 w-80 max-sm:w-full max-sm:left-0 ">
        <div className="project-tools w-full flex gap-5  overflow-hidden  max-sm:justify-center"></div>
      </div>
    </div>
  );
}
