import React, { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import HachaDetail from './details/HachaDetail';


export default function HachaModel() {
    const gltf = useGLTF('/static/models/Hacha.glb');
    const [isDetail, setIsDetail] = useState(false);

    const handleOpen = () => {
        console.log('Modelo Hacha clicado');
        setIsDetail(true);
    };

    const handleClose = () => {
        console.log('cerrar')
        setIsDetail(false);
    };

    return (
        <>
            {isDetail ? (
                <HachaDetail isOpen={handleOpen} onClose={handleClose} handleClose={handleClose} />
            ) : (
                <>
                    <mesh
                        receiveShadow
                        position={[10, 5, 5]}
                        rotation-x={-Math.PI * 0.5}
                        onClick={handleOpen}
                    >
                        <boxGeometry args={[8, 8]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    <mesh
                        position={[10, 8, 5]}
                        receiveShadow
                        castShadow
                        onReady={(mesh) => {
                            mesh.receiveShadow = true;
                            mesh.castShadow = true;
                        }}
                    >
                        <primitive object={gltf.scene} />
                    </mesh>
                </>
            )}
        </>
    );
}
