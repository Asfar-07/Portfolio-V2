import React, { useState, useRef, useMemo, useEffect } from "react";
import Image from "next/image";
import AcornExperience from "../spaceModel/AcornExperience";

const TOTAL_FRAMES = 40;
const FPS = 5;

export default function BackGround({ moonRef }) {
  const animationContainer = useRef(null);
  const mainContainer = useRef(null);
  const [frame, setFrame] = useState(0);

  const frames = Array.from(
    { length: TOTAL_FRAMES },
    (_, i) => `/images/scratframe/frame_${i + 1}.webp`
  );

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

  useEffect(()=>{
    const container = animationContainer.current;
    const main = mainContainer.current;

    frames.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    let currentFrame = 0;
    const interval = setInterval(() => {
      currentFrame = (currentFrame + 1) % TOTAL_FRAMES;
      console.log(currentFrame)
      setFrame(currentFrame);
    }, 1000 / FPS);

    return () => clearInterval(interval);

  },[])
    return (
      <section
        ref={mainContainer}
        className="hero-bg fixed inset-0 -z-5 overflow-hidden pointer-events-none"
      >
        <div
          ref={animationContainer}
          className="flex items-end gap-3 max-w-70 max-h-50 z-2  absolute top-20"
        >
          <div className="w-30 h-30">
            <img
              src={frames[frame]}
              alt="animation"
              width={120}
              height={120}
              draggable={false}
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
            className="moon-img-main"
          />
        </div>
      </section>
    );
}
