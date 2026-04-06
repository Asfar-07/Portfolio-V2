import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Project from "@/components/sections/Project";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <div >
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}
