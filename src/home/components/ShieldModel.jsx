import React, { useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import shieldImage from './../../assets/images/shieldImage.png';
import Details from './Details';
import Shelf from './Shelf';
import FigureLabel from './Label';

export default function ShieldModel() {

  const gltf = useGLTF('/static/models/viking_shield.glb');
  const [isDetail, setIsDetail] = useState(false);
  const shieldRef = useRef();
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
          title={'Shield'}
          description={'Los escudos vikingos eran generalmente redondos o ligeramente ovalados y estaban fabricados con madera resistente, como el abeto o el roble. Estaban reforzados con un borde metálico, conocido como umbo, que proporcionaba mayor resistencia y protección. Los escudos también podían tener una cubierta de cuero u otros materiales para ofrecer una mayor durabilidad.'}
          url_img={shieldImage} />
      ) : (
        <>
          <group>
            <Shelf handleOpen={handleOpen} position={[20,5,5]}/>
            <mesh
              position={[20, 10, 5]}
              onClick={handleOpen}
              receiveShadow
              castShadow
              onReady={(mesh) => {
                mesh.receiveShadow = true;
                mesh.castShadow = true;
                mesh.scale.set(0.1, 0.1, 0.1); // Cambia el tamaño del modelo aquí
              }}>
              <primitive object={gltf.scene} />
            </mesh>
            <FigureLabel textLabel={'Escudo'} occlude={(shieldRef, labelRef)} position={[20, 5.5, 10]}/>
          </group>
          
        </>
      )}
    </>
  );
}
