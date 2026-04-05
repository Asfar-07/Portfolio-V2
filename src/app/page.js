import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Project from "@/components/sections/Project";
import Contact from "@/components/sections/Contact";
import Service from "@/components/sections/Service";
export default function Home() {
  return (
    <div >
      <Hero />
      <About />
      <Project />
      <Service />
      <Contact />
    </div>
  );
}
