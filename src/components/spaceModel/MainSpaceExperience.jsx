import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import RotatingStars from './RotatingStars';
import FootballExperience from './FootballExperience';

export default function MainSpaceExperience() {
  return (
   <Canvas camera={{ position: [0, 0, 10], fov: 55 }}>
        {/* <color attach="background" args={['#05060f']} /> */}
        <ambientLight intensity={1.1} color="#606080" />
        <ambientLight intensity={1} color="#ffffff"/>
        <directionalLight position={[5,5,5]} intensity={5} color="white"/>
        <directionalLight position={[5,-2,-5]} intensity={5} color="white"/>
        <directionalLight position={[5, 8, 10]} intensity={1.2} />
        <directionalLight position={[-6, -4, -5]} intensity={0.4} color="#4466ff" />
        <RotatingStars />
        <Suspense fallback={null}>
          <FootballExperience />
        </Suspense>
    </Canvas>
  )
}
