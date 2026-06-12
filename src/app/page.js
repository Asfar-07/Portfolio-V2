"use client"
import React from "react";
import PortfolioShell from "@/components/PortfolioShell";
import CinemaAnimation from "@/components/CinemaAnimation";
import Achievement from "@/components/sections/Achievement";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const timelineRef = React.useRef(null);
  return (
    <PortfolioShell>
      <div>
        <main className=" w-full relative">
          <div className="absolute w-full h-full inset-0 z-0"></div>
          <CinemaAnimation timelineRef={timelineRef}/>
          <Achievement />
          <Contact timelineRef={timelineRef}/>
        </main>
      </div>
    </PortfolioShell>
  );
}
