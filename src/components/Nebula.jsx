import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { shaderMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import glsl from "babel-plugin-glsl/macro";

// Custom Shader for the Nebula
const NebulaMaterial = shaderMaterial(
  { time: 0 },
  glsl`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  glsl`
    precision mediump float;
    uniform float time;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv - 0.5;
      float dist = length(uv);
      float noise = sin(time + dist * 10.0) * 0.3;
      vec3 color = mix(vec3(0.0, 0.0, 0.0), vec3(0.1, 0.2, 0.6), dist + noise);
      gl_FragColor = vec4(color, 1.0 - dist);
    }
  `
);

// R3F Component
const Nebula = () => {
  const materialRef = useRef();
  useFrame(({ clock }) => (materialRef.current.uniforms.time.value = clock.elapsedTime));

  return (
    <mesh scale={5}>
      <planeGeometry args={[5, 5, 32, 32]} />
      <nebulaMaterial ref={materialRef} />
    </mesh>
  );
};

// Canvas Wrapper
export default function DarkNebula() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <ambientLight intensity={0.5} />
      <Nebula />
    </Canvas>
  );
}