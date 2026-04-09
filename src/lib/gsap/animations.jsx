import { gsap, ScrollTrigger } from "./index";


export function heroGroundAnimation(parent,selectedChild) {
    if (!parent) return;
    return gsap.to(selectedChild,{
       height:"45%",
         scrollTrigger: {
          trigger: parent,
          start: "10% 50%",
          end: "bottom 20%",
          scrub: true,
        },
         ease: "power3.out"
    })
}
export function heroRockAnimation(parent,selectedChild) {
    if (!parent) return;
    const children = parent.querySelectorAll(selectedChild);
    if (!children) return;
    const boxes = gsap.utils.toArray(children);
    return boxes.map((box) => {
      return gsap.fromTo(box,{
        y:0,
        x:0
      },
         {
        y: -50,
        x:0,
        scrollTrigger: {
          trigger: parent,
          start: "10% 50%",
          end: "bottom 20%",
          scrub: true,
        },
        ease: "power3.out"
      });
    });  
}
export function revealPlaneModel(parent,mixer){
  if (!parent) return;
  if (!mixer) return;
  planePassing(parent);
  return  gsap.fromTo(mixer,{
           timeScale: 2
        },
           {
          timeScale: 0.7,
          duration: 2,
          scrollTrigger: {
             trigger: parent, 
             start: "50% 80%", 
            //  markers:true,
          },
          ease:"power1.out"
        }); 

}
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