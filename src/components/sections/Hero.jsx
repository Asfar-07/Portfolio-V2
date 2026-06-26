"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import GeneralLoading from "../loader/GeneralLoading";
import Image from "next/image";
import Welcome from "./Welcome";
import BackGround from "../layouts/BackGround";
import ScrollMove from '@/utils/ScrollMove';
import "../../styles/hero.css";
import HeroRightSide from "./subSections/HeroRightSide";


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

  const [randomClouds, setRandomClouds] = useState([]);
  const [orderedClouds, setOrderedClouds] = useState([]);

  useEffect(() => {
    const generatedRandom = [];
    const generatedOrdered = [];

    clouds.forEach((cloud) => {
      // displayClouds()
      if (cloud.count > 0) {
        for (let i = 0; i < cloud.count; i++) {
          generatedRandom.push({
            key: `random-${cloud.id}-${i}`,
            src: cloud.src,
            alt: cloud.alt,
            style: {
              left: Math.floor(Math.random() * 101) + "%",
              top: Math.floor(Math.random() * 26) + 60 + "%",
              width:
                Math.floor(Math.random() * (cloud.maxW - cloud.minW + 1)) +
                cloud.minW +
                "px",
              height:
                Math.floor(Math.random() * (cloud.maxH - cloud.minH + 1)) +
                cloud.minH +
                "px",
            },
          });
        }
      }

      // displayCloudsOrder()
      if (cloud.id !== 1 && cloud.id !== 4) {
        let startingPoint = 0;

        while (startingPoint < 1000) {
          const width =
            Math.floor(Math.random() * (cloud.maxW - cloud.minW + 1)) +
            cloud.minW;

          generatedOrdered.push({
            key: `ordered-${cloud.id}-${startingPoint}`,
            src: cloud.src,
            alt: cloud.alt,
            style: {
              left: startingPoint + "px",
              top: Math.floor(Math.random() * 26) + 60 + "%",
              width: width + "px",
              height:
                Math.floor(Math.random() * (cloud.maxH - cloud.minH + 1)) +
                cloud.minH +
                "px",
            },
          });

          startingPoint += width * 1.5;
        }
      }
    });

    setRandomClouds(generatedRandom);
    setOrderedClouds(generatedOrdered);
  }, []);
  return (
    <div className="hero-ground absolute bottom-0 h-full w-full ">
      <section
        className="absolute inset-0 size-full overflow-hidden"
        ref={sectionRef}
      >
        <div
          ref={groundRef}
          className="ground-img absolute z-5  bottom-2 right-0 w-full h-[65%] max-md:h-[45%]"
        >
          <div
            ref={cloudsRef}
            className="sky-clouds absolute w-full h-[10%] bottom-[44%] left-0"
          >
            {randomClouds.map((cloud) => (
              <div
                key={cloud.key}
                className="sky-cloud absolute object-fill object-center -translate-x-1/2 -translate-y-1/2"
                style={cloud.style}
              >
                <Image
                  src={cloud.src}
                  alt={cloud.alt}
                  fill
                  className="size-full"
                  sizes="(max-width: 768px) 30vw, 80px"
                />
              </div>
            ))}

            {orderedClouds.map((cloud) => (
              <div
                key={cloud.key}
                className="sky-cloud absolute object-cover object-center -translate-x-1/2 -translate-y-1/2"
                style={cloud.style}
              >
                <Image
                  src={cloud.src}
                  alt={cloud.alt}
                  fill
                  className="size-full"
                  sizes="(max-width: 768px) 30vw, 80px"
                />
              </div>
            ))}
          </div>
          <Image
            src="/images/hero/heroGround.webp"
            alt="Ground Image"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            onLoad={handleLoad}
            className="size-full max-md:object-cover max-md:object-center"
            priority
          />
        </div>
        <div className="left-rock"></div>
        <HeroRightSide handleLoad={handleLoad} rightRockRef={rightRockRef} rightRockHubRef={rightRockHubRef}/>
      </section>
      <section className="ground-blur z-20  h-80 absolute bottom-0  w-full overflow-hidden">
        <div className=" h-40  bg-(--p-bg-deep) blur-sm"></div>
      </section>
    </div>
  );
}


export default function Hero({
  heroBodyRef,
  heroRef,
  scratWrapper,
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
    <div ref={heroBodyRef} className="absolute  min-h-[650px] inset-0">
      <div className="fixed inset-0 -z-10 overflow-hidden" ref={heroBgRef} ></div>

      <BackGround moonRef={moonRef} scratWrapper={scratWrapper} handleLoad={handleLoad} />

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
          className="home block w-full h-dvh min-h-[650px] text-(--p-font) relative"
          id="home"
          ref={mainHeroRef}
        >
          <main
            className="h-full m-auto relative  w-[88%] max-w-350 text-(--p-font) max-sm:w-full max-sm:px-5"
            style={{ margin: "auto" }}
          >
            <aside
              className={`relative h-full flex flex-col  gap-6 justify-center bottom-[5%] max-sm:bottom-0  max-sm:pb-10 
           [@media(max-width:500px)]:pt-0 [@media(max-width:500px)]:justify-center [@media(max-width:750px)_and_(min-height:780px)]:justify-start [@media(max-width:750px)_and_(min-height:780px)]:pt-40`}
            >
              <div
                ref={heroBadge}
                className="hero-badge flex items-center w-fit bg-[#8d2fff4c] grow-0 shrink-0 px-2 py-1 gap-2 border-[.5px] border-[#8d2fff] rounded-2xl backdrop-blur-[4px]"
              >
                <div className="w-5 h-5 relative">
                  <Image
                    src="/images/hero/planeticon.webp"
                    alt="Planet Icon"
                    sizes="(max-width: 768px) 10vw, 20px"
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
                className={` font-black m-0 w-[70%] leading-none   max-w-2xl   max-sm:min-w-[360px] 
              [@media(max-width:750px)_and_(min-height:780px)]:w-[90%]`}
              >
                Crafting <span className="grad">Engaging</span> User Experiences
                <span className="grad">.</span>
              </h1>
              <div
                ref={heroParagraph}
                className={`w-[50%] relative z-30 max-w-xl max-md:w-[66%] max-sm:w-[50%] max-sm:min-w-[230px]
              [@media(max-width:750px)_and_(min-height:780px)]:w-[80%]`}
              >
                <p className=" w-full font-extralight leading-relaxed tracking-wider text-[16px] max-sm:text-sm ">
                  I am Asfar Muhammed N S, a passionate software developer
                  building modern, scalable web experiences. Explore my creative
                  work and skills.
                </p>
              </div>

              <div
                className="flex gap-5 relative z-100 uppercase"
              >
                <button
                  ref={heroButton}
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
