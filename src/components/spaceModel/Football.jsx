import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Football({props, footballRef}) {
  const { nodes, materials } = useGLTF('/models/football.glb')
  return (
    <group {...props} ref={footballRef} dispose={null} position={[0, 0, 0]} scale={0.02}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-33.119, -33.119, -0.701]}>
          <lineSegments geometry={nodes.Material2.geometry} material={materials.edge_color000255} />
          <mesh geometry={nodes.Material2_1.geometry} material={materials.Color_007} position={[56.86, 54.353, 22.502]} rotation={[-Math.PI / 2, -1.017, Math.PI]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.Material2_2.geometry} material={materials.Color_000} position={[33.119, 46.243, 1.268]} rotation={[0, -1.206, -Math.PI]} />
          <mesh geometry={nodes.Material2_3.geometry} material={materials.Color_000} position={[54.353, 46.243, 9.379]} rotation={[Math.PI, -1.206, 0]} />
          <mesh geometry={nodes.Material2_4.geometry} material={materials.Color_007} position={[11.885, 22.502, 56.86]} rotation={[Math.PI, -0.554, Math.PI]} />
          <mesh geometry={nodes.Material2_5.geometry} material={materials.Color_000} position={[46.243, 64.97, 33.119]} rotation={[0.365, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Material2_6.geometry} material={materials.Color_000} position={[46.243, 56.86, 11.885]} rotation={[-0.365, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Material2_7.geometry} material={materials.Color_007} position={[9.379, 54.353, 22.502]} rotation={[-Math.PI / 2, 1.017, Math.PI]} />
          <mesh geometry={nodes.Material2_8.geometry} material={materials.Color_000} position={[1.268, 33.119, 46.243]} rotation={[Math.PI / 2, 0.365, Math.PI]} />
          <mesh geometry={nodes.Material2_9.geometry} material={materials.Color_000} position={[4.07, 15.166, 37.653]} rotation={[-0.707, 0.11, -2.191]} />
          <mesh geometry={nodes.Material2_10.geometry} material={materials.Color_000} position={[9.379, 54.353, 46.243]} rotation={[Math.PI / 2, -0.365, Math.PI]} />
          <mesh geometry={nodes.Material2_11.geometry} material={materials.Color_007} position={[54.353, 22.502, 9.379]} rotation={[0, 0.554, 0]} />
          <mesh geometry={nodes.Material2_12.geometry} material={materials.Color_000} position={[64.97, 33.119, 19.996]} rotation={[Math.PI / 2, -0.365, 0]} />
          <mesh geometry={nodes.Material2_13.geometry} material={materials.Color_000} position={[46.243, 1.268, 33.119]} rotation={[-2.777, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Material2_14.geometry} material={materials.Color_000} position={[46.243, 9.379, 54.353]} rotation={[2.777, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Material2_15.geometry} material={materials.Color_007} position={[54.353, 22.502, 56.86]} rotation={[Math.PI, 0.554, Math.PI]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.Material2_16.geometry} material={materials.Color_000} position={[56.86, 54.353, 19.996]} rotation={[Math.PI / 2, 0.365, 0]} />
          <mesh geometry={nodes.Material2_17.geometry} material={materials.Color_007} position={[56.86, 11.885, 22.502]} rotation={[Math.PI / 2, -1.017, 0]} />
          <mesh geometry={nodes.Material2_18.geometry} material={materials.Color_000} position={[25.304, 64.196, 45.764]} rotation={[0.707, 0.11, 2.191]} />
          <mesh geometry={nodes.Material2_19.geometry} material={materials.Color_007} position={[9.379, 11.885, 22.502]} rotation={[Math.PI / 2, 1.017, 0]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.Material2_20.geometry} material={materials.Color_000} position={[54.353, 19.996, 56.86]} rotation={[0, -1.206, 0]} />
          <mesh geometry={nodes.Material2_21.geometry} material={materials.Color_007} position={[43.736, 56.86, 54.353]} rotation={[1.017, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Material2_22.geometry} material={materials.Color_007} position={[11.885, 22.502, 9.379]} rotation={[0, -0.554, 0]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.Material2_23.geometry} material={materials.Color_000} position={[62.168, 15.166, 28.585]} rotation={[-2.435, -0.11, 0.951]} />
          <mesh geometry={nodes.Material2_24.geometry} material={materials.Color_000} position={[25.304, 2.043, 20.475]} rotation={[-2.435, 0.11, 2.191]} />
          <mesh geometry={nodes.Material2_25.geometry} material={materials.Color_000} position={[4.07, 51.072, 28.585]} rotation={[2.435, 0.11, -2.191]} />
          <mesh geometry={nodes.Material2_26.geometry} material={materials.Color_007} position={[43.736, 9.379, 11.885]} rotation={[-2.124, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Material2_27.geometry} material={materials.Color_000} position={[40.934, 64.196, 20.475]} rotation={[2.435, -0.11, -0.951]} />
          <mesh geometry={nodes.Material2_28.geometry} material={materials.Color_000} position={[62.168, 51.072, 37.653]} rotation={[0.707, -0.11, 0.951]} />
          <mesh geometry={nodes.Material2_29.geometry} material={materials.Color_007} position={[43.736, 56.86, 11.885]} rotation={[2.124, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.Material2_30.geometry} material={materials.Color_000} position={[33.119, 19.996, 64.97]} rotation={[Math.PI, -1.206, Math.PI]} />
          <mesh geometry={nodes.Material2_31.geometry} material={materials.Color_000} position={[40.934, 2.043, 45.764]} rotation={[-0.707, -0.11, -0.951]} />
          <mesh geometry={nodes.Material2_32.geometry} material={materials.Color_007} position={[43.736, 9.379, 54.353]} rotation={[-1.017, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/football.glb')