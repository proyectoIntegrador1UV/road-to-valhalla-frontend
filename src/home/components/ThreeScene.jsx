import React from "react";
import { Canvas } from "@react-three/fiber";

function ThreeScene({ children }) {
  return <Canvas orthographic camera={
    { zoom: 2,  position: [0,10,50], fov: 20, near: 40, far: 2000}}>
    {children}
  </Canvas>;
}

export default ThreeScene;