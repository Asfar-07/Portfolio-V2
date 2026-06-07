"use client"
import React from 'react'
import * as THREE from 'three'

export default function PlaneLight() {
  return (
    <>
      <ambientLight intensity={30} color="#a502ff"/>
      <directionalLight position={[5,5,5]} intensity={5} color="#a502ff"/>
       <directionalLight position={[5,-2,-5]} intensity={5} color="#a502ff"/>
      <spotLight position={[6,5,5]} intensity={5} penumbra={10} angle={.11} color="#a502ff" />
      <primitive object={new THREE.RectAreaLight("#a502ff")} />
    </>
  )
}