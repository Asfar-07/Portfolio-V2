'use client';
 
import { useEffect, useRef } from 'react';
import {  useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Football from './Football'
 
const BALL_RADIUS = 1.3;        // approx. radius of the GLTF model after its built-in 0.02 scale
const FRICTION = 0.994;         // slow drift decay after a kick
const MAX_SPEED = 0.5;
const MIN_SPEED = 0.012;
const FLOAT_ACCEL = 0.00035;    // small continuous "zero-g" nudge so it never fully settles
const BASE_ROTATION_SPEED = 0.006; // slow idle spin (radians/frame)
const KICK_POWER = 0.34;
const KICK_SPIN = 0.16;

export default function FootballExperience() {
    const meshRef = useRef();
  const { camera, size } = useThree();

  // Actual bounding radius of the loaded model, measured on first frame —
  // replaces the hardcoded BALL_RADIUS guess so bounce edges are pixel-accurate.
  const radiusRef = useRef(BALL_RADIUS);

  // Preload the kick sound once so playback on click is instant (no load delay)
  const kickAudioRef = useRef(null);
  useEffect(() => {
    kickAudioRef.current = new Audio('/sounds/kick.mp3');
    kickAudioRef.current.volume = 0.6;
  }, []);
 
  // Physics state lives in a ref so updates don't trigger React re-renders.
  const state = useRef({
    px: 0,
    py: 0,
    vx: 0,
    vy: 0,
    rotationSpeed: BASE_ROTATION_SPEED,
    initialized: false,
  });
 
  const getBounds = () => {
    const vFOV = (camera.fov * Math.PI) / 180;
    const distance = camera.position.z;
    const height = 2 * Math.tan(vFOV / 2) * distance;
    const width = height * (size.width / size.height);
    return { halfW: width / 2, halfH: height / 2 };
  };
 
  useFrame(() => {
    const s = state.current;
    const bounds = getBounds();
 
    if (!s.initialized) {
      // Measure the model's real size now that it's mounted in the scene
      if (meshRef.current) {
        meshRef.current.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(meshRef.current);
        const boxSize = new THREE.Vector3();
        box.getSize(boxSize);
        const measured = Math.max(boxSize.x, boxSize.y, boxSize.z) / 2;
        if (measured > 0) radiusRef.current = measured;
      }

      // Random starting position on first frame (canvas size is known by then)
      s.px = (Math.random() - 0.5) * 2 * (bounds.halfW - radiusRef.current) * 0.6;
      s.py = (Math.random() - 0.5) * 2 * (bounds.halfH - radiusRef.current) * 0.6;
      s.vx = (Math.random() - 0.5) * 0.06;
      s.vy = (Math.random() - 0.5) * 0.06;
      s.initialized = true;
    }
 
    s.px += s.vx;
    s.py += s.vy;
 
    // bounce off the visible edges
    const maxX = bounds.halfW - radiusRef.current;
    const maxY = bounds.halfH - radiusRef.current;
    if (s.px > maxX) { s.px = maxX; s.vx = -s.vx; }
    if (s.px < -maxX) { s.px = -maxX; s.vx = -s.vx; }
    if (s.py > maxY) { s.py = maxY; s.vy = -s.vy; }
    if (s.py < -maxY) { s.py = -maxY; s.vy = -s.vy; }
 
    // friction + tiny continuous drift so it keeps gently floating
    s.vx *= FRICTION;
    s.vy *= FRICTION;
    s.vx += (Math.random() - 0.5) * FLOAT_ACCEL;
    s.vy += (Math.random() - 0.5) * FLOAT_ACCEL;
 
    const speed = Math.hypot(s.vx, s.vy);
    if (speed > MAX_SPEED) {
      const sc = MAX_SPEED / speed;
      s.vx *= sc; s.vy *= sc;
    } else if (speed < MIN_SPEED && speed > 0) {
      const sc = MIN_SPEED / speed;
      s.vx *= sc; s.vy *= sc;
    }
 
    if (meshRef.current) {
      meshRef.current.position.set(s.px, s.py, 0);
 
      // roll around an axis perpendicular to the motion, like a kicked ball
      const curSpeed = Math.hypot(s.vx, s.vy);
      if (curSpeed > 1e-6) {
        const axis = new THREE.Vector3(-s.vy, s.vx, 0).normalize();
        meshRef.current.rotateOnWorldAxis(axis, s.rotationSpeed);
      } else {
        meshRef.current.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), s.rotationSpeed);
      }
    }
 
    // spin speed decays back down to the slow idle spin after a kick
    const targetSign = s.rotationSpeed >= 0 ? 1 : -1;
    s.rotationSpeed =
      targetSign * BASE_ROTATION_SPEED +
      (s.rotationSpeed - targetSign * BASE_ROTATION_SPEED) * 0.985;
  });
 
  const handleClick = (e) => {
    e.stopPropagation(); // only the ball itself should respond to clicks
    const s = state.current;
    const hit = e.point; // r3f gives us the world-space intersection point directly
 
    let dx = s.px - hit.x;
    let dy = s.py - hit.y;
    let dist = Math.hypot(dx, dy);
    if (dist < 1e-4) {
      const angle = Math.random() * Math.PI * 2;
      dx = Math.cos(angle);
      dy = Math.sin(angle);
      dist = 1;
    }
    dx /= dist;
    dy /= dist;
 
    s.vx = dx * KICK_POWER;
    s.vy = dy * KICK_POWER;
    s.rotationSpeed = KICK_SPIN * (dx >= 0 ? 1 : -1);

    // play the kick sound, restarting it if it's already mid-playback
    if (kickAudioRef.current) {
      kickAudioRef.current.currentTime = 0;
      kickAudioRef.current.play().catch(() => {
        // Autoplay can be blocked in rare cases (e.g. muted tab); safe to ignore
      });
    }
 
    // quick squash/stretch pop for feedback
    if (meshRef.current) {
      const start = performance.now();
      const pop = () => {
        if (!meshRef.current) return;
        const t = (performance.now() - start) / 180;
        if (t >= 1) {
          meshRef.current.scale.set(1, 1, 1);
          return;
        }
        const scl = 1 + 0.18 * Math.sin(Math.min(t, 1) * Math.PI);
        meshRef.current.scale.set(scl, scl, scl);
        requestAnimationFrame(pop);
      };
      pop();
    }
  };
 
  return (
    <group ref={meshRef} onClick={handleClick}>
      <Football />
    </group>
  )
}