import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

export default function BlackHoleScene() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      {/* Lights for better visibility */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Load 3D Model with Suspense for smooth loading */}
      <Suspense fallback={null}>
        <BlackHoleModel />
      </Suspense>

      {/* Allow camera movement */}
      <OrbitControls />
    </Canvas>
  );
}

// ✅ Load GLB Model
function BlackHoleModel() {
  const { scene } = useGLTF("/models/blackhole.glb"); // Load from public folder
  return <primitive object={scene} scale={1} />;
}