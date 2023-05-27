import { OrbitControls } from '@react-three/drei'
import Floor from './Floor'
import WelcomeWall from './WelcomeWall'
import HachaModel from './HachaModel'
import ShieldModel from './ShieldModel'
import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { MOUSE } from 'three'
import HornModel from './HornModel'
import ShipModel from './ShipModel'

export default function Experience() {

    const controlsRef = useRef();

    const { camera, gl } = useThree();

    useEffect(() => {
        const controls = controlsRef.current;
        controls.enableRotate = false; // Deshabilitar rotación
        controls.mouseButtons = {
            LEFT: MOUSE.PAN, // Deshabilitar panning con el botón izquierdo
            RIGHT: MOUSE.ROTATE, // Activar rotación con el botón derecho
            MIDDLE: MOUSE.DOLLY, // Activar zoom con el botón del medio
        };

        return () => {
            controls.dispose();
        };
    }, []);

    return <>
        <OrbitControls
            ref={controlsRef}
            args={[camera, gl.domElement]}
            maxDistance={130}
            minDistance={60} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, -20]} intensity={1.5} />
        <WelcomeWall />
        <Floor />
        <HachaModel />
        <ShieldModel />
        <HornModel />
        <ShipModel />
    </>
}