import React, { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import hornImage from './assets/images/hornImage.png';
import Details from './Details';

export default function HornModel() {

  const gltf = useGLTF('/static/models/viking_horn.glb');
  const [isDetail, setIsDetail] = useState(false);

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
          title={'Horn'}
          description={'El "horn" se refiere a un instrumento musical de viento hecho de cuerno o metal, que ha sido utilizado en diversas culturas a lo largo de la historia. Los cuernos fueron utilizados originalmente como instrumentos musicales por civilizaciones antiguas, como los vikingos, donde se empleaban cuernos de animales, como el cuerno de buey, para producir sonidos.'}
          url_img={hornImage} />
      ) : (
        <>
          <mesh
            receiveShadow
            position={[30, 5, 5]}
            rotation-x={-Math.PI * 0.5}
            onClick={handleOpen}
            >
            <boxGeometry args={[8, 8]} />
            <meshStandardMaterial color="white" />
          </mesh>
          <mesh 
            position={[30, 8, 5]}
            onClick={handleOpen}
            receiveShadow
            castShadow
            onReady={(mesh) => {
              mesh.receiveShadow = true;
              mesh.castShadow = true;
            }}>
            <primitive object={gltf.scene} scale={[0.1, 0.1, 0.1]} />
          </mesh>
        </>
      )}

    </>
  );
}
