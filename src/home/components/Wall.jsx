import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Wall(props) {

    const PATH = "/static/textures/door/"
    const { nodes, materials } = useGLTF("/static/models/pared_piedra.glb");
    return (
    <group {...props} dispose={null} scale={150} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("/static/models/pared_piedra.glb");