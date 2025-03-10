import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";

const Particles = () => {
  const points = useRef();

  // Generate particle positions
  const particles = useMemo(() => {
    const count = 5000; // Higher particle count for density
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20; // Spread over a larger area
    }
    return positions;
  }, []);

  // Optimized glowing material
  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: new THREE.Color("#ffffff"),
        size: 0.08, // Bigger size for glow effect
        transparent: true,
        opacity: 0.85,
        depthWrite: false, // Prevents particles from overlapping badly
        blending: THREE.AdditiveBlending, // Adds glow effect
      }),
    []
  );

  // Particle animation
  useFrame(({ clock }) => {
    if (points.current) {
      const time = clock.getElapsedTime();
      points.current.rotation.y += 0.01; // Faster rotation
      points.current.position.x = Math.sin(time * 1.5) * 0.5; // Slight wave effect
      points.current.position.y = Math.cos(time * 1.2) * 0.3;
      material.color.setHSL((time * 0.2) % 1, 0.9, 0.8); // Dynamic color shift
    }
  });

  return (
    <points ref={points} material={material}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          count={particles.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
    </points>
  );
};

export default function ParticleScene1() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10] }}
      style={{ background: "black" }}
    >
      <Particles />
    </Canvas>
  );
}