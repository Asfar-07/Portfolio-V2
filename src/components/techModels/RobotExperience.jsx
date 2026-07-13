import React from 'react'
import { Canvas } from "@react-three/fiber";
import Robot from './Robot';
import RobotLight from './RobotLight';


export default function RobotExperience({groupRobot, setRobotRef}) {
 
  return (
    <div className="size-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <group ref={groupRobot} scale={[1.05, 1.2, 1]}>
          <Robot setRobotRef={setRobotRef}/>
        </group>
        <RobotLight />
      </Canvas>
    </div>
  );
}