import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Achievement from "@/components/sections/Achievement";
import Education from "@/components/sections/Education";
import PortfolioShell from "@/components/PortfolioShell";
import CinemaAnimation from "@/components/CinemaAnimation";

export default function Home() {
  return (
    <PortfolioShell>
      <div>
        <main className="main-portfolio w-full relative bg-(--p-bg-deep)">
          <div className="absolute w-full h-full inset-0 z-0"></div>
          <CinemaAnimation />
          {/* <Experience /> */}
          <Projects />
          <Achievement />
          <Contact />
        </main>
      </div>
    </PortfolioShell>
  );
}
