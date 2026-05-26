"use client";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import "../../styles/footer.css";

export default function Footer() {
  const marqueeRef = useRef(null);

  const navLinks = ["HOME", "ABOUT", "PROJECT", "EDUCATION", "CONTACT"];
  const socialLinks = [
    { label: "[ @Linkedin ]", href: "#" },
    { label: "[ @Instagram ]", href: "#" },
    { label: "[ @Github ]", href: "#" },
    { label: "[ @Linkedin ]", href: "#" },
    {
      label: "[ asasfarmuhammedns@gmail.com ]",
      href: "mailto:asfarmuhammedns@gmail.com",
    },
  ];

  return (
    <footer className="w-full text-[#ffffff] overflow-hidden bg-[#000000] p-[3rem_4rem] max-sm:p-[2rem_1rem]  max-md:p-[2rem_1.5rem] max-lg:p-[2rem_2rem] ">
      <main className="flex relative max-sm:flex-col max-sm:gap-8">
        <section className="flex flex-col flex-2 gap-12 max-sm:gap-6">
          <h4 className="uppercase font-bold flex items-end  leading-none text-8xl tracking-wider max-md:text-6xl">
            Asfar{" "}
            <div className="w-3 h-3 ml-4 bg-[#ffffff] -translate-y-3"></div>
          </h4>
          <div className=" relative flex justify-center items-center w-75 h-75 bg-[#ffffff] z-5 max-md:h-60 max-md:w-60 ">
            <ArrowUpRight className="text-[#000000] size-full scale-[1.2]" />
          </div>
          <h4 className="uppercase font-bold flex items-end  leading-none text-8xl tracking-wider max-md:text-6xl sm:hidden">
            Let's Talk
          </h4>
        </section>
        <section className="flex flex-4 flex-col">
          <div className="flex ml-30 max-lg:gap-4 max-lg:ml-10 max-md:ml-5 max-sm:ml-0">
            <div className="flex flex-1">
              <ul className="flex flex-col font-medium gap-4 text-sm ">
                {navLinks.map((navLink, index) => (
                  <li key={index}>
                    <a href={"#" + navLink.toLowerCase()}>{navLink}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-1 justify-end">
              <ul className="flex flex-col font-extralight gap-4 text-sm max-md:items-end max-lg:items-end">
                {socialLinks.map((socialLink, index) => (
                  <li key={index}>
                    <a href={socialLink.href}>{socialLink.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-20 flex justify-end font-bold text-sm max-md:mt-10 max-sm:justify-center">
            <span>2026 Asfar Muhammed N S</span>
          </div>
        </section>
        <div className=" absolute z-2 right-0 bottom-0 w-full flex gap-1 uppercase font-bold  text-8xl overflow-hidden translate-x-20 translate-y-2.5 max-sm:hidden">
          <div className="footer-marquee">
            <div className="footer-track">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} className="footer-word">
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
