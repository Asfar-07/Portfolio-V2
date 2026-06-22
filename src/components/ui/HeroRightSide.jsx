import React from 'react'
import Image from 'next/image';
import { FireFly, FireFlyMoving } from './GroundElements';

export default function HeroRightSide({handleLoad, rightRockRef, rightRockHubRef}) {
  return (
    <div>
      <div
        ref={rightRockRef}
        className="right-rock absolute z-6 right-0 bottom-0 w-[55%] h-full max-h-[650px] max-md:w-120 max-md:h-130 max-sm:w-100 max-sm:h-100"
      >
        <div
          ref={rightRockHubRef}
          className="hub flex flex-col gap-0  h-[36%] w-[28%] absolute left-[25%] top-[12%] z-500 "
        >
          <div className="relative  w-[100%]  h-[55%]  flex justify-center items-center">
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
            <main className=" overflow-hidden flex justify-center">
              <div className=" absolute top-[12%] h-[70%] w-[85%] ">
                <Image
                  src="/images/hero/hub_container1.webp"
                  fill
                  sizes="(max-width: 768px) 40vw, 80px"
                  className="size-full object-contain"
                  alt="hub container"
                />
              </div>
            </main>
          </div>
          <div className="w-full h-[40%]  pl-2">
            <main className="w-1/2 h-full flex items-center  border border-[#9f67ffc2] bg-[#ffffff0d] rounded-lg overflow-hidden">
              <div className="relative size-full">
                <Image
                  src="/images/hero/hub_container2.webp"
                  sizes="(max-width: 768px) 40vw, 80px"
                  fill
                  alt="hub container"
                  className="size-full object-contain object-left-bottom"
                />
              </div>
            </main>
          </div>
        </div>
        <Image
          src="/images/hero/hero_rightRock.webp"
          alt="Rocks Image"
          fill
          sizes="(max-width: 768px) 100vw, 1000px"
          onLoad={handleLoad}
          className="rocks-img size-full object-cover object-center"
          priority
        />
        < FireFly className={`w-0.5 h-0.5 right-[38%] bottom-[30%]`}/>
        < FireFly className="w-0.75 h-0.75 right-[30%] bottom-[20%]" />
        < FireFly className="w-0.5 h-0.5 right-[5%] bottom-[35%] " />
        < FireFly className="w-0.75 h-0.75 right-[60%] bottom-[15%] rotate-y-45" />
        < FireFly className="w-0.75 h-0.75 right-[15%] bottom-[30%] rotate-x-45" />
        < FireFly className="w-0.5 h-0.5 right-[5%] bottom-[18%] rotate-x-45" />
        < FireFlyMoving className="w-0.75 h-0.75 right-[15%] bottom-[15%] rotate-x-45" />
        < FireFlyMoving className="w-0.75 h-0.75 delay-75  right-[12%] bottom-[0%]" />
      </div>
    </div>
  );
}
