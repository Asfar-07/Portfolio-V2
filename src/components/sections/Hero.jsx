"use client";
import { useEffect, useState, useRef } from "react";
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
export default function Hero() {
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

  return (
    <>
      <Welcome />
      {/* <Loader /> */}
      {/* {!ready && <GeneralLoading />} */}
      <div
        className="home w-full h-dvh min-h-[600px] text-(--p-font) relative z-3"
        id="home"
      >
        <main
          className="h-full m-auto relative  z-30  w-[88%] max-w-350  text-(--p-font) max-sm:w-full max-sm:px-5"
          style={{ margin: "auto" }}
        >
          <aside className=" relative h-full flex flex-col  gap-6 justify-center bottom-[5%] max-sm:bottom-0  max-sm:pb-10 max-sm:justify-start max-sm:pt-16">
            <RevealWrapper
              type="stagger"
              delay={1}
              className={
                " flex flex-col gap-7  justify-center  max-sm:pb-10 max-sm:justify-start "
              }
            >
              <div className="flex items-center w-fit bg-[#8d2fff4c] grow-0 shrink-0 px-2 py-1 gap-2 border-[.5px] border-[#8d2fff] rounded-2xl backdrop-blur-[4px]">
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
              <h1 className=" font-black m-0 w-[70%] leading-none   max-w-2xl   max-sm:min-w-[360px] ">
                Crafting <span className="grad">Engaging</span> User Experiences
                <span className="grad">.</span>
              </h1>
              <div className="w-[55%]  max-w-xl max-md:w-[66%] max-sm:w-[50%] max-sm:min-w-[230px]">
                <p className="relative z-2 w-full font-light text-[16px]   max-sm:text-sm ">
                  I am Asfar Muhammed N S, a passionate software developer
                  building modern, scalable web experiences. Explore my creative
                  work and skills.
                </p>
              </div>

              <div className="flex gap-5">
                <a
                  href="#project"
                  className="btn text-lg bg-(--s-bg-deep) uppercase relative"
                >
                  View My Work
                </a>
                {/* <a 
                href="/cv.pdf" 
                download 
                className="btn border border(--cyan-mark) font-bold"
              >
                Download CV
              </a> */}
              </div>
            </RevealWrapper>
          </aside>
        </main>
        <Hero_Ground handleLoad={handleLoad} />
        <section className="ground-blur z-20  h-80 absolute bottom-0  w-full overflow-hidden">
          <div className=" h-40  bg-(--p-bg-deep) blur-sm"></div>
        </section>
      </div>
    </>
  );
}
function Hero_Ground({ handleLoad }) {
  const groundRef = useRef(null);
  const sectionRef = useRef(null);
  const rocksRef = useRef(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    if (!groundRef.current) return;
  }, [sectionRef.current, groundRef.current, rocksRef.current]);

  return (
    <div className="hero-ground absolute bottom-0 h-full w-full ">
      <section className="hero-bg absolute z-1 inset-0 size-full flex justify-end overflow-hidden ">
        <div className="moon-img sticky">
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
      <section className="absolute inset-0 w-full h-full" ref={sectionRef}>
        <div className="ground-img absolute z-5 -bottom-10 right-0 w-full h-80">
          <Image
            src="/images/hero/hero_ground2.webp"
            alt="Ground Image"
            fill
            onLoad={handleLoad}
            ref={groundRef}
            className="size-full object-cover object-center"
            priority
          />
        </div>
        <div className="left-rock"></div>
        <div className="right-rock absolute z-6 right-0 bottom-15 w-[60%] h-full max-md:w-120 max-md:h-130 max-sm:w-100 max-sm:h-100">
          <Image
            src="/images/hero/hero_right.webp"
            alt="Rocks Image"
            fill
            ref={rocksRef}
            className="rocks-img size-full object-cover object-center"
            priority
          />
        </div>
      </section>
    </div>
  );
}
