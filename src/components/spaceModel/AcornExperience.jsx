import React from 'react'
import { Canvas } from "@react-three/fiber";
import AcornLight from './AcornLight';
import Acorn from './Acorn';

export default function AcornExperience() {
  return (
    <div className=' size-full'>
      <Canvas position={{ x: 0, y: 0, z: 5 }} fov={45}>
        <Acorn />
        <AcornLight />
      </Canvas>
    </div>
  );
}
