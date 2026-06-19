import React from 'react'
import { Canvas } from "@react-three/fiber";
import AcornLight from './AcornLight';
import Acorn from './Acorn';

export default function AcornExperience() {
  return (
    <div className='size-full'>
      <Canvas
        frameloop="demand"
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
      >
        <Acorn />
        <AcornLight />
      </Canvas>
    </div>
  );
}