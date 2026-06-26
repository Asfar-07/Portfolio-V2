import React from 'react'
import TypingCodeUi from './TypingCodeUi';

export default function HeroHubUi({rightRockHubRef}) {
  return (
    <div
      ref={rightRockHubRef}
      className="hub flex flex-col gap-0  h-[38%] w-[30%] absolute right-[53%] bottom-[62%] z-10"
    >
      <section className="relative  w-[100%]  h-[55%]  flex justify-center items-center">
        <svg
          className="size-full absolute inset-0"
          viewBox="0 0 350 200"
          fill="none"
        >
          <path
            d="M30 20 H120 L145 40 H320 Q335 40 335 55 V170 Q335 185 320 185 H30 Q15 185 15 170 V35 Q15 20 30 20 Z"
            fill="rgba(255,255,255,0.05)"
            stroke="#9f67ff"
            strokeWidth="1"
          />
        </svg>
        <main className=" size-full  overflow-hidden flex justify-center">
          <div className=" flex flex-col absolute top-[15%] h-[70%] w-[88%]">
            <header className="flex w-full h-[20%] pt-0.5">
              <div className="text-[#9f67ffc2] text-[12px]">{"</>"}</div>
              <ul className="relative ml-1 flex items-center gap-1">
                <li className="size-1.5 bg-red-700 rounded-full"></li>
                <li className="size-1.5 bg-yellow-500 rounded-full"></li>
                <li className="size-1.5 bg-green-700 rounded-full"></li>
              </ul>
            </header>
            <div className="coding-area relative w-full h-[80%] pt-1 ">
              <div className=" absolute inset-0 z-10 overflow-hidden">
                <div className=" hub-notify-ui absolute top-0 right-2 w-[25%] h-[30%] bg-[#6105ff] rounded-[1px] p-1">
                  <p className="text-[#ffffff8a] font-extralight text-[5px]">
                    hi... <br />
                    what is next?
                  </p>
                </div>
              </div>
              <TypingCodeUi
                className="bottom-[20%] text-[6px] px-1 text-[#c7a7ffc2] font-light"
                multiColor={false}
              />
            </div>
          </div>
        </main>
      </section>
      <section className="w-full h-[40%]  pl-2">
        <main className="w-1/2 h-full flex items-center  border border-[#9f67ffc2] bg-[#ffffff0d] rounded-lg overflow-hidden">
          <div className="relative size-full flex flex-col p-1 gap-1">
            <div className="flex flex-2 flex-row gap-1 font-medium text-[7px] text-[#9f67ffc2] leading-none">
              <div className="flex w-[40%] h-full items-center ">
                1010001110<br></br> 1010001110<br></br> 1010001110
              </div>
              <div className="w-[60%] h-full relative ">
                <div className="spinning size-8 flex justify-center items-center absolute left-0 top-0 rounded-full border-t-2 border-[#9f67ffc2]">
                  <aside className="size-2 bg-[#9f67ffc2] rounded-full "></aside>
                </div>
                <div className="spinning size-8 flex justify-center items-center absolute right-0 top-0 rounded-full border-b-2 border-[#9f67ffc2] ">
                  <aside className="size-2 bg-[#9f67ffc2] rounded-full"></aside>
                </div>
              </div>
            </div>
            <div className="flex flex-3 ">
              <ul className="hub-graph size-full flex gap-1 items-end justify-between">
                <li
                  className=" flex-1 h-full bg-[#6f00ffc2]"
                  style={{ animation: "animateGraph 20s 2s ease-in infinite" }}
                ></li>
                <li
                  className=" flex-1 h-full bg-[#6f00ffc2]"
                  style={{ animation: "animateGraph 35s 4s ease-in infinite" }}
                ></li>
                <li
                  className=" flex-1 h-full bg-[#6f00ffc2]"
                  style={{ animation: "animateGraph 55s 10s ease-in infinite" }}
                ></li>
                <li
                  className=" flex-1 h-full border-3 border-[#6f00ffc2]"
                  style={{ animation: "animateGraph 70s 1s ease-in infinite" }}
                ></li>
              </ul>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
