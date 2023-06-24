import { useTexture } from "@react-three/drei"
import { DoubleSide } from "three"

export default function Floor() {
    const PATH = "/static/textures/floor/"

    const props = useTexture ({
        map: PATH + "WoodFlooring044_COL_2K.jpg",
        displacementMap: PATH + 'WoodFlooring044_DISP_2K.jpg',
        normalMap: PATH + 'WoodFlooring044_NRM_2K.jpg',
        roughnessMap: PATH + 'WoodFlooring044_Sphere.jpg',
        aoMap: PATH + 'WoodFlooring044_GLOSS_2K.jpg',
        cubeMap: PATH + 'WoodFlooring044_Cube.jpg'
    })
    return (
        <mesh receiveShadow position={[-120, -180, 100]} rotation-x={- Math.PI * 0.5}>
            <planeGeometry args={[8000, 1000]} />
            <meshStandardMaterial {...props} side={DoubleSide}/>
        </mesh>
    )
}