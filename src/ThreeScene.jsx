import React from "react";
import { Canvas } from "@react-three/fiber";

function ThreeScene({ children }) {
  return <Canvas camera={{
    fov: 25,
    near: 1,
    position: [0, 60, 100]
  }}>
    {children}
  </Canvas>;
}

export default ThreeScene;