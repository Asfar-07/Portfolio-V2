import React from "react";
import { RevealWrapper } from "../ui/RevealWrapper";
import "@/styles/project.css";

export default function Project() {
  return (
    <div
      className="about w-full  text-(--p-font) relative z-3 p-[7rem_2rem] max-md:p-[5rem_1.5rem] "
      id="project"
    >
      <main className="w-[90%] max-w-350 m-auto max-md:w-full">
        <div>
          <RevealWrapper type='wipe'>
          <h5 className=" uppercase tracking-[10px] mb-5">
            <span className="text-(--s-bg-deep)">//</span> showcase my works
          </h5>
          <h2 className=" uppercase font-bold">Project</h2>
          <div className="section-divider"></div>
          </RevealWrapper>
          {/* display project here */}
          <section className="w-full grid grid-cols-3 gap-6 max-sm:grid-cols-1">
            <RevealWrapper type="fadeUp" className={"project-card col-span-2 max-md:col-span-1"}>
            {/* each project */}
            <div className="project-card col-span-2 max-md:col-span-1">
              <div className="project-glow"></div>
              <div className="project-img h-50 relative overflow-hidden">
                <div className="project-num">01</div>
              </div>
              <div className="project-about p-6">
                <span className=" uppercase text-[0.6rem] tracking-wide text-(--s-bg-light) mb-2">
                  Web Application
                </span>
                <div className="flex justify-between"><h6 className="text-[1rem] mb-3 leading-5">DinoRyx </h6> <span className="text-[0.8rem] text-(--cyan-mark)">working</span></div>
                
                <p className="text-[0.85rem] leading-5 text-white mb-5">
                  A real-time Gym management platform with immersive data
                  visualization, custom WebGL charts, and live API integration
                  for dashboard.
                </p>
                <div className="project-stack flex flex-wrap gap-2">
                    <code >Microservices</code>
                    <code>Java</code>
                    <code>Spring Boot</code>
                    <code>React js</code>
                    <code>TypeScript</code>
                    <code>Api Gateway</code>
                    <code>Css</code>
                    <code>Tailwind CSS</code>
                    <code>shadcn</code>
                </div>
              </div>
              <div className="neon-corner tl"></div>
              <div className="neon-corner br"></div>
            </div>
            </RevealWrapper>
            {/* each project */}
            <RevealWrapper type="fadeUp" className={"project-card"}>
            <div className="project-card">
              <div className="project-glow"></div>
              <div className="project-img h-40 relative overflow-hidden">
                <div className="project-num">02</div>
              </div>
              <div className="project-about p-6">
                <span className=" uppercase text-[0.6rem] tracking-wide text-(--s-bg-light) mb-2">
                  Web Application
                </span>
                <h6 className="text-[1rem] mb-3 leading-5">E-Learning Website</h6>
                <p className="text-[0.85rem] leading-5 text-white mb-5">
                 Built for the education sector with strong user authentication.
                </p>
                <div className="project-stack flex flex-wrap gap-2">
                    <code >HTML</code>
                    <code >CSS</code>
                    <code >JavaScript</code>
                    <code >Java</code>
                    <code >Spring Boot</code>
                    <code>OOBs</code>
                </div>
              </div>
              <div className="neon-corner tl"></div>
              <div className="neon-corner br"></div>
            </div>
            </RevealWrapper>
            
             {/* each project */}
            <RevealWrapper type="fadeUp" className={"project-card"}>
            <div className="project-card">
              <div className="project-glow"></div>
              <div className="project-img h-40 relative overflow-hidden">
                <div className="project-num">02</div>
              </div>
              <div className="project-about p-6">
                <span className=" uppercase text-[0.6rem] tracking-wide text-(--s-bg-light) mb-2">
                  Web Application
                </span>
                <h6 className="text-[1rem] mb-3 leading-5">Portfolio-1 Website</h6>
                <p className="text-[0.85rem] leading-5 text-white mb-5">
                   Personal portfolio to showcase my design and coding projects.
                </p>
                <div className="project-stack flex flex-wrap gap-2">
                    <code >React js</code>
                    <code >CSS</code>
                    <code >JavaScript</code>
                    <code >Node js</code>
                    <code >Express js</code>
                    <code>Three js</code>
                    <code>GSAP</code>
                </div>
              </div>
              <div className="neon-corner tl"></div>
              <div className="neon-corner br"></div>
            </div>
            </RevealWrapper>
            <RevealWrapper type="fadeUp" className={"project-card"}>
             {/* each project */}
            <div className="project-card">
              <div className="project-glow"></div>
              <div className="project-img h-40 relative overflow-hidden">
                <div className="project-num">02</div>
              </div>
              <div className="project-about p-6">
                <span className=" uppercase text-[0.6rem] tracking-wide text-(--s-bg-light) mb-2">
                  Web Application
                </span>
                <h6 className="text-[1rem] mb-3 leading-5">Coding Platform</h6>
                <p className="text-[0.85rem] leading-5 text-white mb-5">
                 Modern web app with virtual coding and a large code repository.
                </p>
                <div className="project-stack flex flex-wrap gap-2">
                    <code >React js</code>
                    <code >CSS</code>
                    <code >JavaScript</code>
                    <code >Python</code>
                    <code >Flask</code>
                    <code>Three js</code>
                </div>
              </div>
              <div className="neon-corner tl"></div>
              <div className="neon-corner br"></div>
            </div>
            </RevealWrapper>
          </section>
        </div>
      </main>
    </div>
  );
}
