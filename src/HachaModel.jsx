import React, { useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import Details from './Details';
import Shelf from './shelf';
import FigureLabel from './Label';

export default function HachaModel() {

    const gltf = useGLTF('/static/models/Hacha.glb');
    const [isDetail, setIsDetail] = useState(false);
    const hachaRef = useRef();
    const labelRef = useRef();

    const handleOpen = () => {
        setIsDetail(true);
    };

    const handleClose = () => {
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
                                  />
            ) : (
                <>
                   <group>
                        <Shelf handleOpen={handleOpen} position={[10,5,5]}/>
                        <mesh
                            position={[10, 8, 5]}
                            onClick={handleOpen}
                            receiveShadow
                            castShadow
                            onReady={(mesh) => {
                                mesh.receiveShadow = true;
                                mesh.castShadow = true;
                            }}
                        >
                            <primitive object={gltf.scene} />
                        </mesh>
                        <FigureLabel textLabel={'Hacha'} occlude={(hachaRef, labelRef)} position={[9,12,5]}/>
                   </group>
                    
                </>
            )}
        </>
    );
}
