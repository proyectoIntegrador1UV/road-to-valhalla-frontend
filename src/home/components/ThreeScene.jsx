import React from "react";
import { Canvas } from "@react-three/fiber";

const cameraSettings = {
  fov:50,
  near:5,
  far:100,
  position:[2,8,4]
}

function ThreeScene({ children }) {
  return <Canvas  orthographic camera={{ zoom: 2,  position: [0,10,50], fov: 20, near: 40, far: 2000}} >
    {children}
  </Canvas>;
}

export default ThreeScene;