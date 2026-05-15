"use client";
import { useEffect, useState ,useRef} from "react";
import GeneralLoading from "../loader/GeneralLoading";
import Image from "next/image";
import { RevealWrapper } from "../ui/RevealWrapper";
import Loader from "../loader/Loader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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
    {/* <Loader /> */}
      {/* {!ready && <GeneralLoading />} */}
      <div className="home w-full h-dvh min-h-[600px] text-(--p-font) relative z-3" id="home">
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
              <h1 className=" font-black m-0 w-[60%] leading-none  min-w-130 max-w-4xl  max-sm:min-w-[90%] max-md:text-center">
               Crafting <span className="grad">Engaging</span> User Experiences<span className="grad">.</span>
                  {/* Providing the <span className="grad">best project</span> experience. */}
              </h1>
              <div className="w-[55%] min-w-130 max-w-4xl max-sm:min-w-[90%]">
                {/* <div className=" absolute z-0 w-full h-full  bg-(--p-bg-deep) blur-[20px]"></div> */}
                <p className="relative z-2 w-full font-semibold  max-md:text-justify  ">
                I am Asfar Muhammed N S, a passionate software developer building modern, scalable web experiences. 
                Explore my creative work and skills.
              </p>
              </div>
              
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
        <section className="ground-blur z-20  h-80 absolute bottom-8  w-full overflow-hidden">
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
//  const sectionRef = useGSAP((ref) => {
//    heroRockAnimation(ref.current, ".rocks-img");
//   //  heroGroundAnimation(ref.current, groundRef.current);
//  });
  useGSAP(() => {
    if (!sectionRef.current) return;
    if (!groundRef.current) return;

    gsap.to(groundRef.current, {
      scaleY: 0.38,
      transformOrigin: "bottom center",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "0% 30%",
        end: "90% 0%",
        scrub: .8,
      },
      ease: "power1",
    });

    const children = sectionRef.current?.querySelectorAll(".rocks-img");
    const boxes = gsap.utils.toArray(children);
    console.log(boxes)
    // boxes.map((box) => {
       gsap.fromTo(
        rocksRef.current,
        {
          y: 0,
          x: 0,
        },
        {
          y: -30,
          x: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "10% 0%",
            end: "90% 30%",
            scrub: .8,
          },
          ease: "power1"
        },
      );
    // });

  }, [sectionRef.current, groundRef.current, rocksRef.current]);

 
  return (
    <div className="hero-ground  absolute bottom-0 h-[70%] max-h-120 w-full ">
      {/* <div className=" absolute inset-0 w-full h-full  z-10">
        <figure>
          <DroneExperience />
        </figure>
      </div> */}
      <section className=" w-full h-full" ref={sectionRef}>
        
        <Image
          src="/images/hero/Front_Ground2.webp"
          alt="Ground Image"
          width={5000}
          height={5000}
          onLoad={handleLoad}
          className="ground-img w-full absolute bottom-0 left-0 object-cover object-center h-full"
          ref={groundRef}
          priority
        />
        <div ref={rocksRef} className="front-rocks absolute flex justify-baseline  w-full z-20 h-full">
          <Image
              src="/images/hero/rocks2.webp"
              alt="Rocks Image"
              width={5000}
              height={5000}
              onLoad={handleLoad} 
              className="rocks-img absolute z-20 bottom-0 left-0 w-full h-55 max-md:hidden"
              priority
            />
            <Image
              src="/images/hero/rocks-md.png"
              alt="Rocks Image"
              width={5000}
              height={5000}
              onLoad={handleLoad} 
              className="rocks-img absolute hidden z-20 bottom-0 left-0 w-full h-55 max-md:block"
              priority
            />
         
        </div>
      </section>
    </div>
  );
}
