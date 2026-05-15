import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Welcome from "@/components/sections/Welcome";

export default function Home() {
  return (
    <div >
      <Welcome />
      <Hero />
      <main className="w-full relative bg-(--p-bg-deep)">
        <div className=" absolute w-full h-full inset-0 z-0"></div>
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
