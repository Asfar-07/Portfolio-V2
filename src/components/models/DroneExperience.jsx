"use client";
import { Canvas } from "@react-three/fiber";
import DroneLight from "./DroneLight";
import { Drone } from "./Drone";
import React from "react";

export default function DroneExperience() {
  return (
    <div className='drone-model w-14 h-14 absolute right-0 top-[40%] translate-y-[-50%]'>
      <Canvas position={{ x: 0, y: 0, z: 15 }} fov={45}>
        <DroneLight />
        <Drone />
      </Canvas>

    </div>
  )
}
