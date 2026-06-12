"use client";
import React,{useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const growths = [
  {
    name: "3D UI/UX",
    count: "5",
    point:
      "Creating immersive and modern user experiences using advanced libraries and frameworks",
  },
  {
    name: "Cloud",
    count: "2",
    point:
      "Building secure and scalable cloud infrastructure with Spring-based technologies",
  },
  {
    name: "Database",
    count: "10",
    point:
      "Designing and managing efficient relational and non-relational database systems",
  },
  {
    name: "Tools",
    count: "3",
    point:
      "Building custom tools to improve productivity and solve complex development challenges",
  },
];
export default function Achievement({achievementBodyRef}) {
  const achievementHeadingRef = useRef(null);

  const word = "GROWTH".split("");

  useGSAP(() => {
    const letters = gsap.utils.toArray(".achievement-heading");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: achievementHeadingRef.current,
        start: "20% 90%",
        end: "110% 90%",
        scrub: 3,
      },
    });
    
     letters.forEach((letter, index) => {
       tl.fromTo( letter, {  y: index * 100 + 20 }, { y: 0, duration: 1}, index === 0 ? 0 : "<0.04" );
     });

  },[]);

  useGSAP(() => {
    const growthItems = gsap.utils.toArray(".growth");

    growthItems.forEach((item, index) => {
      const count = item.querySelector(".growth-count");

      gsap.set(item, { y: 80 });
      gsap.set(count, { y: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "-50% bottom",
          end: "120% bottom",
          scrub: 3,
        },
      });

      tl.to( item, { y: 0, duration: 1 })
        .to( count, { y: 0, duration: 1 }, "<=+0.5")

    });
  }, []);

  return (
      <div className="achievement bg-(--s-bg-deep)  text-(--p-font) h-auto relative p-[0rem_4rem] w-full max-md:p-[0rem_1.5rem] max-lg:p-[0rem_2rem]">
        <main className="flex flex-col  w-100% m-auto  max-w-[1250px] pt-25  relative text-(--p-font)  max-md:w-full max-md:h-auto">
          <section className=" flex w-full items-center justify-center">
            <div
              ref={achievementHeadingRef}
              className=" inline-block relative uppercase text-[15rem] whitespace-nowrap font-semibold leading-[1em] scale-y-[1.15] tracking-normal text-white
            max-xl:text-[13rem] max-lg:text-[10rem] max-md:text-[8rem] max-sm:text-[6rem] [@media(max-width:448px)]:text-[4rem]"
            >
              {word.map((letter, index) => (
                <span
                  key={index}
                  className="achievement-heading relative inline-block text-white"
                >
                  {letter}
                </span>
              ))}
            </div>
          </section>
          <section className=" flex flex-col w-full">
            <ul className="flex flex-col  mt-25 pb-10">
              {growths.map((growth, index) => (
                <li
                  key={index}
                  className="growth relative bg-(--s-bg-deep) flex flex-wrap h-45 tracking-normal border-t border-t-white pt-10 
                max-lg:pb-10 max-lg:h-auto"
                >
                  <div
                    className="flex items-center uppercase text-6xl pl-[2rem] font-semibold w-[33.3333%] h-full
                 max-lg:w-1/2 max-lg:pl-0 max-sm:text-5xl"
                  >
                    {growth.name}
                  </div>
                  <div
                    className="growth-count flex items-center justify-start pl-[4rem] w-[33.3333%] h-full
                max-lg:w-1/2 max-lg:justify-end"
                  >
                    <span className=" uppercase text-2xl max-lg:mr-3">
                      plus
                    </span>
                    <span
                      className=" text-[10rem] scale-y-[1.2] font-semibold leading-[1em] tracking-normal text-white
                  max-lg:text-[8rem] max-lg:leading-[.8] max-sm:text-[6rem]"
                    >
                      {growth.count}
                    </span>
                  </div>
                  <div
                    className="flex items-center text-xl justify-center w-[33.3333%] h-full
                max-lg:w-full max-lg:justify-start max-lg:max-w-150 max-sm:pt-4 max-sm:text-xl"
                  >
                    {growth.point}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
  );
}
