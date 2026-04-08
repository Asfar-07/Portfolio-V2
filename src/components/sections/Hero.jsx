"use client";
import { useEffect, useState ,useRef} from "react";
import GeneralLoading from "../loader/GeneralLoading";
import Image from "next/image";
import { RevealWrapper } from "../ui/RevealWrapper";
import {useGSAP} from '@/hooks/useGSAP.js';
import { heroRockAnimation, heroGroundAnimation } from "@/lib/gsap/animations";
import DroneExperience from "../models/DroneExperience";
import "../../styles/hero.css";

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
    setImageCollected((prev) => [...prev, e]); // Collect loaded image sources
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
      {!ready && <GeneralLoading />}
      <div className="home w-full h-dvh text-(--p-font) relative z-3" id="home">
        <main
          className="h-full m-auto relative  z-30  w-[88%] max-w-350 min-w-100 text-(--p-font) max-sm:min-w-full"
          style={{ margin: "auto" }}
        >
          <aside className="h-full flex flex-col  gap-6 justify-center max-md:items-center">
            <RevealWrapper
              type="stagger"
              delay={1}
              className={
                " flex flex-col gap-7  justify-center max-md:items-center max-md:pb-10"
              }
            >
              <div className="flex items-center w-fit bg-[#8d2fff4c] grow-0 shrink-0 px-2 py-1 gap-2 border-[.5px] border-[#8d2fff] rounded-2xl backdrop-blur-[4px]">
                <div className="w-5 h-5 relative">
                  <Image
                  src="/images/planeticon.webp"
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
              <h1 className=" font-black m-0 w-[50%]  min-w-130 max-w-4xl  max-sm:min-w-[90%] max-md:text-center">
               Crafting <span className="grad">Engaging</span> User Experiences<span className="grad">.</span>
                  {/* Providing the <span className="grad">best project</span> experience. */}
              </h1>
              <p className="w-[55%] font-normal min-w-130 max-w-4xl max-md:text-justify  max-sm:min-w-[90%]">
                I am Asfar Muhammed N S, a passionate software developer building modern, scalable web experiences. 
                Explore my creative work and skills.
              </p>
              <div className="flex gap-5">
                <a
                  href="#project"
                  className="btn bg-(--s-bg-deep) uppercase relative"
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
      </div>
    </>
  );
}
function Hero_Ground({ handleLoad }) {
  const groundRef = useRef(null);
 const sectionRef = useGSAP((ref) => {
    heroRockAnimation(ref.current,".rocks-img");
    heroGroundAnimation(ref.current,groundRef.current);
});
  return (
    <>
    <div className="hero-ground  absolute -bottom-8 h-85 w-full ">
      {/* <div className=" absolute inset-0 w-full h-full  z-10">
        <figure>
          <DroneExperience />
        </figure>
      </div> */}
      <section className=" w-full h-full " ref={sectionRef}>
        <Image
          src="/images/Front_Ground.webp"
          alt="Ground Image"
          width={5000}
          height={5000}
          onLoad={handleLoad}
          className="ground-img w-full absolute bottom-0 left-0 object-cover object-center h-full"
          ref={groundRef}
          priority
        />
        <div className="front-rocks flex justify-baseline w-full z-20 h-full">
          <div className="set-rocks w-[50%] relative overflow-hidden max-md:w-full">
            <Image
              src="/images/LeftRocks.webp"
              alt="Rocks Image"
              width={500}
              height={500}
              onLoad={handleLoad}
              className="rocks-img absolute z-20 bottom-0 left-0 w-[80%]  min-w-[380px] h-52 max-md:w-[90%] max-sm::h-45"
              priority
            />
          </div>
          <div className="set-rocks r-right z-20 w-[50%] relative overflow-hidden max-md:hidden">
            <Image
              src="/images/RightRocks.webp"
              alt="Rocks Image"
              width={500}
              height={500}
              onLoad={handleLoad}
              className="rocks-img absolute bottom-0 right-0 w-[80%] min-w-[380px] h-56 max-md:w-[90%] max-sm::h-45"
              priority
            />
          </div>
        </div>
      </section>
    </div>
    <section className="ground-blur z-20  h-80 absolute bottom-0 w-full overflow-hidden">
        <div className=" h-40  bg-(--p-bg-deep) blur-sm"></div>
      </section>
    </>
  );
}
