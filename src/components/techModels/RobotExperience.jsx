import React, { useRef, useState, useCallback } from 'react'
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Robot from './Robot';
import RobotLight from './RobotLight';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function RobotExperience({experiencesBody, leftHeading,  rightHeading, robotBody, experiencesMain}) {
  const mainRobot = useRef(null);
  const groupRobot = useRef(null);
  const [robotReady, setRobotReady] = useState(false);

  const setRobotRef = useCallback((node) => {
    mainRobot.current = node;
    if (node) setRobotReady(true);
  }, []);

  useGSAP(() => {
    if (!robotReady || !mainRobot.current) return;

    const robot = robotBody.current;
    const rect = robot.getBoundingClientRect();
    const moveX = experiencesMain.current.innerWidth / 2 - rect.width / 2;

    gsap.set(leftHeading.current, {
      xPercent: 100
    });

    gsap.set(rightHeading.current, {
      xPercent: -100
    });
    gsap.set(".exp-heading-tittle", {
      opacity: 0
    })

    const tl = gsap.timeline({
     scrollTrigger: {
        trigger: experiencesBody.current,
        start: "top top",
        end: "+=1500",
        scrub: 2,
        pin: true
      },
    });

    // tl.to(mainRobot.current.position, {
    //   x: 5,
    //   y: 0,
    //   z: -15,
    //   duration: .8,
    //   ease: "none"
    // }, 0)
    tl.to(mainRobot.current.position, {
      x: 0.5,
      y: 0,
      z: -5,
      duration: .8,
      ease: "none"
    }, 0)
    .to(mainRobot.current.rotation, {
      y: -0.6,
      duration: .8,
      ease: "none"
    }, "<")
    .to(mainRobot.current.position, {
      x: 0,
      y: 0,
      z: 0,
      duration: .8,
      ease: "none"
    }, "<+=1")
    .to(mainRobot.current.rotation, {
      x: 0,
      y: 0,
      duration: .8,
      ease: "none"
    }, "<")

    .to(leftHeading.current, {
      xPercent: 0,
      duration: .5,
      ease: "power2.out"
    }, "<+=1")
    .to(rightHeading.current, {
      xPercent: 0,
      duration: .5,
      ease: "power2.out"
    }, "<")

    .to(".exp-heading-tittle", {
      opacity: 1,
      duration: .4,
      ease: "none"
    }, "<+=.2")

    .to(".exp-heading-tittle", {
      opacity: 0,
      duration: .4,
      ease: "none"
    }, "<+=1")

    .to(leftHeading.current, {
      yPercent: 150,
      duration: .5,
      ease: "power2.out"
    }, "<+=1")
    
    .to(rightHeading.current, {
      yPercent: -150,
      duration: .5,
      ease: "power2.out"
    }, "<")
    
    .to(robot, {
      xPercent: 50,
      duration: 1,
      ease: "none",
      invalidateOnRefresh: true,
      }, "<")
    
    .to(mainRobot.current.position, {
      x: 0.1,
      z: -0.4,
      duration: .8,
      ease: "none"
    }, "<")

    .to(mainRobot.current.rotation, {
      y: -0.4,
      duration: .8,
      ease: "none"
    }, "<")

    .to(robot, {
      xPercent: -50,
      duration: 1.5,
      ease: "none",
      invalidateOnRefresh: true,
    }, "<+=1.5")
    
    .to(mainRobot.current.position, {
      x: -0.1,
      z: -0.4,
      duration: .8,
      ease: "none"
    }, "<")

    .to(mainRobot.current.rotation, {
      y: 0.4,
      duration: .8,
      ease: "none"
    }, "<")


  }, { scope: experiencesBody, dependencies: [robotReady] });

  return (
    <div className="size-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <group ref={groupRobot} scale={[1.05, 1.2, 1]}>
          <Robot setRobotRef={setRobotRef}/>
        </group>
        <RobotLight />
      </Canvas>
    </div>
  );
}