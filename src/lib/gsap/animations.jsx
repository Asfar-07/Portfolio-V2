import { gsap, ScrollTrigger } from "./index";


function planePassing(parent){
  return gsap.fromTo(parent,{
           x:-200,
           y:0
        },
           {
          x:0,
          y:0,
          duration: 2,
          scrollTrigger: {
             trigger: parent, 
             start: "50% 80%", 
            //  markers:true,
          },
          ease:"power1.out"
        }); 

}