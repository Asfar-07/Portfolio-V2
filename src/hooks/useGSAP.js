"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function useGSAP(callback) {
    const ref = useRef(null);

  useEffect(() => {
    // Guard: only run client-side
    if (!ref.current) return;

    // gsap.context() scopes all animations & auto-cleans on unmount
    const ctx = gsap.context(() => {
      callback(ctx, ref);
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
