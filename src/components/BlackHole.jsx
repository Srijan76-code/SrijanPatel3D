import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Blackhole=(props)=> {
    const { nodes, materials } = useGLTF('/models/black_hole.glb')

    // Optimize geometry and materials
    const meshes = useMemo(() => ([
      { geometry: nodes.black_hole_black_hole_blackoutside_0.geometry, material: materials.black_hole_blackoutside },
      { geometry: nodes.black_hole_black_hole_blackoutside_0_1.geometry, material: materials.black_hole_blackoutside },
      { geometry: nodes.black_hole_black_hole_blackoutside_0_2.geometry, material: materials.black_hole_blackoutside },
      { geometry: nodes.black_hole_black_hole_light3_0.geometry, material: materials.black_hole_light3 },
      { geometry: nodes.black_hole_black_hole_light2_0.geometry, material: materials.black_hole_light2 },
      { geometry: nodes.black_hole_black_hole_light1_0.geometry, material: materials.black_hole_light1 },
      { geometry: nodes.black_hole_black_hole_distortion_0.geometry, material: materials.black_hole_distortion },
      { geometry: nodes.black_hole_black_hole_center_0.geometry, material: materials.black_hole_center },
    ]), [nodes, materials])
  
    const rings = useMemo(() => ([
      { geometry: nodes.black_hole_ring_ring_0.geometry, material: materials.ring },
      { geometry: nodes.black_hole_ring_ring2_0.geometry, material: materials.ring2 },
      { geometry: nodes.black_hole_ring_ring2_0_1.geometry, material: materials.ring2 },
      { geometry: nodes.black_hole_ring_ring2_0_2.geometry, material: materials.ring2 },
      { geometry: nodes.black_hole_ring_ring2_0_3.geometry, material: materials.ring2 },
    ]), [nodes, materials])
  
    return (
      <group {...props} dispose={null}>
        {/* Core Black Hole */}
        <group rotation={[-Math.PI / 2, -0.375, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              {meshes.map(({ geometry, material }, index) => (
                <mesh key={index} castShadow receiveShadow geometry={geometry} material={material} />
              ))}
            </group>
  
            {/* Rings around the Black Hole */}
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              {rings.map(({ geometry, material }, index) => (
                <mesh key={`ring-${index}`} castShadow receiveShadow geometry={geometry} material={material} />
              ))}
            </group>
  
            {/* Planet (Optional) */}
            <mesh
              castShadow receiveShadow
              geometry={nodes.Planet_Planet_0.geometry}
              material={materials.Planet}
              position={[30802.896, 2286.717, 136477.797]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
        </group>
      </group>
    )
  }
  

useGLTF.preload("/models/black_hole.glb");
export default Blackhole