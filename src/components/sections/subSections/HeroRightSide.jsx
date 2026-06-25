import React from 'react'
import Image from 'next/image';
import { FireFly, FireFlyMoving } from '../../ui/GroundElements';
import HeroHubUi from '@/components/ui/HeroHubUi';
import TypingCodeUi from '@/components/ui/TypingCodeUi';

export default function HeroRightSide({handleLoad, rightRockRef, rightRockHubRef}) {
  return (
    <div>
      <div
        ref={rightRockRef}
        className={`right-rock absolute z-6 right-0 bottom-0 w-[50%] h-[90%] max-h-[650px] 
        max-md:w-120 max-md:h-130 max-sm:w-full max-sm:min-w-80 max-sm:h-100 max-lg:min-w-130`}
      >
        <div className="astronaut-monitor  z-0 absolute origin-center ">
          <div className="size-full">
            <div className=" absolute top-0 left-0 w-full h-[6%] bg-[#3800a947]"></div>
            <div className=" absolute top-0 left-0 w-[6%] h-full bg-[#3800a947]"></div>
            <div className=" absolute right-0 bottom-0 w-[92%] h-[85%]">
              <TypingCodeUi
                className="bottom-[20%] text-[4px] px-1 text-[#47a0ff] font-light"
                multiColor
              />
            </div>
            <div></div>
          </div>
        </div>
        <HeroHubUi rightRockHubRef={rightRockHubRef} />
        <Image
          src="/images/hero/heroRightSide.webp"
          alt="Rocks Image"
          fill
          sizes="(max-width: 768px) 100vw, 1000px"
          onLoad={handleLoad}
          className="rocks-img size-full object-fill object-bottom-right"
          priority
        />
        <FireFly className={`w-0.5 h-0.5 right-[38%] bottom-[30%]`} />
        <FireFly className="w-0.75 h-0.75 right-[30%] bottom-[20%]" />
        <FireFly className="w-0.5 h-0.5 right-[5%] bottom-[35%] " />
        <FireFly className="w-0.75 h-0.75 right-[60%] bottom-[15%] rotate-y-45" />
        <FireFly className="w-0.75 h-0.75 right-[15%] bottom-[30%] rotate-x-45" />
        <FireFly className="w-0.5 h-0.5 right-[5%] bottom-[18%] rotate-x-45" />
        <FireFlyMoving className="w-0.75 h-0.75 right-[15%] bottom-[15%] rotate-x-45" />
        <FireFlyMoving className="w-0.75 h-0.75 delay-75  right-[12%] bottom-[0%]" />
      </div>
    </div>
  );
}
