import React, {useRef, useEffect} from 'react'
import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react';
import '../../styles/welcome.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AcornExperience = dynamic(
  () => import('../spaceModel/AcornExperience'),
  { ssr: false, loading: () => <div className="size-full" /> }
)

const TOTAL_FRAMES = 40;
const FPS = 5;
const FRAME_DURATION = 1000 / FPS;
 
const SRCS = Array.from(
  { length: TOTAL_FRAMES },
  (_, i) => `images/scratframe/frame_${i + 1}.webp`
);


export default function Welcome({heroRef, timelineRef, scratWrapper}) {
  const topBadgeRef = useRef();
  const mainTitleRef = useRef();
  const rolesRef = useRef();
  const taglineRef = useRef();
  const hintRef = useRef();

  useGSAP(() => {
    const badge    = topBadgeRef.current
    const title    = mainTitleRef.current
    const roles    = rolesRef.current
    const tagline  = taglineRef.current
    const hero     = heroRef.current

    const isDesktop = window.innerWidth >= 1000;

    // Perspective on container for 3D z transforms
    gsap.set(hero,    { perspective: 1200 })
    gsap.set([badge, title, roles, tagline], {
      transformStyle: 'preserve-3d',
      willChange: 'transform, opacity',
      force3D: true,
      scale: 1,
      z: 0,
      opacity: 0
    })

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: '0% top',
        end: isDesktop ? "+=800" : "+=500",
        pin: true,
        anticipatePin: true,
        scrub: 0.8,
      },
    })

    t1
      .fromTo(badge,
        { scale: 1, z: 0, opacity: 1 },
        { scale: 0.08, z: -800, opacity: 0, transformOrigin: '50% 50%', ease: 'power2.inOut', duration: 0.28 },
        0)
      .fromTo(tagline,
        { scale: 1, z: 0, opacity: 1 },
        { scale: 0.05, z: -1000, opacity: 0, transformOrigin: '50% 50%', ease: 'power2.inOut', duration: 0.26 },
        0.03)
      .fromTo(roles,
        { scale: 1, z: 0, opacity: 1 },
        { scale: 0.06, z: -900, opacity: 0, transformOrigin: '50% 50%', ease: 'power2.inOut', duration: 0.28 },
        0.05)
      .fromTo(title,
        { scale: 1, z: 0, opacity: 1 },
        { scale: 0.01, z: -2000, opacity: 0, transformOrigin: '50% 50%', ease: 'power2.inOut', duration: 0.48 },
        0.1)
  }, []);

  const canvasRef = useRef(null);
  const IceAgeScrat = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameIndex = 0;
    let timer = null;
    let destroyed = false;

    const bitmaps = [];

    const loadAll = async () => {
      await Promise.all(
        SRCS.map((src, i) =>
          fetch(src)
            .then((r) => r.blob())
            .then((blob) => createImageBitmap(blob))
            .then((bmp) => {
              bitmaps[i] = bmp;
            }),
        ),
      );

      if (destroyed) return;

      ctx.drawImage(bitmaps[0], 0, 0, 80, 80);

      timer = setInterval(() => {
        frameIndex = (frameIndex + 1) % TOTAL_FRAMES;
        ctx.clearRect(0, 0, 80, 80);
        ctx.drawImage(bitmaps[frameIndex], 0, 0, 80, 80);
      }, FRAME_DURATION);
    };

    loadAll();

    return () => {
      destroyed = true;
      if (timer) clearInterval(timer);
      bitmaps.forEach((bmp) => bmp?.close());
    };
  }, []);

  useEffect(() => {
    let fromLeft = true;

    const mainContainer = IceAgeScrat.current;

    if (!mainContainer) return;

    const boxWidth = mainContainer.offsetWidth;

    let timeoutId;
    let animationResetId;

    function animeScrat() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const duration = windowWidth / 35;
      const startY = Math.random() * (windowHeight / 1.5 - boxWidth);
      const endY = Math.random() * 100;

      mainContainer.getAnimations().forEach((a) => a.cancel());

      if (fromLeft) {
        mainContainer.style.left = `-${boxWidth}px`;
        mainContainer.style.right = "auto";
        mainContainer.style.top = `${startY}px`;
        mainContainer.style.setProperty(
          "--scrat-end-x",
          `${windowWidth + boxWidth}px`,
        );
        mainContainer.style.setProperty("--scrat-end-rotate", "0deg");
        fromLeft = false;
      } else {
        mainContainer.style.right = "auto";
        mainContainer.style.left = `${windowWidth + boxWidth}px`;
        mainContainer.style.top = `${startY}px`;
        mainContainer.style.setProperty(
          "--scrat-end-x",
          `-${windowWidth + boxWidth * 2}px`,
        );
        mainContainer.style.setProperty("--scrat-end-rotate", "180deg");
        fromLeft = true;
      }

      mainContainer.style.setProperty("--scrat-end-y", `${endY}px`);
      mainContainer.style.setProperty(
        "--scrat-end-scale",
        (Math.random()).toFixed(1),
      );
      mainContainer.style.animation = `animateScrat ${duration}s linear forwards`;

      animationResetId = setTimeout(() => {
        mainContainer.style.animation = "none";
        const randomDelay = 1000 + Math.random() * 3000;
        timeoutId = setTimeout(animeScrat, randomDelay);
      }, duration * 1000);
    }

    animeScrat();

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(animationResetId);
    };
  }, []);

  return (
      <div
        id="welcome"
        className={`welcome bg-transparent text-(--p-font) h-auto min-h-[650px] absolute inset-0 z-4 
          p-[0rem_4rem] w-full max-md:p-[0rem_1.5rem] max-lg:p-[0rem_2rem]`}
      >
         <div
                ref={IceAgeScrat}
                className="bg-scrat-animation  max-w-70 max-h-50 z-1 overflow-hidden"
              >
                <div ref={scratWrapper} className="flex items-end gap-3">
                  <div className="w-20 h-21">
                    <canvas
                      ref={canvasRef}
                      width={80}
                      height={80}
                      style={{
                        display: "block",
                      }}
                    />
                  </div>
                  <div className=" w-4 h-4 -translate-y-8">
                    <figure className="size-full">
                      <AcornExperience />
                    </figure>
                  </div>
                </div>
              </div>
        <main
          className={` relative z-4 flex w-100% min-h-[650px]  h-screen  max-w-[1250px] m-auto text-(--p-font) 
        max-md:w-full`}
        >
          <section className=" relative size-full flex gap-4 flex-col justify-center items-center">
            <div ref={topBadgeRef} className="text-sm grad uppercase border px-6 py-1.5 border-[#2395ff75] rounded-3xl">
              Welcome to my
            </div>
            <div ref={mainTitleRef}>
              <h4 className="inline-block whitespace-nowrap font-bold text-[160px] tracking-[0.2rem] m-0 p-0 text-start leading-none max-md:text-[100px] max-sm:text-[70px]">
                <span>p</span>
                <span className='rounded-grad'>o</span>
                <span>r</span>
                <span>t</span>
                <span>f</span>
                <span>o</span>
                <span>l</span>
                <span>i</span>
                <span>o</span>
              </h4>
            </div>
            <div ref={rolesRef}>
              <ul className="list-highlight text-[18px] -tracking-tighter uppercase mt-4 flex items-center gap-12 max-sm:gap-2 max-sm:text-[14px]">
                <li>developer</li>
                <span className="bg-[#4F6FFF]"></span>
                <li>designer</li>
                <span className="bg-[#9B4EFF]"></span>
                <li>learner</li>
              </ul>
            </div>
            <div ref={taglineRef} className="flex flex-col items-center gap-10">
              <p className="w-100 text-center mt-2 text-sm opacity-[.6] max-sm:text-[12px] max-sm:px-2 max-sm:w-full">
                transforming ideas into digital experiences that are modern,
                responsive & user focused.
              </p>
              {/* <button onClick={() => ScrollMove("projects", timelineRef)}
              className="welcome-bottom-button relative z-900 flex gap-4 items-center font-bold uppercase py-2 px-6 text-[12px] rounded-3xl cursor-pointer">
                <span>explore my work</span>
                <span>
                  <ArrowRight />
                </span>
              </button> */}
            </div>
          </section>
        </main>
      </div>
  );
}
