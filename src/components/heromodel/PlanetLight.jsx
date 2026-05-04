"use client"
import React from 'react'
import * as THREE from 'three'

export default function PlaneLight() {
  return (
    <>
      <ambientLight intensity={1} color="#8B2FFF"/>
      <directionalLight position={[5,5,5]} intensity={10} color="#8B2FFF"/>
       <directionalLight position={[5,-2,-5]} intensity={1} color="#8B2FFF"/>
      <spotLight position={[6,5,5]} intensity={1} penumbra={.2} angle={.11} color="#8B2FFF" />
      <primitive object={new THREE.RectAreaLight("#8B2FFF")} />
    </>
  )
}