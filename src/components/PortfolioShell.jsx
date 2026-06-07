"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioShell({ children }) {
  useEffect(() => {
    // Stage 1: after first paint
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    // Stage 2: after short delay — all child useGSAP hooks are now settled
    const t1 = setTimeout(() => ScrollTrigger.refresh(true), 300);

    // Stage 3: after full page load (images, fonts, webp assets in Hero)
    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad);

    // Stage 4: resize — keeps pins correct on orientation change / DevTools open
    const onResize = () => ScrollTrigger.refresh(true);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <>{children}</>;
}