"use client"
import React from 'react'

export default function PlaneLight() {
  return (
    <>
      <ambientLight intensity={3} color="#ffffff" position={[10,0,-10]}/>
      <directionalLight position={[0,5,5]} intensity={5} color="#3F00FF"/>
      <directionalLight position={[5,-5,5]} intensity={5} color="#3F00FF"/>
      {/* <primitive object={new THREE.RectAreaLight("#3F00FF")} /> */}
    </>
  )
}