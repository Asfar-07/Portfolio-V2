"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import GeneralLoading from "../loader/GeneralLoading";
import Image from "next/image";
import Welcome from "./Welcome";
import ScrollMove from '@/utils/ScrollMove';
import "../../styles/hero.css";


const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Java Developer",
  "UI/UX Designer",
  "React Developer",
  "Backend Engineer",
];

const clouds = [
  {
    id: 1,
    src: "/images/hero/clouds/cloud1.webp",
    alt: "Cloud 1",
    count: 4,
    minH: 12,
    maxH: 16,
    minW: 25,
    maxW: 30,
  },
  {
    id: 2,
    src: "/images/hero/clouds/cloud2.webp",
    alt: "Cloud 2",
    count: 4,
    minH: 10,
    maxH: 16,
    minW: 40,
    maxW: 60,
  },
  {
    id: 3,
    src: "/images/hero/clouds/cloud3.webp",
    alt: "Cloud 3",
    count: 4,
    minH: 8,
    maxH: 12,
    minW: 40,
    maxW: 60,
  },
  {
    id: 4,
    src: "/images/hero/clouds/cloud4.webp",
    alt: "Cloud 4",
    count: 4,
    minH: 8,
    maxH: 16,
    minW: 25,
    maxW: 30,
  },
];

function Hero_Ground({ handleLoad, groundRef, rightRockRef, rightRockHubRef }) {
  const sectionRef = useRef(null);
  const cloudsRef = useRef(null);

  function displayClouds(cloud) {
    if (cloud.count <= 0) return null;

    return Array.from({ length: cloud.count }).map((_, index) => {
      const styleClouds = {
        left: Math.floor(Math.random() * 101) + "%",
        top: Math.floor(Math.random() * (85 - 60 + 1)) + 60 + "%",
        width:
          Math.floor(Math.random() * (cloud.maxW - cloud.minW + 1)) +
          cloud.minW +
          "px",
        height:
          Math.floor(Math.random() * (cloud.maxH - cloud.minH + 1)) +
          cloud.minH +
          "px",
      };

      return (
        <div
          key={index}
          className="sky-cloud absolute object-fill object-center -translate-x-1/2 -translate-y-1/2"
          style={styleClouds}
        >
          <Image src={cloud.src} alt={cloud.alt} className="size-full" fill />
        </div>
      );
    });
  }

  function displayCloudsOrder(cloud) {
    // if (!cloudsRef.current) return null;
    if (cloud.id === 1 || cloud.id === 4) return;

    const widthMain = 1000;
    var startingPoint = 0;
    const clouds = [];
    console.log(cloud.id, "cloud id");
    while (startingPoint < widthMain) {
      const styleClouds = {
        left: startingPoint + "px",
        top: Math.floor(Math.random() * (85 - 60 + 1)) + 60 + "%",
        width:
          Math.floor(Math.random() * (cloud.maxW - cloud.minW + 1)) +
          cloud.minW +
          "px",
        height:
          Math.floor(Math.random() * (cloud.maxH - cloud.minH + 1)) +
          cloud.minH +
          "px",
      };
      clouds.push(
        <div
          key={startingPoint}
          className="sky-cloud absolute object-fill object-center -translate-x-1/2 -translate-y-1/2"
          style={styleClouds}
        >
          <Image src={cloud.src} alt={cloud.alt} className="size-full" fill />
        </div>,
      );
      startingPoint += styleClouds.width.replace("px", "") * 1.5;
    }
    return clouds;
  }

  return (
    <div className="hero-ground absolute bottom-0 h-full w-full ">
      <section
        className="absolute inset-0 size-full overflow-hidden"
        ref={sectionRef}
      >
        <div
          ref={groundRef}
          className="ground-img absolute z-5  -bottom-0 right-0 w-full h-[100%]"
        >
          <div
            ref={cloudsRef}
            className="sky-clouds absolute w-full h-[10%] bottom-[30%] left-0"
          >
            {clouds.map((cloud, index) => {
              return (
                <React.Fragment key={index}>
                  {displayClouds(cloud)}
                  {displayCloudsOrder(cloud)}
                </React.Fragment>
              );
            })}
          </div>
          <Image
            src="/images/hero/ground.webp"
            alt="Ground Image"
            fill
            onLoad={handleLoad}
            className="size-full max-md:object-cover max-md:object-center"
            priority
          />
        </div>
        <div className="left-rock"></div>
        <div
          ref={rightRockRef}
          className="right-rock absolute z-6 right-0 bottom-10 w-[55%] h-full max-md:w-120 max-md:h-130 max-sm:w-100 max-sm:h-100"
        >
          <div ref={rightRockHubRef} className="hub flex flex-col gap-0  h-[36%] w-[28%] absolute left-[25%] top-[24%] z-500 ">
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
              <main className="pt-2 overflow-hidden flex justify-center">
                <img
                  src="/images/hero/hub_container1.webp"
                  alt="hub container"
                  className="h-[70%] w-[85%] "
                />
              </main>
            </div>
            <div className="w-full h-[40%]  pl-2">
              <main className="w-1/2 h-full flex items-center  border border-[#9f67ffc2] bg-[#ffffff0d] rounded-lg overflow-hidden">
                 <img
                  src="/images/hero/hub_container2.webp"
                  alt="hub container"
                  className="size-full object-contain object-left-bottom"
                />
              </main>
            </div>
          </div>

          <Image
            src="/images/hero/hero_rightRock.webp"
            alt="Rocks Image"
            fill
            className="rocks-img size-full object-cover object-center"
            priority
          />
          <div className="firefly-fixed w-0.5 h-0.5 absolute right-[38%] bottom-[30%]"></div>
          <div className="firefly-fixed w-0.75 h-0.75 absolute right-[30%] bottom-[20%]"></div>
          <div className="firefly-fixed w-0.5 h-0.5 absolute right-[5%] bottom-[35%] "></div>
          <div className="firefly-fixed w-0.75 h-0.75 absolute right-[60%] bottom-[15%] rotate-y-45"></div>
          <div className="firefly-fixed w-0.75 h-0.75 absolute right-[15%] bottom-[30%] rotate-x-45"></div>
          <div className="firefly-fixed w-0.5 h-0.5 absolute right-[5%] bottom-[18%] rotate-x-45"></div>
          <div className="firefly w-0.75 h-0.75 absolute animate-[fireflyMove_60s_linear_infinite,fireflyBlink_2s_ease-in-out_infinite] right-[15%] bottom-[15%] rotate-x-45"></div>
          <div className="firefly w-0.75 h-0.75 absolute delay-75 animate-[fireflyMove_60s_12s_linear_infinite,fireflyBlink_2s_ease-in-out_infinite] right-[12%] bottom-[0%]"></div>
        </div>
      </section>
      <section className="ground-blur z-20  h-80 absolute bottom-0  w-full overflow-hidden">
        <div className=" h-40  bg-(--p-bg-deep) blur-sm"></div>
      </section>
    </div>
  );
}

function Hero_Bg({ moonRef }) {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.8 + 0.2,
    }));
  }, []);

  return (
    <section className="hero-bg fixed inset-0 -z-5 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      <div ref={moonRef} className="moon-img absolute right-0 bottom-0">
        <Image
          src="/images/hero/planet.webp"
          alt="Moon Image"
          fill
          priority
          className="moon-img-main"
        />
      </div>
    </section>
  );
}

export default function Hero({
  heroBodyRef,
  heroRef,
  groundRef,
  rightRockRef,
  rightRockHubRef,
  moonRef,
  mainHeroRef,
  heroHeading,
  heroBadge,
  heroButton,
  heroParagraph,
  heroBgRef,
  timelineRef
}) {
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const [imageCollected, setImageCollected] = useState([]);
  const [current, setCurrent] = useState(0);
  const [animState, setAnimState] = useState("active");

  //tittle action
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState("exit");
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % roles.length);
        setAnimState("active");
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleLoad = (e) => {
    setLoaded((prev) => prev + 1);
    setImageCollected((prev) => [...prev, e]);
  };

  useEffect(() => {
    const timerLimit = setTimeout(() => {
      setReady(true); // force start after 4s
    }, 4000);
    if (loaded >= 3) {
      imageCollected.forEach((src, index) => {
        src.currentTarget.classList.add("hero-loaded"); // Add class to trigger animation
      });
      setReady(true);
      clearTimeout(timerLimit); // clear the timer if loading completes before the limit
    }
  }, [loaded]);

  return (
    <div ref={heroBodyRef} className="absolute inset-0">
      <div
        className="fixed inset-0 -z-10 overflow-hidden"
        ref={heroBgRef}
      ></div>
      <Hero_Bg moonRef={moonRef} />
      <div className="main-hero relative" ref={heroRef}>
        {!ready && <GeneralLoading />}
        <Welcome heroRef={heroRef} timelineRef={timelineRef}/>
        <Hero_Ground
          handleLoad={handleLoad}
          groundRef={groundRef}
          rightRockRef={rightRockRef}
          rightRockHubRef={rightRockHubRef}
        />
        <div
          className="home block w-full h-dvh min-h-[600px] text-(--p-font) relative"
          id="home"
          ref={mainHeroRef}
        >
          <main
            className="h-full m-auto relative  w-[88%] max-w-350 text-(--p-font) max-sm:w-full max-sm:px-5"
            style={{ margin: "auto" }}
          >
            <aside
              className=" relative h-full flex flex-col  gap-6 justify-center bottom-[5%] max-sm:bottom-0  max-sm:pb-10 
           [@media(max-width:500px)]:pt-14 [@media(max-width:500px)]:justify-start [@media(max-width:750px)_and_(min-height:780px)]:justify-start [@media(max-width:750px)_and_(min-height:780px)]:pt-40"
            >
              <div
                ref={heroBadge}
                className="hero-badge flex items-center w-fit bg-[#8d2fff4c] grow-0 shrink-0 px-2 py-1 gap-2 border-[.5px] border-[#8d2fff] rounded-2xl backdrop-blur-[4px]"
              >
                <div className="w-5 h-5 relative">
                  <Image
                    src="/images/hero/planeticon.webp"
                    alt="Planet Icon"
                    fill
                    priority
                  />
                </div>
                <div className="role-wrapper">
                  <span key={current} className={`role-text ${animState}`}>
                    {roles[current]}
                  </span>
                </div>
              </div>
              <h1
                ref={heroHeading}
                className=" font-black m-0 w-[70%] leading-none   max-w-2xl   max-sm:min-w-[360px] 
              [@media(max-width:750px)_and_(min-height:780px)]:w-[90%]"
              >
                Crafting <span className="grad">Engaging</span> User Experiences
                <span className="grad">.</span>
              </h1>
              <div
                ref={heroParagraph}
                className="w-[50%] relative z-30 max-w-xl max-md:w-[66%] max-sm:w-[50%] max-sm:min-w-[230px]
              [@media(max-width:750px)_and_(min-height:780px)]:w-[80%]"
              >
                <p className=" w-full font-light leading-relaxed text-[18px]   max-sm:text-sm ">
                  I am Asfar Muhammed N S, a passionate software developer
                  building modern, scalable web experiences. Explore my creative
                  work and skills.
                </p>
              </div>

              <div
                ref={heroButton}
                className="flex gap-5 relative z-100 uppercase"
              >
                <button
                  onClick={() => ScrollMove("projects", timelineRef)}
                  className="hero-btn flex items-center text-[13px] leading-0 font-normal tracking-widest cursor-pointer"
                >
                  View my work{" "}
                  <span className="ml-4">
                    <ArrowRight />
                  </span>
                </button>
              </div>
            </aside>
          </main>
        </div>
      </div>
    </div>
  );
}
