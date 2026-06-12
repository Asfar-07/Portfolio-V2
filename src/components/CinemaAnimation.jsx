"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Header from "./layouts/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import SplitType from "split-type";
import Projects from "./sections/Projects";

gsap.registerPlugin(ScrollTrigger);

export default function CinemaAnimation({timelineRef}) {

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

  // Refs for Projects Section
  const mainProjectsRef = useRef(null);
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const projectsBodyRef = useRef(null);
  const bgImage = useRef(null);

  // Refs for achievement Section
  const achievementBodyRef = useRef(null);

  // Refs for contact Section
  const contactBodyRef = useRef(null);

  // Refs for footer Section
  const footerBodyRef = useRef(null);

  useGSAP(() => {

    const isDesktop = window.innerWidth >= 1000;

    const split = new SplitType(aboutMeRef.current, { types: "words" });
    const aboutWords = Array.from(split.words).filter(
          (el) => !el.closest("[data-nosplit]"),
    );
    const cards = gsap.utils.toArray(".project-card");
    const headingLetters = gsap.utils.toArray(".work-letter");

    gsap.set(heroBodyRef.current, { yPercent: 0 });
    gsap.set(aboutBodyRef.current, { yPercent: 100 });
    gsap.set(projectsBodyRef.current, { yPercent: 100 });
    gsap.set(achievementBodyRef.current, { yPercent: 100 })
    gsap.set(contactBodyRef.current, { yPercent: 100 })
    gsap.set(footerBodyRef.current, { yPercent: 100 })


    gsap.set(heroBgRef.current, { backgroundColor: "#000631" });
    gsap.set(groundRef.current, { y: 300 });
    gsap.set(moonRef.current, { y: 600, scale: 0.6 });
    gsap.set(rightRockRef.current, {y: 300,scale: 0.4, transformOrigin: "bottom right" });
    gsap.set(rightRockHubRef.current, { scale: 0, xPercent: 40, yPercent: 20 });
    // gsap.set(mainHeroRef.current, { opacity:0 })
    gsap.set(heroBadge.current, { transformOrigin: "10px center", opacity: 0, rotate: "90deg" });
    gsap.set(heroHeading.current, { y: 200, opacity: 0 });
    gsap.set(heroParagraph.current, { opacity: 0 });
    gsap.set(heroButton.current, { opacity: 0, backdropFilter: "blur(0px)" });

    gsap.set(aboutWords, { x: 100, opacity: 0});
    gsap.set(collectionRef.current, { opacity: 0, y: 50 });


    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: mainCinemaRef.current,
        start: "top top",
        end: "+=7000",
        scrub: 1,
        pin: true,
      },
    });

   //hero section animation
    timelineRef.current.to(
      heroBgRef.current, { backgroundColor: "#000027", duration: 1, ease: "none" }, 0)
      .to(moonRef.current, { y: 0, duration: 1, ease: "none", scale: 1 }, 1.5)
      .to(groundRef.current, { y: 0, duration: 1, ease: "none" }, 1.8)
      .to(rightRockRef.current, { y: 0, duration: 1, scale: 1 }, 2.2)
      .to(
        rightRockHubRef.current,
        { scale: 1, xPercent: 0, yPercent: 0, duration: 1.5, ease: "power1.inOut" }, 3)
      .to(
        heroBadge.current,
        { opacity: 1, rotate: "0deg", duration: 1.5, ease: "power1.inOut" }, 3.2)
      .to(heroHeading.current, { y: 0, opacity: 1, duration: 1, ease: "none" }, 4.2)
      .to(heroParagraph.current, { opacity: 1, duration: 1, ease: "none" }, 5)
      .to(heroButton.current, { opacity: 1, backdropFilter: "blur(10px)", duration: .5, ease: "none" }, 5.5)
      .to(heroBodyRef.current, { yPercent: -100, duration: 2, ease: "none" }, 7)

      //about section animation
      .to(aboutBodyRef.current, { yPercent: 0, duration: 2, ease: "none" }, 7)
      .to(aboutWords, { x: 0, opacity: 1,stagger: { each: 0.12 }, direction: 1 , ease: "none" }, 8)
      .to(collectionRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 9)

      //project section animation
      .to(projectsBodyRef.current, { yPercent: 0, duration: 2, ease: "none" }, 15)
      .fromTo( bgImage.current, { yPercent: 0 }, { yPercent: -20, duration: 1 }, 17)
      
      headingLetters.forEach((letter) => {
        timelineRef.current.fromTo( letter, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .3 });
      });

      timelineRef.current.to(aboutBodyRef.current, { yPercent: -500, duration: 1, ease: "none" }, "<")
      .to(heroBodyRef.current, { yPercent: -500, duration: 1, ease: "none" }, "<")

      cards.forEach((card, index) => {
        timelineRef.current.fromTo( card, { yPercent: 140, scale: 1.25 }, { yPercent: -50, scale: 1, duration: 1,});

        // last card fullscreen
        if (index === cards.length - 1) {
          timelineRef.current.to(card, {
            width: "100vw",
            height: "100vh",
            maxWidth: "none",
            maxHeight: "none",
            borderRadius: 0,
            duration: 1,
          })

            .to(leftContainerRef.current, { width: 0, duration: 0.5 })
            .to(document.body , {
              backgroundColor: "#6D28D9",
              duration: 0.1,
              ease: "power3.out",
            })
            .to(
              rightContainerRef.current,
              {
                width: "100%",
                paddingLeft: isDesktop ? 90 : 20,
                paddingRight: isDesktop ? 90 : 20,
                duration: 0.5,
              },
              "<",
            );
        }
      });


  }, []);
  return (
    <main className=" w-full relative">
      <Header timelineRef={timelineRef} />
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
          timelineRef={timelineRef}
        />
        <About
          aboutBodyRef={aboutBodyRef}
          mainAboutRef={mainAboutRef}
          aboutMeRef={aboutMeRef}
          collectionRef={collectionRef}
        />
        <Projects
          mainProjectsRef={mainProjectsRef}
          leftContainerRef={leftContainerRef}
          rightContainerRef={rightContainerRef}
          projectsBodyRef={projectsBodyRef}
          bgImage={bgImage}
        />
      </div>
    </main>
  );
}
