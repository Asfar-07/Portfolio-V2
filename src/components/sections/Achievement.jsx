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
export default function Achievement() {

  const word = "GROWTH".split("");
  const wordSectionRef = useRef(null);

  useGSAP(() => {
    const letters = gsap.utils.toArray(".letter");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wordSectionRef.current,
        start: "20% bottom",
        end: "110% bottom",
        scrub: 3.5,
      },
    });
    
     letters.forEach((letter, index) => {
      tl.fromTo(
        letter,
        {
          y: index * 150 + 20,
        },
        {
          y: 0,
          duration: 1,
        },
        index === 0 ? 0 : "<0.04",
      );
    });

  },[]);

  return (
    <div className="achievement bg-(--s-bg-deep) text-(--p-font) h-auto min-h-[650px] relative p-[0rem_4rem] w-full max-md:p-[0rem_1.5rem] max-lg:p-[0rem_2rem]">
      <main className="flex flex-col  w-100% m-auto  max-w-[1250px] pt-25  relative text-(--p-font)  max-md:w-full max-md:h-auto">
        <section className=" flex w-full items-center justify-center">
          <div ref={wordSectionRef} className=" relative uppercase text-[15rem] font-semibold leading-[1em] scale-y-[1.15] tracking-normal text-white">
            {word.map((letter, index) => (
              <span
                key={index}
                className=" relative inline-block letter text-white"
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
                className="relative bg-(--s-bg-deep) flex h-43 tracking-normal border-t border-t-white pt-10 "
              >
                <div className="flex items-center uppercase text-6xl pl-[2rem] font-semibold w-[33.3333%] h-full">
                  {growth.name}
                </div>
                <div className="flex items-center justify-start pl-[4rem] w-[33.3333%] h-full">
                  <span className=" uppercase ">plus</span>
                  <span className="text-[10rem] scale-y-[1.2] font-semibold leading-[1em] tracking-normal text-white">
                    {growth.count}
                  </span>
                </div>
                <div className="flex items-center justify-center w-[33.3333%] h-full">
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
