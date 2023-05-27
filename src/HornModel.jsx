import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function HornModel() {

  const gltf = useGLTF('/static/models/viking_horn.glb');

  return (
    <>
      <mesh receiveShadow position={[30, 5, 5]} rotation-x={-Math.PI * 0.5}>
        <boxGeometry args={[8, 8]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[30, 8, 5]} receiveShadow castShadow onReady={(mesh) => {
        mesh.receiveShadow = true;
        mesh.castShadow = true;
      }}>
        <primitive object={gltf.scene} scale={[0.1, 0.1, 0.1]} />
      </mesh>
    </>
  );
}
