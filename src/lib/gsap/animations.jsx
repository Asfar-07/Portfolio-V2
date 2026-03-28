import { gsap, ScrollTrigger } from "./index";


export function heroGroundAnimation(parent,selectedChild) {
    if (!parent) return;
    return gsap.to(selectedChild,{
       height:"45%",
         scrollTrigger: {
          trigger: parent,
          start: "10% 50%",
          end: "bottom 50%",
          scrub: true,
        },
        ease:"power1"
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
          end: "bottom 50%",
          scrub: true,
        },
        ease:"power1"
      });
    });  
}