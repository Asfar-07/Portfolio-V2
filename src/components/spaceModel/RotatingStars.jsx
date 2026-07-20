import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function RotatingStars() {
  const starsRef = useRef();

  useFrame((_, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.01; // slow drift
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={30}
      depth={50}
      count={1600}
      factor={4}
      saturation={0}
      fade
      speed={0}
    />
  );
}