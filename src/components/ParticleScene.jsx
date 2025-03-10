import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";

// Load texture only once
const texture = new THREE.TextureLoader().load("/assets/particle.png");

const CustomShaderMaterial = new THREE.RawShaderMaterial({
  uniforms: {
    time: { value: 0 },
    myTexture: { value: texture },
  },
  vertexShader: `#version 300 es
    precision highp float;

    in vec3 position;
    in vec2 uv;

    uniform mat4 projectionMatrix;
    uniform mat4 modelViewMatrix;
    uniform float time;

    out vec2 vUv;

    void main() {
      vUv = uv;
      vec3 animatedPosition = position;

      // Small movement animation
      animatedPosition.y += sin(position.x * 2.0 + time * 3.0) * 0.1;
      animatedPosition.z += cos(position.y * 2.0 + time * 2.0) * 0.05;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(animatedPosition, 1.0);
    }
  `,
  fragmentShader: `#version 300 es
    precision highp float;

    uniform sampler2D myTexture;
    in vec2 vUv;
    out vec4 fragColor;

    void main() {
      fragColor = texture(myTexture, vUv); // Ensure proper function usage
    }
  `,
});

const Particles = () => {
  const ref = useRef();

  // Generate particles only once
  const positions = useMemo(() => {
    const count = 1000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <primitive attach="material" object={CustomShaderMaterial} />
    </points>
  );
};

// Scene Component
export default function ParticleScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ background: "black" }}>
      <Particles />
    </Canvas>
  );
}