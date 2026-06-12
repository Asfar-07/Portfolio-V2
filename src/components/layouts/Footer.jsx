"use client";
import { ArrowUpRight } from "lucide-react";
import ScrollMove from "@/utils/ScrollMove";
import "../../styles/footer.css";


export default function Footer({footerBodyRef, timelineRef}) {

  const navLinks = [ "hero", "about","experience", "projects", "contact"];
  const socialLinks = [
    { label: "[ @LinkedIn ]", href: "https://www.linkedin.com/in/asfar2003" },
    { label: "[ @Instagram ]", href: "/" },
    { label: "[ @GitHub ]", href: "https://github.com/Asfar-07" },
    { label: "[ @Portfolio ]", href: "/" },
    {
      label: "[ asfarmuhammedns@gmail.com ]",
      href: "mailto:asfarmuhammedns@gmail.com",
    },
  ];

  return (
    <footer ref={footerBodyRef} className="w-full absolute bottom-0 left-0 z-2 text-[#ffffff] overflow-hidden bg-[#000000] p-[3rem_4rem] max-sm:p-[2rem_1rem]  max-md:p-[2rem_1.5rem] max-lg:p-[2rem_2rem] ">
      <main className="flex relative max-sm:flex-col max-sm:gap-8">
        <section className="flex flex-col flex-2 gap-15 max-sm:gap-6">
          <h4 className="uppercase font-bold flex items-end  leading-none text-8xl tracking-wider max-md:text-6xl">
            Asfar{" "}
            <div className="w-3 h-3 ml-4 bg-[#ffffff] -translate-y-3"></div>
          </h4>
          <div className=" relative flex justify-center items-center w-70 h-70 bg-[#ffffff] z-5 max-md:h-60 max-md:w-60 ">
            <ArrowUpRight className="text-[#000000] size-full scale-[1.2]" />
          </div>
          <h4 className="uppercase font-bold flex items-end  leading-none text-8xl tracking-wider max-md:text-6xl sm:hidden">
            Let's Talk
          </h4>
        </section>
        <section className="flex flex-4 flex-col">
          <div className="flex ml-30 max-lg:gap-4 max-lg:ml-10 max-md:ml-5 max-sm:ml-0">
            <div className="flex flex-1">
              <ul className="flex uppercase flex-col font-medium gap-6 tracking-wider text-sm ">
                {navLinks.map((navLink, index) => (
                  <li key={index}>
                    <button className="hover:underline uppercase cursor-pointer" onClick={() => ScrollMove(navLink.toLowerCase(), timelineRef)}>{navLink}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-1 justify-end">
              <ul className="flex flex-col uppercase font-extralight gap-6 text-sm max-md:items-end max-lg:items-end">
                {socialLinks.map((socialLink, index) => (
                  <li key={index}>
                    <a href={socialLink.href}>{socialLink.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-20 text-[#ffffff8a] flex justify-end font-bold text-sm max-md:mt-10 max-sm:justify-center">
            <span>©2026 Asfar Muhammed N S</span>
          </div>
        </section>
        <div className=" absolute z-2 right-0 bottom-0 w-full flex gap-1 uppercase font-bold  text-8xl overflow-hidden translate-x-20 max-sm:hidden">
          <div className="footer-marquee">
            <div className="footer-track">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} className="footer-word scale-y-[1.4]">
                  Let's Talk
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
}
