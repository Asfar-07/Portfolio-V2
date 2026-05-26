"use client";
import React,{ useEffect, useState, useRef } from "react";
import GeneralLoading from "../loader/GeneralLoading";
import Image from "next/image";
import { RevealWrapper } from "../ui/RevealWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Welcome from "./Welcome";
import "../../styles/hero.css";

gsap.registerPlugin(ScrollTrigger);

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Java Developer",
  "UI/UX Designer",
  "React Developer",
  "Backend Engineer",
];

const clouds = [
  { id: 1, src: "/images/hero/clouds/cloud1.webp", alt: "Cloud 1", count: 4, minH: 12, maxH: 16, minW: 25, maxW: 30 },
  { id: 2, src: "/images/hero/clouds/cloud2.webp", alt: "Cloud 2", count: 4, minH: 10, maxH: 16, minW: 40, maxW: 60 },
  { id: 3, src: "/images/hero/clouds/cloud3.webp", alt: "Cloud 3", count: 4, minH: 8, maxH: 12, minW: 40, maxW: 60 },
  { id: 4, src: "/images/hero/clouds/cloud4.webp", alt: "Cloud 4", count: 4, minH: 8, maxH: 16, minW: 25, maxW: 30 }
];


function Hero_Ground({ handleLoad, groundRef, rightRockRef }) {
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
    console.log(cloud.id, "cloud id")
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
        </div>
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
          className="ground-img absolute z-5  -bottom-0 right-0 w-full h-70"
        >
          <div
            ref={cloudsRef}
            className="sky-clouds absolute w-full h-[22%] top-[22%] left-0 "
          >
            {clouds.map((cloud, index) => {
              return (
                <React.Fragment key={index}>
                  {displayClouds(cloud)}
                  {displayCloudsOrder(cloud)}
                </React.Fragment>
              );
            })}
            {/* <div className=" w-8 h-6 z-10 left-[28.5%] top-[85%] absolute object-fill object-center -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/hero/clouds/cloud1.webp"
                alt="Cloud 1"
                className="size-full"
                fill
              />
            </div>
             <div className=" w-10 h-6 z-10 left-[59%] top-[80%] absolute object-fill object-center -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/hero/clouds/cloud1.webp"
                alt="Cloud 1"
                className="size-full"
                fill
              />
            </div>
              <div className=" w-10 h-6 z-10 left-[47%] top-[90%] absolute object-fill object-center -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/hero/clouds/cloud1.webp"
                alt="Cloud 1"
                className="size-full"
                fill
              />
            </div>
            <div className=" w-10 h-6 z-10 left-[62%] top-[95%] absolute object-fill object-center -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/hero/clouds/cloud1.webp"
                alt="Cloud 1"
                className="size-full"
                fill
              />
            </div> */}
          </div>
          <Image
            src="/images/hero/hero_ground.webp"
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
          className="right-rock absolute z-6 right-0 bottom-0 w-[60%] h-full max-md:w-120 max-md:h-130 max-sm:w-100 max-sm:h-100"
        >
          <Image
            src="/images/hero/hero_right.webp"
            alt="Rocks Image"
            fill
            className="rocks-img size-full object-cover object-center"
            priority
          />
          <div class="firefly-fixed w-0.5 h-0.5 absolute right-[38%] bottom-[30%]"></div>
          <div class="firefly-fixed w-0.75 h-0.75 absolute right-[30%] bottom-[20%]"></div>
          <div class="firefly-fixed w-0.75 h-0.75 absolute right-[60%] bottom-[15%] rotate-y-45"></div>
          <div class="firefly-fixed w-0.75 h-0.75 absolute right-[15%] bottom-[30%] rotate-x-45"></div>
          <div class="firefly w-0.75 h-0.75 absolute right-[15%] bottom-[15%] rotate-x-45"></div>
        </div>
      </section>
      <section className="ground-blur z-20  h-80 absolute bottom-0  w-full overflow-hidden">
        <div className=" h-40  bg-(--p-bg-deep) blur-sm"></div>
      </section>
    </div>
  );
}

function Hero_Bg({moonRef}) {  
  return (
    <div className=" absolute inset-0 size-full">
       <section className="hero-bg absolute z-1 inset-0 size-full flex justify-end overflow-hidden ">
        <div ref={moonRef} className="moon-img sticky">
          <Image
            src="/images/hero/planet.webp"
            alt="Moon Image"
            fill
            sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%"
            className="moon-img-main w-full h-full "
            priority
          />
        </div>
      </section>
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef();
  const groundRef = useRef();
  const rightRockRef = useRef();
  const moonRef = useRef();
  const mainHeroRef = useRef();
  const heroHeading = useRef();
  const heroBadge = useRef();
  const heroButton = useRef();
  const heroParagraph = useRef();

  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const [imageCollected, setImageCollected] = useState([]);
  const [current, setCurrent] = useState(0);
  const [animState, setAnimState] = useState("active");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState("exit");
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % roles.length);
        setAnimState("active");
      }, 500);
    }, 5000);
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

  useGSAP(() => {

    gsap.set(heroRef.current, { backgroundColor:"#000631" })
    gsap.set(groundRef.current, { y: 300 })
    gsap.set(rightRockRef.current, { y: 300, scale:.4, transformOrigin: "bottom right", })
    gsap.set(moonRef.current, { y: 600, scale: .6 })
    // gsap.set(mainHeroRef.current, { opacity:0 })
    gsap.set(heroHeading.current, { y: 200, opacity: 0 })
    gsap.set(heroBadge.current, { y: 200, opacity:0 })
    gsap.set(heroParagraph.current, { x: -200, opacity:0 })

     const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=2500",
          scrub: true,
          pin: true,
        },
      });

      tl
      .to(heroRef.current, { backgroundColor:"#000027", duration: 1, ease: 'none'}, 0)
      .to(moonRef.current, { y: 0, duration: 1, ease: 'none', scale: 1}, .1)
      .to(groundRef.current, { y: 0, duration: 1, ease: 'none'}, .2)
      .to(rightRockRef.current, { y: 0, duration: 1, scale: 1}, .4)
      .to(groundRef.current, { scale: 1.2, duration: 1, ease: 'none'}, .4)
      .to(heroHeading.current, { y: 0, opacity: 1, duration: 1, ease: 'none'}, 1)
      .to(heroBadge.current, { y: 0, opacity: 1, duration: 1, ease: 'none'}, 1)
      .to(heroParagraph.current,{ x: 0, opacity: 1, duration: .2, ease: 'none'}, 2)

  },[groundRef])

  return (
    <div className="main-hero relative" ref={heroRef}>

      <Welcome heroRef= {heroRef}/>
      <Hero_Bg moonRef= {moonRef}/>
      <Hero_Ground handleLoad={handleLoad} groundRef= {groundRef} rightRockRef= {rightRockRef}/>
      <div
        className="home block w-full h-dvh min-h-[600px] text-(--p-font) relative"
        id="home"
        ref={mainHeroRef}
      >
        <main
          className="h-full m-auto relative  w-[88%] max-w-350 text-(--p-font) max-sm:w-full max-sm:px-5"
          style={{ margin: "auto" }}
        >
          <aside className=" relative h-full flex flex-col  gap-6 justify-center bottom-[5%] max-sm:bottom-0  max-sm:pb-10 max-sm:justify-start max-sm:pt-16">
              <div ref={heroBadge} className="flex items-center w-fit bg-[#8d2fff4c] grow-0 shrink-0 px-2 py-1 gap-2 border-[.5px] border-[#8d2fff] rounded-2xl backdrop-blur-[4px]">
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
              <h1 ref={heroHeading} className=" font-black m-0 w-[70%] leading-none   max-w-2xl   max-sm:min-w-[360px] ">
                Crafting <span className="grad">Engaging</span> User Experiences
                <span className="grad">.</span>
              </h1>
              <div ref={heroParagraph} className="w-[50%] relative pl-2 z-30 max-w-xl max-md:w-[66%] max-sm:w-[50%] max-sm:min-w-[230px]">
                <p className=" w-full font-extralight text-[14px]   max-sm:text-sm ">
                  I am Asfar Muhammed N S, a passionate software developer
                  building modern, scalable web experiences. Explore my creative
                  work and skills.
                </p>
              </div>

              <div ref={heroButton} className="flex gap-5">
                <a
                  href="#project"
                  className="btn text-lg bg-(--s-bg-deep) uppercase relative opacity-0"
                >
                  View My Work
                </a>
              </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

