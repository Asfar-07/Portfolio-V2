// components/ui/RevealWrapper.tsx
"use client";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function RevealWrapper({
  children,
  type = "fadeUp",
  delay = 0,
  className=undefined,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const animations = {
        fadeUp: () =>
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1, y: 0, duration: 0.9, delay,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
            }
          ),
        fadeIn: () =>
          gsap.fromTo(
            el,
            { opacity: 0 },
            {
              opacity: 1, duration: 1, delay,
              scrollTrigger: { trigger: el, start: "top 85%" },
            }
          ),
        wipe: () =>
          gsap.fromTo(
            el,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)", duration: 1.2, delay,
              ease: "power4.inOut",
              scrollTrigger: { trigger: el, start: "top 80%" },
            }
          ),
        stagger: () =>
          gsap.fromTo(
            el.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, stagger: 0.12, duration: 0.7, delay,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 80%" },
            }
          ),
      };

      animations[type]();
    }, ref);

    return () => ctx.revert();
  }, [type, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}