"use client";
import React, { useState, useRef, useEffect } from "react";
import dynamic from 'next/dynamic'
import Image from "next/image";
import "../../styles/background.css"

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

export default function BackGround({ moonRef, handleLoad, IceAgeScrat }) {
  const mainContainer = useRef(null);
  const canvasRef = useRef(null);

const [stars, setStars] = useState([]);

useEffect(() => {
  const generatedStars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
    opacity: Math.random() * 0.8 + 0.2,
  }));

  setStars(generatedStars);
}, []);
 
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
 
    let frameIndex = 0;
    let timer = null;
    let destroyed = false;

    const bitmaps= [];
 
    const loadAll = async () => {
      await Promise.all(
        SRCS.map((src, i) =>
          fetch(src)
            .then((r) => r.blob())
            .then((blob) => createImageBitmap(blob))
            .then((bmp) => { bitmaps[i] = bmp; })
        )
      );
 
      if (destroyed) return;
 
      ctx.drawImage(bitmaps[0], 0, 0, 120, 120);
 
      timer = setInterval(() => {
        frameIndex = (frameIndex + 1) % TOTAL_FRAMES;
        ctx.clearRect(0, 0, 120, 120);
        ctx.drawImage(bitmaps[frameIndex], 0, 0, 120, 120);
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
     const startY = Math.random() * (windowHeight / 1.1 - boxWidth);
     const endY = Math.random() * 100;

     // ✅ Cancel running animations without forcing reflow
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
       (0.5 + Math.random()).toFixed(2),
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
      <section
        ref={mainContainer}
        className="hero-bg fixed inset-0 -z-5 overflow-hidden pointer-events-none"
      >
        <div
          ref={IceAgeScrat}
          className="bg-scrat-animation flex items-end gap-3 max-w-70 max-h-50 z-2 overflow-hidden"
        >
          <div className="w-30 h-30">
            <canvas
              ref={canvasRef}
              width={120}
              height={120}
              style={{
                display: "block",
              }}
            />
          </div>
          <div className="w-8 h-8 -translate-y-8">
            <figure className="size-full">
              <AcornExperience />
            </figure>
          </div>
        </div>

        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute z-0 rounded-full star"
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
            onLoad={handleLoad}
            sizes="(max-width: 768px) 60vw, 800px"
            className="moon-img-main"
          />
        </div>
      </section>
    );
}
