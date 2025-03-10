import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

function Scene() {
  const { scene } = useGLTF("/newscene/scene_modified.gltf"); // Update with correct path
  const texture = useTexture("/newscene/black_hole_light3.png"); // Update with correct texture path
  
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture;
    }
  });

  return <primitive object={scene} scale={1.5} />;
}

export default function GltfViewer() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
      <Scene />
      <OrbitControls />
    </Canvas>
  );
}


