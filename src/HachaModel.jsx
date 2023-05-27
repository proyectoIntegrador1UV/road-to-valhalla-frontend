import React from 'react';
import { useGLTF  } from '@react-three/drei';

export default function HachaModel() {

    const gltf = useGLTF('/static/models/Hacha.glb');

    return (
        <>
            <mesh receiveShadow position={[10, 5, 5]} rotation-x={- Math.PI * 0.5}>
                {/* <planeGeometry args={[8, 8]} /> */}
                <boxGeometry args={[8, 8]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh position={[10, 8, 5]} receiveShadow={true} castShadow={true} onReady={(mesh) => {
                mesh.receiveShadow = true;
                mesh.castShadow = true;
            }}>
                <primitive object={gltf.scene} />
            </mesh>
        </>
    );
}