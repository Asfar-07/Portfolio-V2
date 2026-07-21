"use client";
import React, { useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Header from "./layouts/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import SplitType from "split-type";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";

gsap.registerPlugin(ScrollTrigger);


export default function CinemaAnimation({ timelineRef }) {
  // Refs for Background Section
  const scratWrapper = useRef(null);
  const footballRef = useRef(null);

  // Refs for Hero Section
  const mainCinemaRef = useRef(null);
  const heroBodyRef = useRef(null);
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
  const aboutBodyRef = useRef(null);
  const aboutMeRef = useRef(null);
  const collectionRef = useRef(null);

  // Ref for Experience section
  const experiencesBody = useRef(null);
  const experiencesMain = useRef(null);
  const robotBody = useRef(null);
  const leftHeading = useRef(null);
  const rightHeading = useRef(null);
  const mainRobot = useRef(null);
  const groupRobot = useRef(null);
  const [robotReady, setRobotReady] = useState(false);

  // Refs for Projects Section
  const mainProjectsRef = useRef(null);
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const projectsBodyRef = useRef(null);
  const bgImage = useRef(null);
  const mainImage = useRef(null);

  // Refs for achievement Section
  const achievementBodyRef = useRef(null);

  // Refs for contact Section
  const contactBodyRef = useRef(null);

  // Refs for footer Section
  const footerBodyRef = useRef(null);

  const setRobotRef = useCallback((node) => {
    mainRobot.current = node;
    if (node) setRobotReady(true);
  }, []);

  useGSAP(() => {
    if (!robotReady || !mainRobot.current) return;
    const isDesktop = window.innerWidth >= 1000;

    const split = new SplitType(aboutMeRef.current, { types: "words" });
    const aboutWords = Array.from(split.words).filter(
      (el) => !el.closest("[data-nosplit]"),
    );
    const cards = gsap.utils.toArray(".project-card");
    const headingLetters = gsap.utils.toArray(".work-letter");

    const robot = robotBody.current;
    const rect = robot.getBoundingClientRect();
    const moveX = experiencesMain.current.innerWidth / 2 - rect.width / 2;

    gsap.set(heroBodyRef.current, { yPercent: 0 });
    gsap.set(aboutBodyRef.current, { yPercent: 100 });
    gsap.set(experiencesBody.current, { yPercent: 100});
    gsap.set(projectsBodyRef.current, { yPercent: 100 });

    gsap.set(heroBgRef.current, { backgroundColor: "#030516" });
    gsap.set(scratWrapper.current, { scale: 1 });
    gsap.set(groundRef.current, { yPercent: 100 });
    gsap.set(moonRef.current, { y: 600, scale: 0.6 });
    gsap.set(rightRockRef.current, {
      y: 300,
      scale: 0.4,
      transformOrigin: "bottom right",
    });
    gsap.set(rightRockHubRef.current, { scale: 0, xPercent: 40, yPercent: 20 });
    // gsap.set(mainHeroRef.current, { opacity:0 })
    gsap.set(heroBadge.current, {
      transformOrigin: "10px center",
      opacity: 0,
      rotate: "90deg",
    });
    gsap.set(heroHeading.current, { y: 200, opacity: 0 });
    gsap.set(heroParagraph.current, { opacity: 0, zIndex: -99 });
    gsap.set(heroButton.current, { opacity: 0, y: 20, zIndex: -99, backdropFilter: "blur(0px)" });

    gsap.set(aboutWords, { x: 100, opacity: 0 });
    gsap.set(collectionRef.current, { opacity: 0, y: 50 });

    //experience section
    gsap.set(leftHeading.current, {xPercent: 100 });
    gsap.set(rightHeading.current, {xPercent: -100 });
    gsap.set(".exp-heading-tittle", { opacity: 0 });
    gsap.set(".floating-box", { opacity: 0 });
    gsap.set(".experience-card", { opacity: 0, yPercent: 100 });
    const expCards = gsap.utils.toArray(".experience-card");

    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: mainCinemaRef.current,
        start: "top top",
        end: isDesktop ? "+=8000" : "+=6000",
        scrub: isDesktop ? 1 : 3,
        pin: true,
        refreshPriority: 10
      },
    });

    //hero section animation
    timelineRef.current
      .to( heroBgRef.current, { backgroundColor: "#00031f", duration: 1, ease: "none" }, "0.5")
      .to( moonRef.current, { y: 0, duration: 1, ease: "none", scale: 1 }, "<+=1.5")
      .to( scratWrapper.current, { scale: 0.03, duration: 1, ease: "none" }, "<")
      .to( footballRef.current.scale, { x: 0.0001, y: 0.0001, z: 0.0001, duration: 1, ease: "none", }, "<")
      .to( groundRef.current, { yPercent: 0, duration: 1, ease: "none" }, "<+=0.3")
      .to( rightRockRef.current, { y: 0, duration: 1, scale: 1 }, "<+=.4")
      .to( rightRockHubRef.current,
        {
          scale: 1,
          xPercent: 0,
          yPercent: 0,
          duration: 1.5,
          ease: "power1.inOut",
        },
        "<+=.4",
      )
      .to( heroBadge.current, { opacity: 1, rotate: "0deg", duration: 1.5, ease: "power1.inOut" }, "<")
      .to( heroHeading.current, { y: 0, opacity: 1, duration: 1, ease: "none" },"<+=.5")
      .to( heroParagraph.current, { opacity: 1, duration: 1, zIndex: 100, ease: "none" }, "<+=1.2")
      .to( heroButton.current,
        {
          opacity: 1,
          zIndex: 100,
          y: 0,
          backdropFilter: "blur(10px)",
          duration: 1,
          ease: "none",
        },
        "<+=.5",
      )
      // .to( heroButton.current,
      //   {
      //     y: 0,
      //     duration: 1,
      //     ease: "none",
      //   },
      //   "<+=1",
      // )
      .to( heroBodyRef.current, { yPercent: -100, duration: 2, ease: "none" }, "<+=1.5")

      //about section animation
      .to(aboutBodyRef.current, { yPercent: 0, duration: 2, ease: "none" }, "<")
      .to(
        aboutWords,
        {
          x: 0,
          opacity: 1,
          stagger: { each: 0.1 },
          direction: 1,
          ease: "none",
        },
        "<=+1.1",
      )
      .to( collectionRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "<=+5")
      .to( aboutBodyRef.current, { yPercent: -100, duration: 1, ease: "none" }, "<=+1")

      //experience section animation
      .to( experiencesBody.current, { yPercent: 0, duration: 1, ease: "none" }, "<")
      .to( mainRobot.current.position, { x: 0.5, y: 0, z: -5, duration: 0.8, ease: "none" }, "<+=1")
      .to( mainRobot.current.rotation, { y: -0.6, duration: 0.8, ease: "none" }, "<")
      .to( mainRobot.current.position, { x: 0, y: 0, z: 0, duration: 0.8, ease: "none" }, "<+=1")
      .to( mainRobot.current.rotation, { x: 0, y: 0, duration: 0.8, ease: "none", }, "<")

      .to( leftHeading.current, { xPercent: 0, duration: 0.5, ease: "power2.out", }, "<+=1")
      .to( rightHeading.current, { xPercent: 0, duration: 0.5, ease: "power2.out", }, "<")

      .to( ".exp-heading-tittle", { opacity: 1, duration: 0.4, ease: "none", }, "<+=.2" )

      .to( ".floating-box", { opacity: 1, duration: 0.4, ease: "none", }, "<")

      .to( ".exp-heading-tittle", { opacity: 0, duration: 0.4, ease: "none", }, "<+=1")

      .to( leftHeading.current, { yPercent: 150, duration: 0.5, ease: "power2.out" }, "<+=1")

      .to( rightHeading.current, { yPercent: -150, duration: 0.5, ease: "power2.out", }, "<")

      .to( ".floating-box", { opacity: 0, duration: 0.4, ease: "none", }, "<",);

    //main animation

    expCards.forEach((card, index) => {
      timelineRef.current.to(robot, {
        xPercent: index % 2 === 0 ? 50 : -50,
        duration: 1.5,
        ease: "none",
      });

      if (index > 0) {
        timelineRef.current.to(
          expCards[index - 1],
          {
            opacity: 1,
            yPercent: -200,
            duration: 1,
            ease: "none",
          },
          "<",
        );
      }

      timelineRef.current
        .to( card, { opacity: 1, yPercent: -50, duration: 1, ease: "none", }, "<")

        .to( mainRobot.current.position,
          {
            x: index % 2 === 0 ? 0.1 : -0.1,
            z: -0.4,
            duration: 0.8,
            ease: "none",
          },
          "<",
        )

        .to( mainRobot.current.rotation,
          {
            y: index % 2 === 0 ? -0.4 : 0.4,
            duration: 0.8,
            ease: "none",
          },
          "<",
        );
    });
      
    //project section animation
    timelineRef.current
      .to( projectsBodyRef.current, { yPercent: 0, duration: 2, ease: "none" }, "<=+1.5")
      .fromTo( bgImage.current, { yPercent: 0 }, { yPercent: -20, duration: 1 }, "<=+2")
      .fromTo( mainImage.current, { top: "0%", height: "100%" }, { top: "20%", height: "70%", duration: 0.2 }, "<=+1");

    headingLetters.forEach((letter) => {
      timelineRef.current.fromTo( letter, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.3 });
    });

    timelineRef.current
      .to( heroBodyRef.current, { yPercent: -500, duration: 1, ease: "none" }, "<");

    cards.forEach((card, index) => {
      timelineRef.current.fromTo( card, { yPercent: 140, scale: 1.25 }, { yPercent: -50, scale: 1, duration: 1.5, ease: "power2.out" });

      // last card fullscreen
      if (index === cards.length - 1) {
        timelineRef.current
          .to(card, {
            width: "100vw",
            height: "100vh",
            maxWidth: "none",
            maxHeight: "none",
            borderRadius: 0,
            duration: 1,
          })

          .to( leftContainerRef.current, { width: 0, duration: 0.5 })
          .to( document.body, { backgroundColor: "#6D28D9", duration: 0.1, ease: "power3.out" })
          .to( rightContainerRef.current,
            {
              width: "100%",
              paddingLeft: isDesktop ? 90 : 20,
              paddingRight: isDesktop ? 90 : 20,
              duration: 0.5,
            }, "<");
      }
    });
    ScrollTrigger.refresh();
  }, { scope: mainCinemaRef, dependencies: [robotReady] });
  return (
    <main className=" w-full relative">
      <Header timelineRef={timelineRef} />
      <div
        ref={mainCinemaRef}
        className=" relative w-full min-h-screen overflow-hidden"
      >
        <Hero
          scratWrapper={scratWrapper}
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
          footballRef={footballRef}
        />
        <About
          aboutBodyRef={aboutBodyRef}
          mainAboutRef={mainAboutRef}
          aboutMeRef={aboutMeRef}
          collectionRef={collectionRef}
        />
        <Experience 
          experiencesBody={experiencesBody}
          leftHeading={leftHeading}
          rightHeading={rightHeading}
          robotBody={robotBody}
          experiencesMain={experiencesMain}
          groupRobot={groupRobot}
          setRobotRef={setRobotRef}
        />
        <Projects
          mainProjectsRef={mainProjectsRef}
          leftContainerRef={leftContainerRef}
          rightContainerRef={rightContainerRef}
          projectsBodyRef={projectsBodyRef}
          bgImage={bgImage}
          mainImage={mainImage}
        />
      </div>
    </main>
  );
}
