import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import Details from './Details';
import Shelf from './Shelf';
import swordImage from './../../assets/images/sword.png';
import pushcartImage from './../../assets/images/wheelbarrow.png';
import flagImage from './../../assets/images/flag.jpg';
import chestImage from './../../assets/images/chest.png';
import spearImage from './../../assets/images/spear.png';
export default function SceneEconomic(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/static/models/scene_cold.glb");
  const { actions } = useAnimations(animations, group);

  //Manejador de Animaciones de Objetos
  useEffect(() => {
    console.log(actions);
    actions.SwordAction.play();
    actions.FlagAction.play();
    actions.ChestAction.play();
    actions.Fishing_spearAction.play();
    actions.Wheel_barrowAction.play();
  });

   //Manejadores de Detalle Abierto
   const [isDetailEspada, setIsDetailEspada] = useState(false);
   const [isDetailCarreta, setIsDetailCarreta] = useState(false);
   const [isDetailEstandarte, setIsDetailEstandarte] = useState(false);
   const [isDetailCofre, setIsDetailCofre] = useState(false);
   const [isDetailLanza, setIsDetailLanza] = useState(false);
   
   //Manejador de Evento de Detalle Abierto
   const handleOpenEspada = () => {
     setIsDetailEspada(true);
   };

   const handleOpenCarreta = () => {
     setIsDetailCarreta(true);
   };

   const handleOpenEstandarte = () => {
   setIsDetailEstandarte(true);
   };

   const handleOpenCofre = () => {
     setIsDetailCofre(true);
   };

   const handleOpenLanza = () => {
     setIsDetailLanza(true);
   };

   //Manejador de Evento de Detalle Cerrado
   const handleClose = () => {
     setIsDetailEspada(false);
     setIsDetailLanza(false);
     setIsDetailEstandarte(false);
     setIsDetailCarreta(false);
     setIsDetailCofre(false);
   };

  return (
    <>
      {
        isDetailEspada &&
        <Details
           ref = {group}
          position={[5350, 0, 0]}
          handleClose={handleClose}
          title={'Espada Vikinga'}
          description={'La espada nórdica tenía una relación importante con la economía en la sociedad vikinga. Era un símbolo de estatus y poder, y poseer una espada de alta calidad era muestra de riqueza y prestigio. Los herreros especializados tenían un estatus privilegiado y podían comerciar en diferentes regiones. Las espadas de calidad eran deseables para nobles, guerreros y comerciantes en busca de ganancias considerables.'}
          url_img={swordImage} />
      }
      {
        isDetailLanza &&
        <Details
          position={[5350, 0, 0]}
          handleClose={handleClose}
          title={'Lanza Pesca Nórdica'}
          description={'La lanza de pesca vikinga era una arma y herramienta esencial para la subsistencia y también estaba relacionada con la economía de la sociedad nórdica. Los vikingos la utilizaban para pescar y obtener alimentos, así como para comerciar productos marinos, generando ingresos y contribuyendo al desarrollo económico de las comunidades costeras.'}
          url_img={spearImage} />
      }
      {
        isDetailEstandarte && 
        <Details
          position={[5350, 0, 0]}
          handleClose={handleClose}
          title={'Estandarte Vikingo'}
          description={'Los estandartes vikingos no solo eran distintivos militares, sino que también eran importantes en las actividades económicas. Se levantaban en los barcos durante incursiones y expediciones comerciales para identificar a un grupo específico. Estos estandartes no solo representaban unidad y lealtad, sino que también establecían la reputación y credibilidad de los vikingos como comerciantes. Facilitaban el reconocimiento mutuo entre los comerciantes y las comunidades con las que interactuaban.'}
          url_img={flagImage} />
      }
      {
        isDetailCarreta && 
        <Details
          position={[5350, 0, 0]}
          handleClose={handleClose}
          title={'Carretilla de Madera'}
          description={'La carretilla de madera nórdica era una herramienta esencial en la sociedad antigua y estaba estrechamente relacionada con el ámbito económico. Facilitaba el transporte eficiente de productos agrícolas y comerciales, contribuyendo al desarrollo económico de las comunidades nórdicas.'}
          url_img={pushcartImage} />
      }
      {
        isDetailCofre && 
        <Details
          position={[5350, 0, 0]}
          handleClose={handleClose}
          title={'Cofre Artesanal'}
          description={'Una obra de artesanía elaborada, protegía objetos valiosos y desempeñaba un papel clave en el ámbito económico. Era utilizado como seguro y medio de intercambio por comerciantes, resguardando sus riquezas y bienes comerciales. Además, representaba la continuidad económica y la acumulación de riqueza a través de generaciones en la sociedad nórdica.'}
          url_img={chestImage} />
      }
      <>
        <group ref={group} {...props} dispose={null}>
          <group position={[5180, -230, -1000]} scale={23}>
            <Shelf position={[40, 5, 5]}/>
            <mesh
              name="Flag"
              castShadow
              receiveShadow
              onReady={(mesh) => {
                mesh.receiveShadow = true;
                mesh.castShadow = true;
              }}
              geometry={nodes.Flag.geometry}
              material={materials["PolyVikings_Material_01.137"]}
              rotation={[0.7, 0.881, 0.407]}
              scale={0.01}
              onClick={handleOpenEstandarte}
            />
            <mesh
              name="Wheel_barrow"
              castShadow
              receiveShadow
              onReady={(mesh) => {
                mesh.receiveShadow = true;
                mesh.castShadow = true;
              }}
              geometry={nodes.Wheel_barrow.geometry}
              material={materials["PolyVikings_Material_01.128"]}
              rotation={[0.7, 0.881, 0.407]}
              scale={0.01}
              onClick={handleOpenCarreta}
            />
            <mesh
              name="Sword"
              castShadow
              receiveShadow
              onReady={(mesh) => {
                mesh.receiveShadow = true;
                mesh.castShadow = true;
              }}
              geometry={nodes.Sword.geometry}
              material={materials["PolyVikings_Material_01.129"]}
              rotation={[0.7, 0.881, 0.407]}
              scale={0.01}
              onClick={handleOpenEspada}
            />
            <group
              name="SM_Wep_Sword_01031"
              rotation={[0.7, 0.881, 0.407]}
              scale={0.01}
            >
              <mesh
                name="Scene042"
                castShadow
                receiveShadow
                geometry={nodes.Scene042.geometry}
                material={materials["PolyVikings_Material_01.122"]}
              />
              <mesh
                name="Scene042_1"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_1.geometry}
                material={materials["PolyVikings_Material_01.108"]}
              />
              <mesh
                name="Scene042_2"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_2.geometry}
                material={materials["PolyVikings_Material_01.100"]}
              />
              <mesh
                name="Scene042_3"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_3.geometry}
                material={materials["PolyVikings_Material_01.102"]}
              />
              <mesh
                name="Scene042_4"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_4.geometry}
                material={materials["PolyVikings_Material_01.103"]}
              />
              <mesh
                name="Scene042_5"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_5.geometry}
                material={materials["PolyVikings_Material_01.104"]}
              />
              <mesh
                name="Scene042_6"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_6.geometry}
                material={materials["PolyVikings_Material_01.105"]}
              />
              <mesh
                name="Scene042_7"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_7.geometry}
                material={materials["PolyVikings_Material_01.168"]}
              />
              <mesh
                name="Scene042_8"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_8.geometry}
                material={materials["PolyVikings_Material_01.109"]}
              />
              <mesh
                name="Scene042_9"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_9.geometry}
                material={materials["PolyVikings_Material_01.148"]}
              />
              <mesh
                name="Scene042_10"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_10.geometry}
                material={materials["PolyVikings_Material_01.157"]}
              />
              <mesh
                name="Scene042_11"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_11.geometry}
                material={materials["PolyVikings_Material_01.110"]}
              />
              <mesh
                name="Scene042_12"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_12.geometry}
                material={materials["PolyVikings_Material_01.125"]}
              />
              <mesh
                name="Scene042_13"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_13.geometry}
                material={materials.PolyVikings_Material_01}
              />
              <mesh
                name="Scene042_14"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_14.geometry}
                material={materials["PolyVikings_Material_01.112"]}
              />
              <mesh
                name="Scene042_15"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_15.geometry}
                material={materials["PolyVikings_Material_01.113"]}
              />
              <mesh
                name="Scene042_16"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_16.geometry}
                material={materials["PolyVikings_Material_01.114"]}
              />
              <mesh
                name="Scene042_17"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_17.geometry}
                material={materials["PolyVikings_Material_01.094"]}
              />
              <mesh
                name="Scene042_18"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_18.geometry}
                material={materials["PolyVikings_Material_01.093"]}
              />
              <mesh
                name="Scene042_19"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_19.geometry}
                material={materials["PolyVikings_Material_01.099"]}
              />
              <mesh
                name="Scene042_20"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_20.geometry}
                material={materials["PolyVikings_Material_01.095"]}
              />
              <mesh
                name="Scene042_21"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_21.geometry}
                material={materials["PolyVikings_Material_01.139"]}
              />
              <mesh
                name="Scene042_22"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_22.geometry}
                material={materials["PolyVikings_Material_01.121"]}
              />
              <mesh
                name="Scene042_23"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_23.geometry}
                material={materials["PolyVikings_Material_01.117"]}
              />
              <mesh
                name="Scene042_24"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_24.geometry}
                material={materials["PolyVikings_Material_01.118"]}
              />
              <mesh
                name="Scene042_25"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_25.geometry}
                material={materials["PolyVikings_Material_01.119"]}
              />
              <mesh
                name="Scene042_26"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_26.geometry}
                material={materials["PolyVikings_Material_01.136"]}
              />
              <mesh
                name="Scene042_27"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_27.geometry}
                material={materials["PolyVikings_Material_01.120"]}
              />
              <mesh
                name="Scene042_28"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_28.geometry}
                material={materials["PolyVikings_Material_01.123"]}
              />
              <mesh
                name="Scene042_29"
                castShadow
                receiveShadow
                geometry={nodes.Scene042_29.geometry}
                material={materials["PolyVikings_Material_01.124"]}
              />
            </group>
            <mesh
              name="Fishing_spear"
              castShadow
              receiveShadow
              onReady={(mesh) => {
                mesh.receiveShadow = true;
                mesh.castShadow = true;
              }}
              geometry={nodes.Fishing_spear.geometry}
              material={materials["PolyVikings_Material_01.126"]}
              rotation={[0.7, 0.881, 0.407]}
              scale={0.01}
              onClick={handleOpenLanza}
            />
            <mesh
              name="Chest"
              castShadow
              receiveShadow
              onReady={(mesh) => {
                mesh.receiveShadow = true;
                mesh.castShadow = true;
              }}
              geometry={nodes.Chest.geometry}
              material={materials["PolyVikings_Material_01.127"]}
              rotation={[0.7, 0.881, 0.407]}
              scale={0.01}
              onClick={handleOpenCofre}
            />
          </group>
        </group>
      </>
    </>
  );
}

useGLTF.preload("/static/models/scene_cold.glb");