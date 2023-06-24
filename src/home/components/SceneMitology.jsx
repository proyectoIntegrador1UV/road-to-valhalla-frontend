import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Details from './Details';
import Shelf from './Shelf';
import shipImage from './../../assets/images/shipImage.png';
import hornImage from './../../assets/images/hornImage.png';
import martilloImage from './../../assets/images/martillo.jpg';
import calizImage from './../../assets/images/caliz.jpg';
import totemImage from './../../assets/images/totems.jpg';

export function SceneMitology(props) {
  const { nodes, materials } = useGLTF("/static/models/scene.glb");

  const [isDetailCuerno, setIsDetailCuerno] = useState(false);
  const [isDetailMartillo, setIsDetailMartillo] = useState(false);
  const [isDetailCaliz, setIsDetailCaliz] = useState(false);
  const [isDetailTotem, setIsDetailTotem] = useState(false);
  const [isDetailBarco, setIsDetailBarco] = useState(false);
  
  //Manejador de Evento de Detalle Abierto
  const handleOpenCuerno = () => {
    setIsDetailCuerno(true);
  };

  const handleOpenMartillo = () => {
    setIsDetailMartillo(true);
  }

  const handleOpenCaliz = () => {
    setIsDetailCaliz(true);
  }

  const handleOpenTotem = () => {
    setIsDetailTotem(true);
  }

  const handleOpenBarco = () => {
    setIsDetailBarco(true);
  }

  //Manejador de Evento de Detalle Cerrado
  const handleClose = () => {
    setIsDetailCuerno(false);
    setIsDetailBarco(false);
    setIsDetailCaliz(false);
    setIsDetailMartillo(false);
    setIsDetailTotem(false);
  };

  return (
    <>
      {
        isDetailCuerno &&
        <Details
          position={[1850, 0, 0]}
          handleClose={handleClose}
          title={'Cuerno Vikingo'}
          description={'El cuerno vikingo es un símbolo emblemático de la cultura nórdica antigua. A menudo asociado con los vikingos, los cuernos evocan imágenes de valentía, aventura y poder. Si bien se ha popularizado la idea de que los vikingos bebían de cuernos durante festividades y rituales, en realidad, los cuernos vikingos eran más utilizados como recipientes decorativos o como elementos simbólicos en ceremonias.'}
          url_img={hornImage} />
      }
      {
        isDetailBarco &&
        <Details
          position={[1850, 0, 0]}
          handleClose={handleClose}
          title={'Barco Vikingo'}
          description={'Los barcos vikingos, conocidos como drakkars, eran impresionantes y temidos en los mares del norte. Estas embarcaciones robustas y ágiles eran la herramienta principal de los vikingos para explorar, comerciar y conquistar. Con sus proas decoradas con elaboradas cabezas de dragones, los barcos vikingos se deslizaban por el agua con gran velocidad y destreza. Con sus velas cuadradas y remos largos.'}
          url_img={shipImage} />
      }
      {
        isDetailCaliz && 
        <Details
          position={[1850, 0, 0]}
          handleClose={handleClose}
          title={'Caliz Vikingo'}
          description={'El cáliz vikingo es una pieza de arte y religión que refleja la espiritualidad de los antiguos vikingos. Estos cálices, elaborados con materiales como la plata u otros metales preciosos, eran utilizados en ceremonias sagradas y rituales relacionados con la adoración de los dioses nórdicos. Los cálices vikingos se caracterizan por sus diseños intrincados y su elaborada decoración.'}
          url_img={calizImage} />
      }
      {
        isDetailMartillo && 
        <Details
          position={[1850, 0, 0]}
          handleClose={handleClose}
          title={'Martillo Vikingo'}
          description={'El martillo vikingo, conocido como Mjölnir, es uno de los símbolos más reconocidos de la mitología nórdica. Era el arma y amuleto mágico del dios Thor, quien era venerado por los vikingos como el protector de la humanidad y defensor de los dioses. El martillo vikingo era representado como un arma poderosa capaz de lanzar rayos y proteger a su portador de los enemigos y los espíritus malignos.'}
          url_img={martilloImage} />
      }
      {
        isDetailTotem &&
        <Details
          position={[1850, 0, 0]}
          handleClose={handleClose}
          title={'Totem Vikingo'}
          description={'En la mitología nórdica, existían criaturas míticas y animales sagrados que se consideraban protectores y guías espirituales. Por ejemplo, el lobo Fenrir y el dragón Níðhöggr eran criaturas temidas y respetadas en la mitología nórdica. También se cree que los vikingos honraban a los animales, como el cuervo, el lobo, el oso y el águila, que simbolizaban características como la sabiduría, la ferocidad, el coraje y la astucia.'}
          url_img={totemImage} />
      }
      <>
        <group {...props} dispose={null}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.08} position={[800, -250, -1000]}>
            <Shelf position={[40, 5, 5]} />
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
              onClick={handleOpenCuerno}
              // onPointerEnter={handleOver}
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
              onClick={handleOpenMartillo}
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
              onClick={handleOpenCaliz}
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
              onClick={handleOpenTotem}
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
              onClick={handleOpenBarco}
              onReady={(mesh) => {
                mesh.receiveShadow = true;
                mesh.castShadow = true;
              }}
            />
          </group>
        </group>
      </>
    </>
  );
}

useGLTF.preload("/static/models/scene.glb");
