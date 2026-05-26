"use client";
import React, { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import projects from "../../store/db/projectData";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;

    const cards = gsap.utils.toArray(".project-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        scrub: 1,
        pin: true,
      },
    });

    cards.forEach((card, index) => {
    if (index !== 0) {
      tl.fromTo(
        card,
        {
          yPercent: 140,
          scale: 1.25
        },
        {
          yPercent: -50,
          scale: 1,
          duration: 1,
        }
      );
    }

    // last card fullscreen
    if (index === cards.length - 1) {
      tl.to(card, {
        width: "100%",
        height: "100%",
        borderRadius: 0,
        duration: 1,
      });
    }
  });
  }, [sectionRef]);

  return (
    <div
      id="projects"
      className="projects bg-(--p-bg-deep) mt-20 text-(--p-font) h-auto overflow-hidden relative  w-full "
    >
      <main
        ref={sectionRef}
        className=" flex relative z-3 w-100%  h-screen text-(--p-font) max-md:flex-col-reverse  max-md:w-full  max-md:h-auto"
      >
        {projects.map((project, index) => {
        
        const TypeIcon = project.type.icon;

        return (
          <div
            key={index}
            className="project-card flex absolute w-280 left-1/2 top-1/2 -translate-y-1/2  -translate-x-1/2 inset-0 h-160 bg-[#755EF4] rounded-2xl overflow-hidden"
          >
            <section className="flex flex-col justify-between flex-1 h-full bg-[#661DE7]">
              <header className="flex flex-col">
                <div className="w-full h-15 border-b-2 border-[#755EF4]"></div>
                <ul className="flex flex-col items-center gap-5 pt-5 w-full">
                  {project.tool.map((tool, index) => (
                    <li
                      key={index}
                      className=" border border-white bg-white p-1 rounded-lg cursor-pointer"
                      title={tool}
                    >
                      <img
                        className="w-8 h-8"
                        src={`/images/icons/${tool.toLowerCase().replaceAll(" ", "")}.svg`}
                        alt="skills icon"
                      />
                    </li>
                  ))}
                </ul>
              </header>
            </section>

            <section className="flex flex-14 p-10">
              <div className="flex flex-col justify-center gap-4 flex-1">
                <div className=" uppercase flex items-center tracking-normal gap-2 text-xs text-[#661DE7] font-bold px-3 py-1   border border-[#ffffff47] w-fit rounded-lg">
                  <span>
                    <Sparkles />
                  </span>
                  <span>featured project</span>
                </div>
                <div
                  className="w-12 h-12 rounded-lg"
                  style={{ backgroundColor: project.type.color }}
                >
                  <TypeIcon className="size-full p-2.5" color="white" />
                </div>
                <h2 className="text-5xl font-bold">{project.name}</h2>
                <span className="w-20 h-1.5 bg-[#661DE7] rounded-2xl"></span>
                <p className="text-2xl font-medium max-w-95">
                  {project.point}
                </p>
                <p className="text-sm font-light text-[#ffffffdc]">
                  {project.description}
                </p>

                <section className="flex gap-5 w-full text-xs font-medium pr-3">
                  {project.features.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div key={index} className="flex items-center flex-1 bg-[#ffffff28] p-3 rounded-sm">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#661DE7]">
                          <FeatureIcon />
                        </div>
                        <div className="max-w-18 ml-2 leading-none">
                          {feature.title}
                        </div>
                      </div>
                    );
                  })}
                </section>

                <section className="flex gap-5 text-sm font-medium pt-2">
                  <a
                    href={project.links[0]}
                    className="flex gap-2 bg-[#661DE7] text-white px-4 py-2.5 rounded-lg"
                  >
                    View Project <ArrowRight />
                  </a>
                  <a href={project.links[1]} className=" text-white px-4 py-2 rounded-sm">
                    Learn More
                  </a>
                </section>
              </div>
              <aside className=" relative flex items-center flex-1">
                <div className=" relative w-full h-[75%]">
                  <div className=" absolute left-0 top-0 w-[85%] h-[70%] max-w-100 max-h-80 bg-amber-200 rounded-2xl overflow-hidden border border-white">
                    <img
                      className="size-full "
                      loading="lazy"
                      src={project.image[1]}
                      alt="prof"
                    />
                  </div>
                  <div className=" absolute  right-0 bottom-0 w-[85%] h-[70%] max-w-100 max-h-80 bg-emerald-700 rounded-2xl overflow-hidden border border-white">
                     <img
                      className="size-full "
                      loading="lazy"
                      src={project.image[0]}
                      alt="prof"
                    />
                  </div>
                </div>
              </aside>
            </section>
          </div>
        );})}
      </main>
    </div>
  );
}
