import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function ShipModel() {

  const gltf = useGLTF('/static/models/stlized_viking_ship.glb');

  return (
    <>
      <mesh receiveShadow position={[40, 5, 5]} rotation-x={-Math.PI * 0.5}>
        <boxGeometry args={[8, 8]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[40, 7, -2]} receiveShadow castShadow onReady={(mesh) => {
        mesh.receiveShadow = true;
        mesh.castShadow = true;
      }}>
        <primitive object={gltf.scene} scale={[0.01, 0.01, 0.01]} />
      </mesh>
    </>
  );
}
