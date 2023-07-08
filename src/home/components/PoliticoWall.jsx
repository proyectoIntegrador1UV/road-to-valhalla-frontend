import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PoliticoWall(props) {
  const { nodes, materials } = useGLTF("/static/models/Escenario_politico.glb");
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
        position={[139.621, -0.623, 1.461]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Wep_Horn_01.geometry}
        material={materials["PolyVikings_Material_01.036"]}
        position={[140.877, 1.595, 1.54]}
        rotation={[1.773, 1.305, 1.396]}
        scale={0.029}
      />
    </group>
  );
}

useGLTF.preload("/static/models/Escenario_politico.glb");