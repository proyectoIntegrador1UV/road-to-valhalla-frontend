import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Details from './Details';
import Shelf from './Shelf';
import FigureLabel from './Label';
import shipImage from './../../assets/images/shipImage.png';

export function SceneMitology(props) {
  const { nodes, materials } = useGLTF("/static/models/scene.glb");

  const [isDetail, setIsDetail] = useState(false);
  //Manejador de Evento de Detalle Abierto
  const handleOpen = () => {
    setIsDetail(true);
  };

  //Manejador de Evento de Detalle Cerrado
  const handleClose = () => {
    setIsDetail(false);
  };

  
  //Manejo de Brillo Superpuesto al Objeto Pedestal
  const handleOver = () => {
    console.log("ENTRAR")
  }
  const handleLeave = () => {
    console.log("SALIR")
  }
  
  return (
    <>
      {isDetail ? (
        <Details
          handleClose={handleClose}
          title={'Title'}
          description={' El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.'}
          url_img={shipImage} />
      ) : (
      <>
        <group {...props} dispose={null}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.08} position={[800,-250,-1000]}>
          <Shelf handleOpen={handleOpen} position={[40,5,5]}/>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124.geometry}
              material={materials["PolyVikings_Material_01.073"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_1.geometry}
              material={materials["PolyVikings_Material_01.256"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_2.geometry}
              material={materials["PolyVikings_Material_01.257"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_3.geometry}
              material={materials["PolyVikings_Material_01.264"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_4.geometry}
              material={materials["PolyVikings_Material_01.265"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_5.geometry}
              material={materials["PolyVikings_Material_01.273"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_6.geometry}
              material={materials["PolyVikings_Material_01.250"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_7.geometry}
              material={materials["PolyVikings_Material_01.088"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_8.geometry}
              material={materials["PolyVikings_Material_01.251"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_9.geometry}
              material={materials["PolyVikings_Material_01.249"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_10.geometry}
              material={materials["PolyVikings_Material_01.083"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_11.geometry}
              material={materials["PolyVikings_Material_01.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_12.geometry}
              material={materials["PolyVikings_Material_01.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_13.geometry}
              material={materials["PolyVikings_Material_01.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_14.geometry}
              material={materials["PolyVikings_Material_01.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_15.geometry}
              material={materials["PolyVikings_Material_01.006"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_16.geometry}
              material={materials["PolyVikings_Material_01.008"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_17.geometry}
              material={materials["PolyVikings_Material_01.009"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_18.geometry}
              material={materials["PolyVikings_Material_01.010"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_19.geometry}
              material={materials["PolyVikings_Material_01.013"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_20.geometry}
              material={materials["PolyVikings_Material_01.014"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_21.geometry}
              material={materials["PolyVikings_Material_01.015"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_22.geometry}
              material={materials["PolyVikings_Material_01.017"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_23.geometry}
              material={materials["PolyVikings_Material_01.018"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_24.geometry}
              material={materials["PolyVikings_Material_01.019"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_25.geometry}
              material={materials["PolyVikings_Material_01.021"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_26.geometry}
              material={materials["PolyVikings_Material_01.022"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_27.geometry}
              material={materials["PolyVikings_Material_01.025"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_28.geometry}
              material={materials["PolyVikings_Material_01.142"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_29.geometry}
              material={materials["PolyVikings_Material_01.170"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_30.geometry}
              material={materials["PolyVikings_Material_01.161"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_31.geometry}
              material={materials["PolyVikings_Material_01.098"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_32.geometry}
              material={materials["PolyVikings_Material_01.091"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_33.geometry}
              material={materials["PolyVikings_Material_01.182"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_34.geometry}
              material={materials["PolyVikings_Material_01.138"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_35.geometry}
              material={materials["PolyVikings_Material_01.026"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_36.geometry}
              material={materials["PolyVikings_Material_01.046"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_37.geometry}
              material={materials["PolyVikings_Material_01.040"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_38.geometry}
              material={materials["PolyVikings_Material_01.236"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_39.geometry}
              material={materials["PolyVikings_Material_01.087"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_40.geometry}
              material={materials["PolyVikings_Material_01.235"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_41.geometry}
              material={materials["PolyVikings_Material_01.234"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_42.geometry}
              material={materials["PolyVikings_Material_01.162"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_43.geometry}
              material={materials["PolyVikings_Material_01.029"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_44.geometry}
              material={materials["PolyVikings_Material_01.071"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_45.geometry}
              material={materials["PolyVikings_Material_01.144"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_46.geometry}
              material={materials["PolyVikings_Material_01.072"]}
            />
            {/*Cuerno*/}
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_47.geometry}
              material={materials["PolyVikings_Material_01.074"]}
              onClick={handleOpen}
              onPointerEnter={handleOver}
              onReady={(mesh) => {
                mesh.receiveShadow = true;
                mesh.castShadow = true;
              }}
            />
            {/*Martillo*/}
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_48.geometry}
              material={materials["PolyVikings_Material_01.075"]}
              onClick={handleOpen}
              onReady={(mesh) => {
                mesh.receiveShadow = true;
                mesh.castShadow = true;
              }}
            />
            {/*Caliz*/}
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_49.geometry}
              material={materials["PolyVikings_Material_01.140"]}
              onClick={handleOpen}
              onReady={(mesh) => {
                mesh.receiveShadow = true;
                mesh.castShadow = true;
              }}
            />
            {/*Totem*/}
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_50.geometry}
              material={materials["PolyVikings_Material_01.076"]}
              onClick={handleOpen}
              onReady={(mesh) => {
                mesh.receiveShadow = true;
                mesh.castShadow = true;
              }}
            />
            {/*Barco*/}
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scene124_51.geometry}
              material={materials["PolyVikings_Material_01.078"]}
              onClick={handleOpen}
              onReady={(mesh) => {
                mesh.receiveShadow = true;
                mesh.castShadow = true;
              }}
            />
          </group>
        </group>
      </>
      )}
    </>
  );
}

useGLTF.preload("/static/models/scene.glb");
