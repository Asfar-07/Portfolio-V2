import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = {
  hero: 0.2,
  about: 0.42,
  experience: 0.45,
  projects: 0.61,
  contact: 0.95
};

export default function ScrollMove(section, timelineRef){
   const progress = sections[section];
   const st = timelineRef.current?.scrollTrigger;
     if (!st) return;

     gsap.to(window, {
       duration: 1,
       ease: "power3.out",
       scrollTo: {
         y: st.start + (st.end - st.start) * progress,
       },
     });
}