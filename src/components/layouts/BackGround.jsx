"use client";
import React, { useRef } from "react";
import Image from "next/image";
import "../../styles/background.css"
import MainSpaceExperience from "../spaceModel/MainSpaceExperience";


export default function BackGround({ moonRef, handleLoad, footballRef}) {
  const mainContainer = useRef(null);
  return (
    <section
      ref={mainContainer}
      className="hero-bg fixed inset-0 z-5 overflow-hidden pointer-events-none"
    >
      {/* main space canvas */}
      <main className="z-5 absolute inset-0 w-full h-full">
        <figure className="size-full ">
          <MainSpaceExperience footballRef={footballRef}/>
        </figure>
      </main>
     

      {/* {stars.map((star) => (
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
      ))} */}

      <div ref={moonRef} className="moon-img absolute z-10 right-0 bottom-0">
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
