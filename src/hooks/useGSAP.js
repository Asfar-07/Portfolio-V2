// hooks/useGSAP.ts
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";


export function useGSAP(callback) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // ✅ ctx is created, callback runs inside it — no circular issue
    const ctx = gsap.context(() => {
      callback(ref);
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}