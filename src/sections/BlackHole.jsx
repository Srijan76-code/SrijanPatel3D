// import React, { useState } from 'react'
// import { Canvas } from '@react-three/fiber'
// import AtomModel from '../components/Electron'

// import { OrbitControls } from '@react-three/drei'
// import Blackhole from '../components/Blackhole'

// const Hero2 = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   const handleMouseMove = (event) => {
//     // Convert mouse coordinates to normalized device coordinates (-1 to +1)
//     setMousePosition({
//       x: (event.clientX / window.innerWidth) * 2 - 1,
//       y: -(event.clientY / window.innerHeight) * 2 + 1
//     })
//   }

//   return (
//     <div className="w-full h-screen snap-start " id='home' onMouseMove={handleMouseMove}>
//       <Canvas>
//         <Blackhole mousePosition={mousePosition} />
//         {/* <BlackHole mousePosition={mousePosition} /> */}
//         <OrbitControls enableZoom={true} />
//       </Canvas>
     
//     </div>
//   )
// }

// export default Hero2
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense } from "react";
import Blackhole from "../components/Blackhole";


export default function BlackHole() {
  return (
    <Canvas camera={{ position: [0, 5, 15], fov: 50 }}>
      <Suspense fallback={null}>
        {/* 🌟 Add HDRI for realistic lighting */}
        <Environment preset="night" background />

        {/* 💡 Proper Lighting Setup */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        {/* 🌀 Black Hole Model */}
        <Blackhole />

        {/* ✨ Post-processing effects (Bloom for Glow) */}
        <EffectComposer>
          <Bloom intensity={2} luminanceThreshold={0.15} luminanceSmoothing={0.9} />
        </EffectComposer>

        {/* 🎥 Camera Controls */}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}