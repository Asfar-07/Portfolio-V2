"use client";
import React,{useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Planet(props) {

  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/models/purple_planet.glb')
  const { actions, names, mixer } = useAnimations(animations, group)

  useEffect(() => {
      actions[names[0]]?.play()
      mixer.timeScale=.5
  }, [actions, names])

  return (
    <group ref={group} {...props} dispose={null} scale={[2.8,2.5,2.5]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Planet" rotation={[0, 0, Math.PI / 2]}>
              <group name="Clouds_0" rotation={[0, 0, -Math.PI / 2]} scale={1.013}>
                <mesh name="Clouds_0_0" geometry={nodes.Clouds_0_0.geometry} material={materials.Clouds_0} />
              </group>
              <mesh name="Planet_0" geometry={nodes.Planet_0.geometry} material={materials.PurplePlanet} />
            </group>
            <group name="Clouds_1" scale={1.019}>
              <mesh name="Clouds_1_0" geometry={nodes.Clouds_1_0.geometry} material={materials.Clouds_1} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/purple_planet.glb')
