import React, { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import shipImage from './assets/images/shipImage.png';
import Details from './Details';


export default function ShipModel() {

  const gltf = useGLTF('/static/models/stlized_viking_ship.glb');
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
          title={'Ship'}
          description={'Los barcos vikingos eran conocidos por su diseño distintivo y su capacidad para navegar tanto en aguas costeras como en alta mar. Eran embarcaciones ágiles y versátiles que permitían a los vikingos explorar y conquistar nuevas tierras, realizar incursiones en territorios lejanos y establecer rutas comerciales en el norte de Europa, el Atlántico Norte y el Mar Báltico.'}
          url_img={shipImage} />
      ) : (
        <>
          <mesh
            receiveShadow
            onClick={handleOpen}
            position={[40, 5, 5]}
            rotation-x={-Math.PI * 0.5}>
            <boxGeometry args={[8, 8]} />
            <meshStandardMaterial color="white" />
          </mesh>
          <mesh
            position={[40, 7, -2]}
            onClick={handleOpen}
            receiveShadow
            castShadow
            onReady={(mesh) => {
              mesh.receiveShadow = true;
              mesh.castShadow = true;
            }}>
            <primitive object={gltf.scene} scale={[0.01, 0.01, 0.01]} />
          </mesh>
        </>
      )}

    </>
  );
}
