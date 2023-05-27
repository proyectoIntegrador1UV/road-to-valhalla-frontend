import React from "react";
import { Canvas } from "@react-three/fiber";

function ThreeScene({ children }) {
  return <Canvas camera={ {
            fov: 30,
            position: [ -1, 2, 7 ]
        } }>{children}</Canvas>;
}

export default ThreeScene;