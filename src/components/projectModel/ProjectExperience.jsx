"use client";
import { Canvas } from "@react-three/fiber";
import { WarPlane } from "./War_plane";
import PlaneLight from "./PlaneLight";
import React from "react";

export default function ProjectExperience() {
  
  return (
    <div className="plane-model size-full relative">
      <Canvas camera={{ position: [0, 0, 0], fov: 45 }}>
        <PlaneLight />     
        <WarPlane />
      </Canvas>
    </div>
  );
}