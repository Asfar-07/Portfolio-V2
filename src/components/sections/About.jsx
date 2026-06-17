"use client";
import React, { useState, useEffect, useRef } from "react";
import "@/styles/about.css";
import { Code2, Rocket, Coffee, Target } from "lucide-react";

const stats = [
  {
    icon: <Code2 size={25} />,
    value: "1+",
    label: "Years of Coding",
  },
  {
    icon: <Rocket size={25} />,
    value: "12+",
    label: "Projects Built",
  },
  {
    icon: <Coffee size={25} />,
    value: "100%",
    label: "Passion & Dedication",
  },
  {
    icon: <Target size={25} />,
    value: "Always",
    label: "Learning Everyday",
  },
];

export default function About({aboutBodyRef, mainAboutRef, aboutMeRef, collectionRef}) {
  const glitchBox = useRef(null);
  const projectorBeamRef = useRef(null);

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

    mainLayer.forEach((item) => {
      item.style.mixBlendMode = "normal";
      item.style.opacity = "0";
    });
    originalLayer.style.opacity = "1";

    const interval = setInterval(() => {
      redLayer.style.animationPlayState = "running";
      greenLayer.style.animationPlayState = "running";
      blueLayer.style.animationPlayState = "running";

      mainLayer.forEach((item) => {
        item.style.mixBlendMode = "screen";
        item.style.opacity = "1";
      });

      setTimeout(() => {
        redLayer.style.animationPlayState = "paused";
        greenLayer.style.animationPlayState = "paused";
        blueLayer.style.animationPlayState = "paused";

        mainLayer.forEach((item) => {
          item.style.mixBlendMode = "normal";
          item.style.opacity = "0";
        });
        originalLayer.style.opacity = "1";
      }, 1500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

 const [particlesFloating, setParticlesFloating] = useState([]);

 useEffect(() => {
   setParticlesFloating(
     Array.from({ length: 22 }, (_, i) => ({
       id: i,
       size: Math.random() * 2.5 + 0.5,
       left: `calc(50% + ${(Math.random() - 0.5) * 160 * (i / 22)}px)`,
       bottom: `${Math.random() * 40}px`,
       duration: `${Math.random() * 4 + 3}s`,
       delay: `${Math.random() * 5}s`,
       drift: `${(Math.random() - 0.5) * 60}px`,
     })),
   );
 }, []);

  return (
    <div ref={aboutBodyRef} className=" absolute inset-0">
      <div
        id="about"
        className="about bg-(--p-bg-deep) text-(--p-font) h-auto min-h-[650px] relative p-[0rem_4rem] w-full max-lg:pt-20 max-md:p-[0rem_1.5rem] max-lg:p-[0rem_2rem]"
        ref={mainAboutRef}
      >
        <div className="dot-grid absolute left-15 top-15"></div>
        <svg
          className="bg-lines max-md:hidden"
          viewBox="0 0 500 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
              <stop offset="50%" stopColor="#00F0FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M0,200 C150,100 300,300 500,200"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <main
          className={`flex flex-row gap-8 w-100% m-auto   h-screen  max-w-[1250px] max-lg:h-auto  relative z-3 text-(--p-font) 
      max-lg:flex-col-reverse  max-md:w-full max-md:max-h-none max-md:h-auto`}
        >
          <section className="left-about flex-1 flex justify-center items-center max-md:w-full">
            <div className="w-full h-full  max-w-120 max-h-120 min-w-90 min-h-100 relative max-md:h-110 max-md:w-75">
              <div className="glitch-box" ref={glitchBox}>
                <img src="/images/about-me-red.png" className="layer red" />
                <img src="/images/about-me-green.png" className="layer green" />
                <img src="/images/about-me-blue.png" className="layer blue" />
                <img
                  src="/images/about-me-original.png"
                  className="layer original"
                />
                {/* <AstronautImageTiles src="/images/about-me-original.png"  /> */}
              </div>
              <div className="w-full h-[25%] absolute bottom-[2%] left-0 flex items-center justify-center">
                <section className="beam-main" ref={projectorBeamRef}>
                  <div className="project-beam "></div>
                  <div className="beam-particles">
                    {particlesFloating.map((p) => (
                      <div
                        key={p.id}
                        className="projectile-particle-floating"
                        style={{
                          width: p.size,
                          height: p.size,
                          left: p.left,
                          bottom: p.bottom,
                          animationDuration: p.duration,
                          animationDelay: p.delay,
                          "--drift": p.drift,
                        }}
                      />
                    ))}

                    {particlesFloating.map((p) => (
                      <div
                        key={p.id}
                        className="projectile-particle-moving"
                        style={{
                          width: p.size,
                          height: p.size,
                          left: p.left,
                          bottom: p.bottom,
                          animationDuration: p.duration,
                          animationDelay: p.delay,
                          "--drift": p.drift,
                        }}
                      />
                    ))}
                  </div>
                </section>

                <img
                  src="/images/about-projector.png"
                  className="projector size-full"
                  alt="Projector"
                />
              </div>
            </div>
          </section>
          <section className="right-about relative flex-2 overflow-hidden max-lg:pt-20  flex flex-col justify-center max-md:w-full ">
            <div className="overflow-hidden max-md:my-8">
              <span className=" uppercase text-cyan-400 tracking-[0.2rem]">
                Get to know me
              </span>
              <h2 className=" uppercase font-extrabold text-5xl mb-10 mt-2">
                About Me
              </h2>
              <p
                className=" font-light leading-relaxed text-[20px] overflow-hidden"
                ref={aboutMeRef}
              >
                I’m a{" "}
                <span
                  data-nosplit
                  className="grad"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  software developer
                </span>{" "}
                passionate about creating meaningful digital experiences. I love
                taking ideas and shaping them into practical, user-friendly
                applications that people can actually enjoy using.
                <br />
                <br />I care about both how things work and how they feel,
                combining solid engineering with clean design to build products
                that are fast, reliable, and thoughtfully{" "}
                <span className="text-[#818cf8]">crafted</span>.
              </p>
              {/* <div className=" uppercase font-semibold w-full flex justify-end my-10">
            <button className="py-2 px-4 border border-cyan-400 cursor-pointer rounded-sm">Download CV</button>
          </div> */}
            </div>
            <div className="dot-grid absolute right-15 bottom-15"></div>
            <div
              ref={collectionRef}
              className="relative mt-15 w-full rounded-2xl p-4 md:p-4 bg-[#18008523] border border-white/10"
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 hover:scale-105 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="min-w-10 min-h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-white/10">
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <h4 className="text-white font-semibold text-base md:text-lg">
                        {item.value}
                      </h4>
                      <p className="text-gray-400 text-[10px] md:text-xs leading-tight">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
