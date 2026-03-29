"use client"
import React from 'react'
import "@/styles/about.css"
import Image from 'next/image';
import { RevealWrapper } from "../ui/RevealWrapper";
import AboutExperience from '../aboutModels/AboutExperience';

export default function About() {
  return (
    <div id='about' className="about w-full  text-(--p-font) relative z-3 p-[5rem_2rem] max-md:p-[3rem_1.5rem]">
      <main className="h-full grid grid-cols-[1fr_1.5fr] items-center w-[90%] max-w-350  gap-20  m-auto relative z-3 text-(--p-font) max-md:grid-cols-[1fr] max-md:gap-12 max-md:w-full">
        {/* left side of about section */}
        <section className="left-about max-md:w-full">
          {/* 3D model here */}
          <figure>
            <div className="w-full h-70 relative">
              <AboutExperience />
            </div>
          </figure>
            <ul className="count-works">
              <li>
                <h4>Fresher</h4>
                <samp>EXPERIENCE</samp>
              </li>
              <li>
                <h4>40+</h4>
                <samp>Projects Built</samp>
              </li>
              <li>
                <h4>20 +</h4>
                <samp>Techs</samp>
              </li>
              <li>
                <h4>∞</h4>
                <samp>Ideas to Build</samp>
              </li>
            </ul>
        </section>
        <section className="right-about max-md:w-full">
          <RevealWrapper type='wipe'>
            <h5 className=" uppercase tracking-[10px] mb-5">
              <span className="text-(--s-bg-light)">//</span> About Me
            </h5>
            <h2 className=" uppercase font-bold">
              Building Digital <br /> Worlds
            </h2>
          <div className="section-divider"></div>
          </RevealWrapper>
          <RevealWrapper type='fadeUp'>
          <p className="about-me">
            I'm a <span>developer & designer</span> who transforms ideas into
            polished digital experiences. Inspired by the complexity of
            engineered worlds — every pixel, every interaction is intentional.
            <br></br>
            <br></br>
            My work lives at the intersection of 
            <span>technical precision</span> and 
            <span>visual storytelling</span>. From clean interfaces to complex
            systems — I build things that feel alive.
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
