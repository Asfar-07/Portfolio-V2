"use client";
import { Canvas } from "@react-three/fiber";
import PlaneLight from "./PlaneLight";
import { WarPlane } from "./War_plane";
import React from "react";

export default function aboutExperience() {
  
  return (
    <div  className="plane-model w-full h-70 relative">
      <Canvas camera={{ position: [0, 0, 0], fov: 45 }}>
        <PlaneLight />
        <WarPlane />
      </Canvas>
    </div>
  );
}
