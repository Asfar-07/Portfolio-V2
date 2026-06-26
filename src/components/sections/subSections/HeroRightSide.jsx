import React from 'react'
import Image from 'next/image';
import { Controller, Crystal_1, Crystal_2, Crystal_3, FireFly, FireFlyMoving, Plant_1, Plant_2 } from '../../ui/GroundElements';
import HeroHubUi from '@/components/ui/HeroHubUi';
import TypingCodeUi from '@/components/ui/TypingCodeUi';

export default function HeroRightSide({handleLoad, rightRockRef, rightRockHubRef}) {
  Controller();
  return (
    <div>
      <div
        ref={rightRockRef}
        className={`right-rock absolute z-6 right-0 bottom-0 w-[50%] h-[90%] max-h-[650px] 
        max-md:w-120 max-md:h-130 max-sm:w-full max-sm:min-w-80 max-sm:h-100 max-lg:min-w-130`}
      >
        <div className='w-[22%] h-[22%] absolute right-[6%] bottom-[45%] z-20'>
          <div className=' absolute w-[30%] h-[30%] top-[20%] left-[55%] -z-1 rotate-10'>
            <Plant_1 dust/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_1 dust= {false}/>
          </div>
        </div>

        <div className='w-[10%] h-[10%] absolute right-[2%] bottom-[50%] z-20'>
          <div className=' absolute w-[30%] h-[30%] top-[20%] left-[45%] -z-1 rotate-10'>
            <Plant_2 dust= {false}/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_3 dust= {false}/>
          </div>
        </div>

        <div className='w-[10%] h-[10%] absolute -right-[2%] bottom-[50%] z-20'>
          <div className=' absolute w-[30%] h-[30%] top-[20%] left-[45%] -z-1 rotate-10'>
            <Plant_2 dust= {false}/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_3 dust= {false}/>
          </div>
        </div>

        <div className='w-[23%] h-[23%] absolute right-[2%] bottom-[40%] z-20 -rotate-10'>
          <div className=' absolute w-[22%] h-[22%] top-[36%] left-[58%] z-1 rotate-10'>
            <Plant_1 dust= {false}/>
          </div>
           <div className=' absolute w-[20%] h-[20%] top-[45%] left-[40%] z-1 rotate-0'>
            <Plant_1 dust/>
          </div>
           <div className=' absolute w-[22%] h-[22%] top-[36%] left-[20%] z-1 -rotate-10'>
            <Plant_1 dust= {false}/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_2 dust= {false}/>
          </div>
        </div>

         <div className='w-[23%] h-[21%] absolute -right-[10%] bottom-[40%] z-20 -rotate-10'>
          <div className=' absolute w-[22%] h-[22%] top-[36%] left-[58%] z-1 rotate-10'>
            <Plant_1 dust= {false}/>
          </div>
           <div className=' absolute w-[20%] h-[20%] top-[45%] left-[40%] z-1 rotate-0'>
            <Plant_1 dust= {false}/>
          </div>
           <div className=' absolute w-[22%] h-[22%] top-[36%] left-[20%] z-1 -rotate-10'>
            <Plant_1 dust= {false}/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_2 dust= {false}/>
          </div>
        </div>

        <div className='w-[18%] h-[18%] absolute right-[6%] bottom-[30%] z-20 -rotate-10'>
          <div className=' absolute w-[30%] h-[30%] top-[20%] left-[28%] -z-1 -rotate-20'>
            <Plant_1 dust= {false}/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_1 dust= {false}/>
          </div>
        </div>

        <div className='w-[12%] h-[12%] absolute right-[8%] bottom-[40%] z-15 -rotate-10'>
          <div className=' relative size-full z-0'>
            <Crystal_3 dust= {false}/>
          </div>
        </div>

        <div className='w-[12%] h-[12%] absolute right-[14%] bottom-[32%] z-20'>
          <div className=' relative size-full z-0'>
            <Crystal_3 dust= {false}/>
          </div>
        </div>

        <div className='w-[12%] h-[12%] absolute right-[14%] bottom-[35%] z-20'>
          <div className=' relative size-full z-0'>
            <Crystal_3 dust/>
          </div>
        </div>

        <div className='w-[12%] h-[12%] absolute right-[2.5%] bottom-[35%] z-20 '>
          <div className=' absolute w-[30%] h-[30%] top-[20%] left-[45%] -z-1 -rotate-20'>
            <Plant_1 dust= {false}/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_3 dust= {false}/>
          </div>
        </div>

        <div className='w-[12%] h-[12%] absolute right-[0%] bottom-[35%] z-20 '>
          <div className=' relative size-full z-0'>
            <Crystal_3 dust= {false}/>
          </div>
        </div>

         <div className='w-[21%] h-[18%] absolute -right-[10%] bottom-[30%] z-20 -rotate-10'>
          <div className=' absolute w-[22%] h-[22%] top-[36%] left-[58%] z-1 rotate-10'>
            <Plant_1 dust= {false}/>
          </div>
           <div className=' absolute w-[20%] h-[20%] top-[45%] left-[40%] z-1 rotate-0'>
            <Plant_1 dust/>
          </div>
           <div className=' absolute w-[22%] h-[22%] top-[36%] left-[20%] z-1 -rotate-10'>
            <Plant_1 dust= {false}/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_2 dust= {false}/>
          </div>
        </div>

        <div className='w-[12%] h-[12%] absolute -right-[3%] bottom-[30%] z-20 '>
          <div className=' absolute w-[30%] h-[30%] top-[20%] left-[30%] -z-1 -rotate-50 origin-bottom'>
            <Plant_1 dust= {false}/>
          </div>
          <div className=' absolute w-[30%] h-[30%] top-[20%] left-[30%] -z-1 -rotate-20'>
            <Plant_1 dust/>
          </div>
          <div className=' absolute w-[30%] h-[30%] top-[20%] left-[45%] -z-1 -rotate-20'>
            <Plant_1 dust= {false}/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_3 dust= {false}/>
          </div>
        </div>

         <div className='w-[23%] h-[23%] absolute -right-[2%] bottom-[5%] z-20 -rotate-40'>
          <div className=' absolute w-[22%] h-[22%] top-[36%] left-[58%] z-1 rotate-10'>
            <Plant_2 dust= {false}/>
          </div>
           <div className=' absolute w-[20%] h-[20%] top-[45%] left-[40%] z-1 rotate-0'>
            <Plant_1 dust= {false}/>
          </div>
           <div className=' absolute w-[22%] h-[22%] top-[36%] left-[20%] z-1 -rotate-10'>
            <Plant_2 dust= {false}/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_2 dust= {false}/>
          </div>
        </div>

        {/* bottom of rock */}
        <div className='w-[22%] h-[22%] absolute right-[35%] bottom-[20%] z-20'>
          <div className=' absolute w-[30%] h-[30%] top-[20%] left-[55%] -z-1 rotate-10'>
            <Plant_1 dust/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_1 dust= {false}/>
          </div>
        </div>

        <div className='w-[22%] h-[22%] absolute right-[42%] bottom-[14%] z-20'>
          <div className=' absolute w-[30%] h-[30%] top-[20%] left-[55%] -z-1 rotate-10'>
            <Plant_1 dust/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_1 dust= {false}/>
          </div>
        </div>

        <div className='w-[26%] h-[26%] absolute right-[44%] bottom-[26%] z-20 rotate-15'>
          <div className=' absolute w-[25%] h-[25%] top-[28%] left-[55%] z-1 rotate-10'>
            <Plant_2 dust/>
          </div>
           <div className=' absolute w-[20%] h-[20%] top-[45%] left-[40%] z-1 rotate-0'>
            <Plant_2 dust= {false}/>
          </div>
           <div className=' absolute w-[25%] h-[25%] top-[32%] left-[20%] z-1 -rotate-10'>
            <Plant_2 dust= {false}/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_2 dust= {false}/>
          </div>
        </div>

        <div className='w-[10%] h-[10%] absolute right-[2%] bottom-[50%] z-20'>
          <div className=' absolute w-[30%] h-[30%] top-[20%] left-[45%] -z-1 rotate-10'>
            <Plant_2 dust/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_3 dust= {false}/>
          </div>
        </div>

        <div className='w-[15%] h-[15%] absolute right-[15%] bottom-[16%] z-500 -rotate-10'>
          <div className=' absolute w-[30%] h-[30%] top-[32%] left-[20%] z-1 -rotate-10'>
            <Plant_1 dust= {false}/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_3 dust= {false}/>
          </div>
        </div>

        <div className='w-[15%] h-[15%] absolute right-[18%] bottom-[14%] z-20 -rotate-10'>
          <div className=' absolute w-[30%] h-[30%] top-[32%] left-[20%] z-1 -rotate-10'>
            <Plant_1 dust= {false}/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_3 dust= {false}/>
          </div>
        </div>

        <div className='w-[18%] h-[18%] absolute right-[24%] bottom-[13%] z-15 -rotate-10'>
          <div className=' relative size-full z-0'>
            <Crystal_2 dust/>
          </div>
        </div>

        <div className='w-[18%] h-[18%] absolute right-[34%] bottom-[8%] z-15 -rotate-30'>
          <div className=' absolute w-[30%] h-[30%] top-[32%] left-[20%] z-1'>
            <Plant_1 dust/>
          </div>
          <div className=' absolute w-[30%] h-[30%] top-[32%] left-[80%] z-1'>
            <Plant_1 dust/>
          </div>
           <div className=' absolute w-[30%] h-[30%] top-[25%] left-[50%] -z-1'>
            <Plant_1 dust= {false}/>
          </div>
          <div className=' relative size-full z-0'>
            <Crystal_2 dust= {false}/>
          </div>
        </div>
        
        <div className='w-[22%] h-[22%] absolute right-[50%] -bottom-[5%] z-20'>
          <div className=' relative size-full z-0'>
            <Crystal_1 dust/>
          </div>
        </div>
        {/* <div className='w-[5%] h-[5%] absolute left-0 top-0 z-999'>
          <Plant_1 />
        </div> */}
         {/* <div className='w-[50%] h-[50%] absolute left-0 top-0 bg-blue-950 z-999'>
          <Plant_2 />
        </div> */}
        {/* <div className='w-[20%] h-[20%] absolute left-0 top-0  z-999'>
          <Crystal_1 />
        </div> */}
        {/* <div className='w-[50%] h-[50%] absolute left-0 top-0 bg-amber-600 z-999'>
          <Crystal_3 />
        </div> */}

        {/* astronaut monitor container */}
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
