"use client"
import React,{useEffect} from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Drone(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/drone.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, names } = useAnimations(animations, group)
  useEffect(() => {
    // Log all available animation names
    console.log('Available animations:', names)

    // Play the first animation
    actions[names[0]]?.play()
  }, [actions, names])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="octanian_droneFBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Octanian_drone_LD" scale={0.394}>
                  <group name="Octanian_Drone_Model_LD">
                    <group name="Octanian_Drone">
                      <group name="Object_7">
                        <primitive object={nodes._rootJoint} />
                        <group name="Object_9" scale={0.394} />
                        <group name="Octanian_Drone_Mesh" />
                        <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.octanian_drone} skeleton={nodes.Object_10.skeleton} >
                          {/* <meshStandardMaterial color="pink" /> */}
                        </skinnedMesh>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/drone.glb')
