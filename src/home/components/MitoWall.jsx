import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MitoWall(props) {
  const { nodes, materials } = useGLTF("/static/models/Escenario_mitologico.glb");
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
        position={[139.621, -1.773, 1.461]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Wep_Hammer_01.geometry}
        material={materials["PolyVikings_Material_01.037"]}
        position={[140.784, 1.325, 1.523]}
        rotation={[-1.588, 0.889, 1.532]}
        scale={0.048}
      />
    </group>
  );
}

useGLTF.preload("/static/models/Escenario_mitologico.glb");