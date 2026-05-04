import React from 'react'
import { Canvas } from "@react-three/fiber";
import PlanetLight from "./PlanetLight";
import { Planet } from "./Planet";

export default function PlanetExperience() {
  return (
    <Canvas position={{ x: 0, y: 0, z: 15 }} fov={45}>
      <PlanetLight />
      <Planet />
    </Canvas>
  )
}
