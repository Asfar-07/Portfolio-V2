import React from 'react'

export default function ShowProjects() {
  return (
    <div className="show-project absolute inset-0 size-full z-50 ">
      <div className="left-top absolute left-10 top-20 w-1/2 min-w-90 p-5 leading-none max-md:w-full  max-md:left-0  max-md:right-0">
        <div className="absolute inset-0 size-full z-2 rotate-180 blur-[30px] bg-[#050818]"></div>
        <h2 className="project-name relative z-10 mb-1 leading-none "></h2>
        <span className="project-type relative z-10  text-cyan-400 font-light  "></span>
        <p className="project-desc relative z-10 mt-3 leading-none text-[15px] font-medium"></p>
      </div>

      <div className="right-top absolute right-10 top-20 p-5 rounded-md overflow-hidden max-md:hidden">
        <main className="flex flex-col border border-amber-50">
          <div className="project-image  w-90 h-50 bg-black">
          </div>
          <div className="w-90 h-25 flex flex-col text-[14px] font-normal justify-between bg-[white] p-2 ">
            <p className='project-name text-black'></p>
            <div className="flex justify-between items-end text-[#0000009d]">
              <p className="flex-1">Web</p>
              <p className="flex-1 text-end">WebFlow Expert, Creative Design</p>
            </div>
          </div>
        </main>
      </div>

      <div className="left-bottom   absolute left-10 bottom-5 p-5 w-80 max-sm:w-full max-sm:left-0 ">
        <div className="project-tools w-full flex gap-5  overflow-hidden  max-sm:justify-center"></div>
      </div>
    </div>
  );
}
