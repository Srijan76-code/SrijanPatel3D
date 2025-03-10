import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const ParticleCloud = () => {
  const pointsRef = useRef();

  const particleCount = 5000; // Number of particles
  const centerRadius = 1.5; // Radius of the circular loop
  const speed = 0.05; // Speed of the circular motion

  // Generate initial particle positions
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Random positions within a small sphere
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * centerRadius;
      positions[i] = Math.cos(angle) * radius;
      positions[i + 1] = Math.sin(angle) * radius;
      positions[i + 2] = (Math.random() - 0.5) * centerRadius * 0.5; // Slight variation in Z
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position.array;
    const time = clock.getElapsedTime();

    for (let i = 0; i < positions.length; i += 3) {
      let x = positions[i], y = positions[i + 1], z = positions[i + 2];

      // Calculate the current angle and radius
      const angle = Math.atan2(y, x) + speed; // Circular motion
      const radius = Math.sqrt(x * x + y * y);

      // Update x and y positions based on circular motion
      positions[i] = Math.cos(angle) * radius;
      positions[i + 1] = Math.sin(angle) * radius;

      // Add slight randomness to Z for a cloudy effect
      positions[i + 2] += (Math.sin(time + i) * 0.01 - 0.005); // Subtle Z variation
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={particles} frustumCulled={false}>
      <PointMaterial
        size={0.1}
        sizeAttenuation
        color="white"
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </Points>
  );
};

export default function ParticleCloudScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      onCreated={({ gl }) => {
        gl.setClearColor("#000000"); // Set background to black
      }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <ParticleCloud />
    </Canvas>
  );
}