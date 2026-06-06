"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function CinemaAnimation() {
  // Refs for Hero Section
  const mainCinemaRef = useRef(null);
  const heroBodyRef = useRef(null);
  const aboutBodyRef = useRef(null);
  const heroRef = useRef();
  const groundRef = useRef();
  const rightRockRef = useRef();
  const rightRockHubRef = useRef();
  const moonRef = useRef();
  const mainHeroRef = useRef();
  const heroHeading = useRef();
  const heroBadge = useRef();
  const heroButton = useRef();
  const heroParagraph = useRef();
  const heroBgRef = useRef();

  // Refs for About Section
  const mainAboutRef = useRef(null);
  const aboutMeRef = useRef(null);
  const collectionRef = useRef(null);

  useGSAP(() => {

    const split = new SplitType(aboutMeRef.current, { types: "words" });
        const words = Array.from(split.words).filter(
          (el) => !el.closest("[data-nosplit]"),
    );

    gsap.set(heroBodyRef.current, { yPercent: 0 });
    gsap.set(aboutBodyRef.current, { yPercent: 100 });
    gsap.set(heroBgRef.current, { backgroundColor: "#000631" });
    gsap.set(groundRef.current, { y: 300 });
    gsap.set(moonRef.current, { y: 600, scale: 0.6 });
    gsap.set(rightRockRef.current, {y: 300,scale: 0.4, transformOrigin: "bottom right" });
    gsap.set(rightRockHubRef.current, { scale: 0, xPercent: 40, yPercent: 20 });
    // gsap.set(mainHeroRef.current, { opacity:0 })
    gsap.set(heroBadge.current, { transformOrigin: "10px center", opacity: 0, rotate: "90deg" });
    gsap.set(heroHeading.current, { y: 200, opacity: 0 });
    gsap.set(heroParagraph.current, { opacity: 0 });
    gsap.set(heroButton.current, { opacity: 0 });

    gsap.set(words, { x: 100, opacity: 0});
    gsap.set(collectionRef.current, { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainCinemaRef.current,
        start: "top top",
        end: "+=4200",
        scrub: 1,
        pin: true,
      },
    });


    tl.to(
      heroBgRef.current,
      { backgroundColor: "#000027", duration: 1, ease: "none" },
      0,
    )
      .to(moonRef.current, { y: 0, duration: 1, ease: "none", scale: 1 }, 1.5)
      .to(groundRef.current, { y: 0, duration: 1, ease: "none" }, 1.8)
      .to(rightRockRef.current, { y: 0, duration: 1, scale: 1 }, 2.2)
      .to(
        rightRockHubRef.current,
        {
          scale: 1,
          xPercent: 0,
          yPercent: 0,
          duration: 1.5,
          ease: "power1.inOut",
        },
        3,
      )
      .to(
        heroBadge.current,
        { opacity: 1, rotate: "0deg", duration: 1.5, ease: "power1.inOut" },
        3.2,
      )
      .to(
        heroHeading.current,
        { y: 0, opacity: 1, duration: 1, ease: "none" },
        4.2,
      )
      .to(heroParagraph.current, { opacity: 1, duration: 1, ease: "none" }, 5)
      .to(heroButton.current, { opacity: 1, duration: 1, ease: "none" }, 6)
      .to(heroBodyRef.current, { yPercent: -100, duration: 2, ease: "none" }, 7)
      .to(aboutBodyRef.current, { yPercent: 0, duration: 2, ease: "none" }, 7)

      .to(words, { x: 0, opacity: 1,stagger: { each: 0.15 }, direction: 1 , ease: "none" },8)
      .to(collectionRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" },9);

  }, []);
  return (
    <div ref={mainCinemaRef} className=" relative w-full min-h-screen">
      <Hero 
        heroBodyRef={heroBodyRef}
        heroRef={heroRef}
        groundRef={groundRef}
        rightRockRef={rightRockRef}
        rightRockHubRef={rightRockHubRef}
        moonRef={moonRef}
        mainHeroRef={mainHeroRef}
        heroHeading={heroHeading}
        heroBadge={heroBadge}
        heroButton={heroButton}
        heroParagraph={heroParagraph}
        heroBgRef={heroBgRef}
      />
      <About 
        aboutBodyRef={aboutBodyRef} 
        mainAboutRef={mainAboutRef} 
        aboutMeRef={aboutMeRef} 
        collectionRef={collectionRef} 
      />
    </div>
  );
}
