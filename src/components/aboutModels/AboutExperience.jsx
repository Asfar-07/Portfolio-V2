"use client"
import { Canvas } from '@react-three/fiber'
import { FlyingPlane } from './FlyingPlane'
import PlaneLight from './PlaneLight'
import React from 'react'

export default function aboutExperience() {
  return (
    <Canvas camera={{position:[0,0,15], fov:45}}>
      <PlaneLight />
      <FlyingPlane />
    </Canvas>
  )
}
