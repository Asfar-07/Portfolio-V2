import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";
import * as THREE from "three";

const PARTICLE_COUNT = 18;
const FLOAT_DURATION = 10;  // seconds particle floats away
const PAUSE_DURATION = 2;   // seconds particle is hidden before returning
const CYCLE = FLOAT_DURATION + PAUSE_DURATION;

const TILE_SIZES = [0.07, 0.09, 0.11, 0.06];
const BOTTOM_ZONE_UV = 0.15; // sample from visual bottom 15% of image

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}



function makeUvToWorld(worldWidth, worldHeight) {
  return function uvToWorld(uvX, uvY, tileSize) {
    const cx = uvX + tileSize / 2;
    const cy = uvY + tileSize / 2;
    return {
      x: (cx - 0.5) * worldWidth,
      y: (cy - 0.5) * worldHeight,
    };
  };
}

function Scene({ imageSrc }) {
  const texture = useLoader(TextureLoader, imageSrc);
  const { size, camera } = useThree();

  // Compute exact world dimensions from camera + canvas
  const { worldWidth, worldHeight } = useMemo(() => {
    const zoom = camera.zoom || 140;
    return {
      worldWidth:  size.width  / zoom,
      worldHeight: size.height / zoom,
    };
  }, [size, camera]);

  const uvToWorld = useMemo(
    () => makeUvToWorld(worldWidth, worldHeight),
    [worldWidth, worldHeight]
  );

  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const tileSize = TILE_SIZES[Math.floor(Math.random() * TILE_SIZES.length)];
      const uvX = randomBetween(0.05, 0.95 - tileSize);
      const uvY = randomBetween(0, Math.max(0.001, BOTTOM_ZONE_UV - tileSize));

      // Exact world origin = where this UV tile sits on the image plane
      const origin = uvToWorld(uvX, uvY, tileSize);

      // Float target: drift upward + random horizontal from origin
      const floatTarget = {
        x: origin.x + randomBetween(-0.3, 0.3),
        y: origin.y + randomBetween(0.25, 0.7),
      };

      return {
        id: i,
        tileUvX: uvX,
        tileUvY: uvY,
        tileSize,
        origin,
        floatTarget,
        rotSpeed: randomBetween(-1.5, 1.5),
        worldSize: randomBetween(0.04, 0.09),
        startOffset: randomBetween(0, CYCLE),
      };
    });
  }, [uvToWorld]);

  return (
    <>
      {/* Full image plane — fills the entire canvas */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[worldWidth, worldHeight]} />
        <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
      </mesh>

      {particles.map((data) => (
        <ImageTile key={data.id} data={data} texture={texture} />
      ))}
    </>
  );
}

function ImageTile({ data, texture }) {
  const meshRef = useRef();
  const rotAccRef = useRef(0);

  const mat = useMemo(() => {
    const cloned = texture.clone();
    cloned.needsUpdate = true;
    cloned.wrapS = RepeatWrapping;
    cloned.wrapT = RepeatWrapping;
    cloned.repeat.set(data.tileSize, data.tileSize);
    cloned.offset.set(data.tileUvX, data.tileUvY);
    return new THREE.MeshBasicMaterial({
      map: cloned,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
  }, [texture, data]);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const raw = (clock.elapsedTime + data.startOffset) % CYCLE;

    if (raw >= FLOAT_DURATION) {
      mat.opacity = 0;
      mesh.position.set(data.origin.x, data.origin.y, 0.05);
      rotAccRef.current = 0;
      mesh.rotation.z = 0;
      return;
    }

    const t = raw / FLOAT_DURATION; // 0 → 1

    let opacity;
    if (t < 0.08) {
      opacity = easeOutCubic(t / 0.08);
    } else if (t > 0.90) {
      opacity = 1 - easeInOutCubic((t - 0.90) / 0.10);
    } else {
      opacity = 1;
    }

    const progress = easeInOutCubic(t);
    mesh.position.x = data.origin.x + (data.floatTarget.x - data.origin.x) * progress;
    mesh.position.y = data.origin.y + (data.floatTarget.y - data.origin.y) * progress;
    mesh.position.z = 0.05;

    const rotDampen = t > 0.85 ? 1 - (t - 0.85) / 0.15 : 1;
    rotAccRef.current += data.rotSpeed * 0.016 * rotDampen;
    mesh.rotation.z = rotAccRef.current;

    mat.opacity = opacity;
  });

  return (
    <mesh
      ref={meshRef}
      material={mat}
      position={[data.origin.x, data.origin.y, 0.05]}
    >
      <planeGeometry args={[data.worldSize, data.worldSize]} />
    </mesh>
  );
}


export default function AstronautImageTiles({
  src = "/astronaut.png",
  width = 360,
  height = 400,
}) {
  return (
    <div style={{ width, height }}>
      <Canvas
        orthographic
        camera={{ zoom: 140, position: [0, 0, 10], near: 0.1, far: 100 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene imageSrc={src} />
      </Canvas>
    </div>
  );
}

