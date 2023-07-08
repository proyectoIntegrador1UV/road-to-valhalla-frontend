import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function SceneCultural(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/static/models/Scene3.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);
    actions.CraneoAction.play();
    actions.CruzAction.play();
    actions.HidromielAction.play();
    actions.PicoAction.play();
    actions.PescadoAction.play();
  });
  return (
    <group ref={group} {...props} dispose={null} scale={18} position={[8200, -15,-200]}>
      <group name="Scene">
        <group
          name="SM_Prop_Boat_Build_01"
          position={[8.035, -2.575, 0.388]}
          rotation={[1.64, -0.029, 1.764]}
          scale={0.008}
        >
          <mesh
            name="Scene031"
            castShadow
            receiveShadow
            geometry={nodes.Scene031.geometry}
            material={materials["PolyVikings_Material_01.020"]}
          />
          <mesh
            name="Scene031_1"
            castShadow
            receiveShadow
            geometry={nodes.Scene031_1.geometry}
            material={materials["PolyVikings_Material_01.001"]}
          />
          <mesh
            name="Scene031_2"
            castShadow
            receiveShadow
            geometry={nodes.Scene031_2.geometry}
            material={materials["PolyVikings_Material_01.215"]}
          />
          <mesh
            name="Scene031_3"
            castShadow
            receiveShadow
            geometry={nodes.Scene031_3.geometry}
            material={materials["PolyVikings_Material_01.214"]}
          />
          <mesh
            name="Scene031_4"
            castShadow
            receiveShadow
            geometry={nodes.Scene031_4.geometry}
            material={materials["PolyVikings_Material_01.033"]}
          />
          <mesh
            name="Scene031_5"
            castShadow
            receiveShadow
            geometry={nodes.Scene031_5.geometry}
            material={materials["PolyVikings_Material_01.077"]}
          />
          <mesh
            name="Scene031_6"
            castShadow
            receiveShadow
            geometry={nodes.Scene031_6.geometry}
            material={materials["PolyVikings_Material_01.062"]}
          />
          <mesh
            name="Scene031_7"
            castShadow
            receiveShadow
            geometry={nodes.Scene031_7.geometry}
            material={materials["PolyVikings_Material_01.012"]}
          />
          <mesh
            name="Scene031_8"
            castShadow
            receiveShadow
            geometry={nodes.Scene031_8.geometry}
            material={materials["PolyVikings_Material_01.016"]}
          />
          <mesh
            name="Scene031_9"
            castShadow
            receiveShadow
            geometry={nodes.Scene031_9.geometry}
            material={materials["PolyVikings_Material_01.023"]}
          />
          <mesh
            name="Scene031_10"
            castShadow
            receiveShadow
            geometry={nodes.Scene031_10.geometry}
            material={materials["PolyVikings_Material_01.028"]}
          />
        </group>
        <mesh
          name="Craneo"
          castShadow
          receiveShadow
          geometry={nodes.Craneo.geometry}
          material={materials["PolyVikings_Material_01.030"]}
          position={[0.439, -2.091, 3.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          name="Hidromiel"
          castShadow
          receiveShadow
          geometry={nodes.Hidromiel.geometry}
          material={materials["PolyVikings_Material_01.097"]}
          position={[2.118, -1.937, 2.854]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          name="Pico"
          castShadow
          receiveShadow
          geometry={nodes.Pico.geometry}
          material={materials["PolyVikings_Material_01.032"]}
          position={[4.535, -1.803, 3.043]}
          rotation={[Math.PI / 2, 0.849, -1.949]}
          scale={0.01}
        />
        <mesh
          name="Crucifijo"
          castShadow
          receiveShadow
          geometry={nodes.Crucifijo.geometry}
          material={materials["PolyVikings_Material_01.034"]}
          position={[6.679, -1.973, 3.585]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.014}
        />
        <mesh
          name="Pescado"
          castShadow
          receiveShadow
          geometry={nodes.Pescado.geometry}
          material={materials["PolyVikings_Material_01.132"]}
          position={[8.583, -1.034, 4.35]}
          rotation={[Math.PI / 2, 0, -0.902]}
          scale={0.01}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/models/Scene3.glb");