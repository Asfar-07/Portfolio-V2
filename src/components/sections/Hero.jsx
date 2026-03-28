"use client";
import { useEffect, useState ,useRef} from "react";
import GeneralLoading from "../loader/GeneralLoading";
import Image from "next/image";
import { RevealWrapper } from "../ui/RevealWrapper";
import {useGSAP} from '@/hooks/useGSAP.js';
import { heroRockAnimation, heroGroundAnimation } from "@/lib/gsap/animations";
import "../../styles/hero.css";

export default function Hero() {
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const [imageCollected, setImageCollected] = useState([]);

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
          className="h-full m-auto relative  z-3  w-[88%] max-w-350 min-w-100 text-(--p-font) max-sm:min-w-full"
          style={{ margin: "auto" }}
        >
          <aside className="h-full flex flex-col gap-5 justify-center max-md:items-center">
          <RevealWrapper type="stagger" delay={1} className={"h-full flex flex-col gap-5 justify-center max-md:items-center"}>
            <h1 className=" font-bold m-0 max-md:text-center w-full">
              HI, I'M <br></br>{" "}
              <span className=" ml-[10%] max-md:m-0">ASFAR</span>
            </h1>
            <span className="font-bold text-2xl max-sm:text-xl">
              Full Stack Developer
            </span>
              <p className="w-[60%]  min-w-130 max-w-4xl text-justify max-sm:min-w-[90%]">
              I create user-focused web applications that merge performance and
              simplicity through thoughtful design. Every project I build
              reflects a passion for modern development and meaningful user
              experiences.
            </p>
            <div className="flex gap-5">
              <a href="#project" className="btn bg-(--s-bg-deep) font-bold">
                View My Work
              </a>
              <a 
                href="/cv.pdf" 
                download 
                className="btn border border(--cyan-mark) font-bold"
              >
                Download CV
              </a>
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
      <section className="hero-ground  absolute -bottom-8 w-full h-90 " ref={sectionRef}>
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
        <div className="front-rocks flex justify-baseline w-full h-full">
          <div className="set-rocks w-[50%] relative overflow-hidden max-md:w-full">
            <Image
              src="/images/Rocks_Left.png"
              alt="Rocks Image"
              width={500}
              height={500}
              onLoad={handleLoad}
              className="rocks-img absolute bottom-0 left-0 w-[80%]  min-w-[380px] h-52 max-md:w-[90%] max-sm::h-45"
              priority
            />
          </div>
          <div className="set-rocks r-right w-[50%] relative overflow-hidden max-md:hidden">
            <Image
              src="/images/Frame_6.png"
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
      <section className="ground-blur z-20  h-80 absolute bottom-0 w-full overflow-hidden">
        <div className=" h-40  bg-(--p-bg-deep) blur-sm"></div>
      </section>
    </>
  );
}
