"use client";
import { Canvas } from "@react-three/fiber";
import { WarPlane } from "./War_plane";
import { Suspense } from "react";
import PlaneLight from "./PlaneLight";
import React from "react";
import { ContactShadows } from "@react-three/drei";

export default function ProjectExperience() {
  
  return (
    <div className="plane-model size-full relative">
      <Canvas camera={{ position: [0, 0, 0], fov: 45 }}>
        <Suspense fallback={null}>
          <WarPlane />
           <ContactShadows scale={[16,16]} opacity={1}/>
        </Suspense>
        <PlaneLight />     
      </Canvas>
    </div>
  );
}