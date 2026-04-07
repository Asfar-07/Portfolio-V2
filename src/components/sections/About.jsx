"use client"
import React from 'react'
import "@/styles/about.css"
import { RevealWrapper } from "../ui/RevealWrapper";
import AboutExperience from '../aboutModels/AboutExperience';

export default function About() {
  return (
    <div
      id="about"
      className="about  text-(--p-font) relative p-[7rem_4rem] w-full max-md:p-[3rem_1.5rem]"
    >
      <main className="h-full grid grid-cols-[1fr_1.5fr] items-center w-100% max-w-[1250px] m-auto  gap-20 relative z-3 text-(--p-font) max-md:grid-cols-[1fr] max-md: reverse max-md:gap-12 max-md:w-full">
        {/* left side of about section */}
        <section className="left-about max-md:w-full max-md:order-2">
          {/* 3D model here */}
          <figure>
            <AboutExperience />
          </figure>
          <ul className="count-works">
            <li>
              <h4>Fresher</h4>
              <samp>EXPERIENCE</samp>
            </li>
            <li>
              <h4>12+</h4>
              <samp>Projects Built</samp>
            </li>
            <li>
              <h4>25 +</h4>
              <samp>Tech Mastery</samp>
            </li>
            <li>
              <h4>∞</h4>
              <samp>Ideas to Build</samp>
            </li>
          </ul>
        </section>
        <section className="right-about h-full flex flex-col justify-end max-md:w-full max-md:order-1">
          <RevealWrapper type="wipe">
            <h5 className=" uppercase tracking-[10px] mb-5">
              <span className="text-(--s-bg-light)">//</span> About Me
            </h5>
            <h2 className=" uppercase font-bold">
              Building Digital <br /> Worlds
            </h2>
            <div className="section-divider"></div>
          </RevealWrapper>
          <RevealWrapper type="fadeUp">
            <p className="about-me font-light mb-10">
              I’m a <span>software developer</span>
              passionate about creating meaningful digital experiences. I love
              taking ideas and shaping them into practical, user-friendly
              applications that people can actually enjoy using. 
              <br></br>
              <br></br>
              I care about both <span>how things work</span> and <span>how they feel</span>, combining solid
              engineering with clean design to build products that are fast,
              reliable, and thoughtfully crafted.
            </p>
            <div className="display-skills">
              <code>React</code>
              <code>Css</code>
              <code>Node.js</code>
              <code>Design</code>
              <code>JavaScript</code>
              <code>UI/UX Design</code>
              <code>Three.js</code>
              <code>Java</code>
              <code>Figma</code>
              <code>GSAP</code>
            </div>
          </RevealWrapper>
        </section>
      </main>
    </div>
  );
}
