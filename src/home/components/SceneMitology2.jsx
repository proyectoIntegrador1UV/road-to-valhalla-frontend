import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function ScenePrueba(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/static/models/Scene2.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);
    actions.MartilloAction.play();
    actions.CuernoAction.play();
    actions.CopaAction.play();
    actions.TotemAction.play();
    actions.BarcoAction.play();
    
  });
  return (
    <group ref={group} {...props} dispose={null} scale={27} position={[1340, -250, -1000]}>
      <group name="Scene">
        <mesh
          name="Copa"
          castShadow
          receiveShadow
          geometry={nodes.Copa.geometry}
          material={materials["PolyVikings_Material_01.140"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.003}
        />
        <mesh
          name="Totem"
          castShadow
          receiveShadow
          geometry={nodes.Totem.geometry}
          material={materials["PolyVikings_Material_01.076"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.003}
        />
        <mesh
          name="Barco"
          castShadow
          receiveShadow
          geometry={nodes.Barco.geometry}
          material={materials["PolyVikings_Material_01.078"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.003}
        />
        <group
          name="SM_Bld_Tower_Stone_Base_01027"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.003}
        >
          <mesh
            name="Scene067"
            castShadow
            receiveShadow
            geometry={nodes.Scene067.geometry}
            material={materials["PolyVikings_Material_01.013"]}
          />
          <mesh
            name="Scene067_1"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_1.geometry}
            material={materials["PolyVikings_Material_01.040"]}
          />
          <mesh
            name="Scene067_2"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_2.geometry}
            material={materials["PolyVikings_Material_01.073"]}
          />
          <mesh
            name="Scene067_3"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_3.geometry}
            material={materials["PolyVikings_Material_01.256"]}
          />
          <mesh
            name="Scene067_4"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_4.geometry}
            material={materials["PolyVikings_Material_01.257"]}
          />
          <mesh
            name="Scene067_5"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_5.geometry}
            material={materials["PolyVikings_Material_01.264"]}
          />
          <mesh
            name="Scene067_6"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_6.geometry}
            material={materials["PolyVikings_Material_01.265"]}
          />
          <mesh
            name="Scene067_7"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_7.geometry}
            material={materials["PolyVikings_Material_01.273"]}
          />
          <mesh
            name="Scene067_8"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_8.geometry}
            material={materials["PolyVikings_Material_01.250"]}
          />
          <mesh
            name="Scene067_9"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_9.geometry}
            material={materials["PolyVikings_Material_01.088"]}
          />
          <mesh
            name="Scene067_10"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_10.geometry}
            material={materials["PolyVikings_Material_01.251"]}
          />
          <mesh
            name="Scene067_11"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_11.geometry}
            material={materials["PolyVikings_Material_01.249"]}
          />
          <mesh
            name="Scene067_12"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_12.geometry}
            material={materials["PolyVikings_Material_01.083"]}
          />
          <mesh
            name="Scene067_13"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_13.geometry}
            material={materials["PolyVikings_Material_01.002"]}
          />
          <mesh
            name="Scene067_14"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_14.geometry}
            material={materials["PolyVikings_Material_01.003"]}
          />
          <mesh
            name="Scene067_15"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_15.geometry}
            material={materials["PolyVikings_Material_01.004"]}
          />
          <mesh
            name="Scene067_16"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_16.geometry}
            material={materials["PolyVikings_Material_01.005"]}
          />
          <mesh
            name="Scene067_17"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_17.geometry}
            material={materials["PolyVikings_Material_01.006"]}
          />
          <mesh
            name="Scene067_18"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_18.geometry}
            material={materials["PolyVikings_Material_01.008"]}
          />
          <mesh
            name="Scene067_19"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_19.geometry}
            material={materials["PolyVikings_Material_01.009"]}
          />
          <mesh
            name="Scene067_20"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_20.geometry}
            material={materials["PolyVikings_Material_01.010"]}
          />
          <mesh
            name="Scene067_21"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_21.geometry}
            material={materials["PolyVikings_Material_01.014"]}
          />
          <mesh
            name="Scene067_22"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_22.geometry}
            material={materials["PolyVikings_Material_01.015"]}
          />
          <mesh
            name="Scene067_23"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_23.geometry}
            material={materials["PolyVikings_Material_01.017"]}
          />
          <mesh
            name="Scene067_24"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_24.geometry}
            material={materials["PolyVikings_Material_01.018"]}
          />
          <mesh
            name="Scene067_25"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_25.geometry}
            material={materials["PolyVikings_Material_01.019"]}
          />
          <mesh
            name="Scene067_26"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_26.geometry}
            material={materials["PolyVikings_Material_01.021"]}
          />
          <mesh
            name="Scene067_27"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_27.geometry}
            material={materials["PolyVikings_Material_01.022"]}
          />
          <mesh
            name="Scene067_28"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_28.geometry}
            material={materials["PolyVikings_Material_01.025"]}
          />
          <mesh
            name="Scene067_29"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_29.geometry}
            material={materials["PolyVikings_Material_01.142"]}
          />
          <mesh
            name="Scene067_30"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_30.geometry}
            material={materials["PolyVikings_Material_01.170"]}
          />
          <mesh
            name="Scene067_31"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_31.geometry}
            material={materials["PolyVikings_Material_01.161"]}
          />
          <mesh
            name="Scene067_32"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_32.geometry}
            material={materials["PolyVikings_Material_01.098"]}
          />
          <mesh
            name="Scene067_33"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_33.geometry}
            material={materials["PolyVikings_Material_01.091"]}
          />
          <mesh
            name="Scene067_34"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_34.geometry}
            material={materials["PolyVikings_Material_01.182"]}
          />
          <mesh
            name="Scene067_35"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_35.geometry}
            material={materials["PolyVikings_Material_01.138"]}
          />
          <mesh
            name="Scene067_36"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_36.geometry}
            material={materials["PolyVikings_Material_01.026"]}
          />
          <mesh
            name="Scene067_37"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_37.geometry}
            material={materials["PolyVikings_Material_01.046"]}
          />
          <mesh
            name="Scene067_38"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_38.geometry}
            material={materials["PolyVikings_Material_01.236"]}
          />
          <mesh
            name="Scene067_39"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_39.geometry}
            material={materials["PolyVikings_Material_01.087"]}
          />
          <mesh
            name="Scene067_40"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_40.geometry}
            material={materials["PolyVikings_Material_01.235"]}
          />
          <mesh
            name="Scene067_41"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_41.geometry}
            material={materials["PolyVikings_Material_01.234"]}
          />
          <mesh
            name="Scene067_42"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_42.geometry}
            material={materials["PolyVikings_Material_01.162"]}
          />
          <mesh
            name="Scene067_43"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_43.geometry}
            material={materials["PolyVikings_Material_01.029"]}
          />
          <mesh
            name="Scene067_44"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_44.geometry}
            material={materials["PolyVikings_Material_01.071"]}
          />
          <mesh
            name="Scene067_45"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_45.geometry}
            material={materials["PolyVikings_Material_01.144"]}
          />
          <mesh
            name="Scene067_46"
            castShadow
            receiveShadow
            geometry={nodes.Scene067_46.geometry}
            material={materials["PolyVikings_Material_01.072"]}
          />
        </group>
        <mesh
          name="Cuerno"
          castShadow
          receiveShadow
          geometry={nodes.Cuerno.geometry}
          material={materials["PolyVikings_Material_01.074"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.003}
        />
        <mesh
          name="Martillo"
          castShadow
          receiveShadow
          geometry={nodes.Martillo.geometry}
          material={materials["PolyVikings_Material_01.075"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.003}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/models/Scene2.glb");