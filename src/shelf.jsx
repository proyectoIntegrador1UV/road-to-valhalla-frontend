import React from 'react';

export default function Shelf(props) {
    return (
        <>
            <mesh
                receiveShadow
                position={props.position}
                rotation-x={-Math.PI * 0.5}
                onClick={props.handleOpen}
            >
                <boxGeometry args={[8, 8, 2]} />
                <meshStandardMaterial color="#2C3E50" />
          </mesh>
        </>
    )
}