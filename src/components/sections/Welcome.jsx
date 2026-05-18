import React from 'react'
import { ArrowRight } from 'lucide-react';
import '../../styles/welcome.css'

export default function Welcome() {
  return (
    <>
      <div
        id="welcome"
        className="welcome bg-(--p-bg-deep) text-(--p-font) h-auto min-h-[650px] absolute inset-0 z-50 p-[0rem_4rem] w-full max-md:p-[0rem_1.5rem] max-lg:p-[0rem_2rem]"
      >
        <main
          className="flex w-100%  h-screen  max-w-[1250px]  relative z-3 text-(--p-font) 
        max-md:w-full"
        >
          <section className=" relative size-full flex gap-4 flex-col justify-center items-center">
            <div className="text-sm grad uppercase border px-6 py-1.5 border-[#2395ff75] rounded-3xl">
              Welcome to my
            </div>
            <div>
              <h4 className="inline-block font-bold text-[160px] tracking-[0.2rem] m-0 p-0 text-start leading-none max-md:text-[100px] max-sm:text-[70px]">
                <span>p</span>
                <span className='rounded-grad'>o</span>
                <span>r</span>
                <span>t</span>
                <span>f</span>
                <span>o</span>
                <span>l</span>
                <span>i</span>
                <span>o</span>
              </h4>
            </div>
            <div>
              <ul className="list-highlight text-xl uppercase mt-4 flex items-center gap-12 max-sm:gap-2 max-sm:text-[14px]">
                <li>developer</li>
                <span className="bg-[#4F6FFF]"></span>
                <li>designer</li>
                <span className="bg-[#9B4EFF]"></span>
                <li>learner</li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-10">
              <p className="w-100 text-center mt-2 text-sm opacity-[.6] max-sm:text-[12px] max-sm:px-2 max-sm:w-full">
                transforming ideas into digital experiences that are modern,
                responsive & user focused.
              </p>
              <button className="welcome-bottom-button flex gap-4 items-center font-bold uppercase py-2 px-6 text-[12px] rounded-3xl cursor-pointer">
                <span>explore my work</span>
                <span>
                  <ArrowRight />
                </span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
