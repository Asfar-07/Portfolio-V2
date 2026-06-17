import React, {useRef,useEffect} from 'react'
import { ArrowRight } from 'lucide-react';
import '../../styles/welcome.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollMove from '@/utils/ScrollMove';

gsap.registerPlugin(ScrollTrigger)

export default function Welcome({heroRef, timelineRef}) {
  const topBadgeRef = useRef();
  const mainTitleRef = useRef();
  const rolesRef = useRef();
  const taglineRef = useRef();
  const hintRef = useRef();

  useGSAP(() => {
    const badge    = topBadgeRef.current
    const title    = mainTitleRef.current
    const roles    = rolesRef.current
    const tagline  = taglineRef.current
    const hero     = heroRef.current

    // Perspective on container for 3D z transforms
    gsap.set(hero,    { perspective: 1200 })
    gsap.set([badge, title, roles, tagline], {
      transformStyle: 'preserve-3d',
      willChange: 'transform, opacity',
      force3D: true,
      scale: 1,
      z: 0,
      opacity: 0
    })

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: '0% top',
        end: '+=1000',
        pin: true,
        anticipatePin: true,
        scrub: 0.8,
      },
    })

    t1
      .fromTo(badge,
        { scale: 1, z: 0, opacity: 1 },
        { scale: 0.08, z: -800, opacity: 0, transformOrigin: '50% 50%', ease: 'power2.inOut', duration: 0.28 },
        0)
      .fromTo(tagline,
        { scale: 1, z: 0, opacity: 1 },
        { scale: 0.05, z: -1000, opacity: 0, transformOrigin: '50% 50%', ease: 'power2.inOut', duration: 0.26 },
        0.03)
      .fromTo(roles,
        { scale: 1, z: 0, opacity: 1 },
        { scale: 0.06, z: -900, opacity: 0, transformOrigin: '50% 50%', ease: 'power2.inOut', duration: 0.28 },
        0.05)
      .fromTo(title,
        { scale: 1, z: 0, opacity: 1 },
        { scale: 0.01, z: -2000, opacity: 0, transformOrigin: '50% 50%', ease: 'power2.inOut', duration: 0.48 },
        0.1)
  }, []);

  return (
      <div
        id="welcome"
        className={`welcome bg-transparent text-(--p-font) h-auto min-h-[650px] absolute inset-0 z-50 
          p-[0rem_4rem] w-full max-md:p-[0rem_1.5rem] max-lg:p-[0rem_2rem]`}
      >
        <main
          className={`flex w-100%  h-screen  max-w-[1250px] m-auto   relative z-3 text-(--p-font) 
        max-md:w-full`}
        >
          <section className=" relative size-full flex gap-4 flex-col justify-center items-center">
            <div ref={topBadgeRef} className="text-sm grad uppercase border px-6 py-1.5 border-[#2395ff75] rounded-3xl">
              Welcome to my
            </div>
            <div ref={mainTitleRef}>
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
            <div ref={rolesRef}>
              <ul className="list-highlight text-[18px] -tracking-tighter uppercase mt-4 flex items-center gap-12 max-sm:gap-2 max-sm:text-[14px]">
                <li>developer</li>
                <span className="bg-[#4F6FFF]"></span>
                <li>designer</li>
                <span className="bg-[#9B4EFF]"></span>
                <li>learner</li>
              </ul>
            </div>
            <div ref={taglineRef} className="flex flex-col items-center gap-10">
              <p className="w-100 text-center mt-2 text-sm opacity-[.6] max-sm:text-[12px] max-sm:px-2 max-sm:w-full">
                transforming ideas into digital experiences that are modern,
                responsive & user focused.
              </p>
              <button onClick={() => ScrollMove("projects", timelineRef)}
              className="welcome-bottom-button flex gap-4 items-center font-bold uppercase py-2 px-6 text-[12px] rounded-3xl cursor-pointer">
                <span>explore my work</span>
                <span>
                  <ArrowRight />
                </span>
              </button>
            </div>
          </section>
        </main>
      </div>
  );
}
