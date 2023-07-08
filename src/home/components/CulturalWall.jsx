import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CulturalWall(props) {
  const { nodes, materials } = useGLTF("/static/models/Escenario_cultural.glb");
  return (
    <group {...props} dispose={null} scale={55}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[139.938, 0, 0]}
        scale={[3.627, 2.718, 1.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hola.geometry}
        material={materials["Material.001"]}
        position={[139.494, -1.773, 1.461]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Wep_Axe_01.geometry}
        material={materials["PolyVikings_Material_01.035"]}
        position={[139.505, 0.707, 1.503]}
        rotation={[Math.PI / 2, 0.733, 1.444]}
        scale={0.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Wep_Shield_08001.geometry}
        material={materials["PolyVikings_Material_01.049"]}
        position={[140.134, 0.517, 1.416]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.031}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Wep_Axe_01001.geometry}
        material={materials["PolyVikings_Material_01.035"]}
        position={[140.835, 0.707, 1.503]}
        rotation={[-1.549, 0.733, 1.412]}
        scale={-0.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Wep_Sword_01.geometry}
        material={materials["PolyVikings_Material_01.054"]}
        position={[140.138, 2.065, 1.536]}
        rotation={[-Math.PI / 2, 0.005, -Math.PI]}
        scale={0.036}
      />
    </group>
  );
}

useGLTF.preload("/static/models/Escenario_cultural.glb");