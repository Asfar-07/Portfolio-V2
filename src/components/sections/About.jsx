"use client"
import React,{ useEffect,useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "@/styles/about.css"

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const glitchBox = useRef(null);
  const sliderRef = useRef();

 useEffect(() => {
  if (!glitchBox.current) return;

  const mainLayer = glitchBox.current.querySelectorAll(".layer");
  const redLayer = glitchBox.current.querySelector(".red");
  const greenLayer = glitchBox.current.querySelector(".green");
  const blueLayer = glitchBox.current.querySelector(".blue");
  const originalLayer = glitchBox.current.querySelector(".original");

  redLayer.style.animation = "redMove 0.15s infinite alternate";
  greenLayer.style.animation = "greenMove 0.2s infinite alternate";
  blueLayer.style.animation = "blueMove 0.12s infinite alternate";

  redLayer.style.animationPlayState = "paused";
  greenLayer.style.animationPlayState = "paused";
  blueLayer.style.animationPlayState = "paused";

   mainLayer.forEach((item)=>{
      item.style.mixBlendMode = "normal";
      item.style.opacity = "0";

    })
    originalLayer.style.opacity = "1";


  const interval = setInterval(() => {
    redLayer.style.animationPlayState = "running";
    greenLayer.style.animationPlayState = "running";
    blueLayer.style.animationPlayState = "running";

    mainLayer.forEach((item)=>{
      item.style.mixBlendMode = "screen";
      item.style.opacity = "1";
    })

    setTimeout(() => {
      redLayer.style.animationPlayState = "paused";
      greenLayer.style.animationPlayState = "paused";
      blueLayer.style.animationPlayState = "paused";

      mainLayer.forEach((item)=>{
      item.style.mixBlendMode = "normal";
      item.style.opacity = "0";
    })
    originalLayer.style.opacity = "1";
    }, 1500);
  }, 8000);

  return () => clearInterval(interval);
}, []);

useGSAP(() => {
  const items = gsap.utils.toArray("h2", sliderRef.current);

  if (!items.length) return;

  const itemHeight = 25;

  gsap.set(items, {
      top: 0,
      rotateX: 90,
      transformPerspective: 1000,
    });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top top",
      end: "+=2500",
      scrub: 1,
      pin: true,
      anticipatePin:true
    },
  });

 items.forEach((card, i) => {
  const base = i * 1; 

  tl.to(
    card,
    {
      top: "30%",
      yPercent: -50,
      rotateX: 0,
      transformOrigin: "bottom",
      ease: "none",
      duration: 1,
    },
    base
  )
    .to(
      card,
      {
        top: "50%",
        yPercent: -50,
        rotateX: 0,
        transformOrigin: "bottom",
        ease: "none",
        duration: 1,
      },
      base + 1
    )
    .to(
      card,
      {
        top: "70%",
        yPercent: -50,
        rotateX: 0,
        transformOrigin: "top",
        ease: "none",
        duration: 1,
      },
      base + 2
    )
    .to(
      card,
      {
        top: "100%",
        yPercent: -50,
        transformOrigin: "top",
        rotateX: -90,
        ease: "none",
        duration: 1,
      },
      base + 3
    );
});
}, []);

return (
  <div
    id="about"
    className="about bg-(--p-bg-deep)  text-(--p-font) relative p-[7rem_4rem] w-full max-md:p-[3rem_1.5rem]"
  >
    <main className="flex flex-row flex-wrap-reverse w-100%  h-screen max-w-[1250px] m-auto   relative z-3 text-(--p-font) max-lg:flex-col  max-md:w-full">
      <section className="left-about flex flex-1  justify-start max-md:w-full ">
        <div className="w-full h-full max-w-100 max-h-120  relative">
          <div className="glitch-box" ref={glitchBox}>
            <img src="/images/about-me-red.png" className="layer red" />
            <img src="/images/about-me-green.png" className="layer green" />
            <img src="/images/about-me-blue.png" className="layer blue" />
            <img
              src="/images/about-me-original.png"
              className="layer original"
            />
          </div>
          <div className="w-full h-[25%] absolute bottom-[2%] left-0 flex items-center justify-center">
            <div className=" absolute -top-10 w-[40%] h-20 bg-[#00f7ffa2] blur-xl"></div>
            <img
              src="/images/about-projector.png"
              className="size-full"
              alt="Projector"
            />
          </div>
        </div>
      </section>
      <section className="right-about flex-2   h-full flex flex-col justify-end max-md:w-full ">
        <section className="about-heading size-full uppercase">
          <div className="text-slider text-center" ref={sliderRef}>
            <h2>MODERN DESIGNER</h2>
            <h2>FULL STACK DEVELOPER</h2>
            <h2>CS GRADUATION</h2>
            <h2>PROBLEM SOLVING</h2>
            <h2>CREATIVE THINKER</h2>
            <h2>UI/UX LOVER</h2>
          </div>
        </section>
      </section>
    </main>
  </div>
);
}
