import React, { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import hachaImage from './assets/images/hachaImage.png';
import Details from './Details';


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
                <Details
                    handleClose={handleClose}
                    title={'Hacha Vikinga'}
                    description={'El hacha vikinga es un arma utilizada por los guerreros vikingos durante la era vikinga. '+
                    'Conocida por su diseño distintivo y su funcionalidad versátil, el hacha vikinga se'+
                    'caracteriza por su cabeza de doble filo y su mango largo, lo que le permite ser utilizada'+
                    'tanto para cortar como para golpear. Fue un arma importante en el arsenal vikingo y se'+
                    'utilizaba tanto en batallas como en situaciones cotidianas.'}
                    url_img={hachaImage}                />
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
