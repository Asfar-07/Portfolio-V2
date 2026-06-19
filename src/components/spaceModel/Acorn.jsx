"use client"
import React, { useRef } from 'react'
import { useGraph, useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Acorn(props) {
  const acornRef = useRef();
  const { scene } = useGLTF('/models/acorn.glb')
  const { invalidate } = useThree()
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone);

  useFrame((state, delta) => {
    acornRef.current.rotation.z -= delta / 2;
    invalidate() 
  });

  return (
    <group {...props} dispose={null} position={[0, 0, 2]}>
      <primitive ref={acornRef} object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.scrats_acorn_prop_mat} skeleton={nodes.Object_8.skeleton} />
    </group>
  )
}

useGLTF.preload('/models/acorn.glb')
