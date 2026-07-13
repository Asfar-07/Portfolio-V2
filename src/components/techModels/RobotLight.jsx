"use client"
import React from 'react'
import * as THREE from 'three'

export default function RobotLight() {
  return (
    <>
      <ambientLight intensity={1} color="#ffffff"/>
      <directionalLight position={[5,5,5]} intensity={5} color="white"/>
       {/* <directionalLight position={[5,-2,-5]} intensity={5} color="white"/>
      <spotLight position={[6,5,5]} intensity={100} penumbra={.2} angle={.11} color="white" />
      <primitive object={new THREE.RectAreaLight("#A259FF")} /> */}
    </>
  )
}