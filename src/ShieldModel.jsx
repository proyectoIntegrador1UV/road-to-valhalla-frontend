import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function ShieldModel() {

  const gltf = useGLTF('/static/models/viking_shield.glb');

  return (
    <>
      <mesh receiveShadow position={[20, 5, 5]} rotation-x={-Math.PI * 0.5}>
        {/* <planeGeometry args={[8, 8]} /> */}
        <boxGeometry args={[8, 8]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[20, 10, 5]} receiveShadow castShadow onReady={(mesh) => {
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        mesh.scale.set(0.1, 0.1, 0.1); // Cambia el tamaño del modelo aquí
      }}>
        <primitive object={gltf.scene} />
      </mesh>
    </>
  );
}
