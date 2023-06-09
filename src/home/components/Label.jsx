import { Html } from "@react-three/drei";

export default function FigureLabel({ position, textLabel, occlude }) {
  return (
    <>
      <Html
        center
        wrapperClass="geometry_label"
        distanceFactor={6}
        occlude={occlude}
        position={position}
      >
        <h1 style={{fontSize: '100px', fontFamily: 'Arial', fontWeight: 'bold', color: '#F39C12', cursor: 'default'}}>{textLabel}</h1>
      </Html>
    </>
  );
}
