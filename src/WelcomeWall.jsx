import { Html, Text, useTexture } from '@react-three/drei';
import { DoubleSide } from "three";
import titleImage from './assets/images/titleWall.png';

export default function WelcomeWall() {
    const PATH = "/static/textures/wall/";

    const props = useTexture ({
        map: PATH + "WallMedieval003_COL_VAR1_1K.jpg",
        displacementMap: PATH + 'WallMedieval003_DISP_VAR1_1K.jpg',
        normalMap: PATH + 'WallMedieval003_NRM_1K.jpg',
        roughnessMap: PATH + 'WallMedieval003_Sphere.jpg',
        aoMap: PATH + 'WallMedieval003_AO_1K.jpg',
        cubeMap: PATH + 'WallMedieval003_Cube.jpg'
    });

    return (
        <>
            <mesh receiveShadow position={[-18, 13, 15]} rotation-z={-Math.PI * 2}>
                <planeGeometry args={[30, 50, 2]} />
                <meshStandardMaterial color="#2C3E50" />

                <Text
                    position={[0, 0, 0.1]}
                    fontSize={2}
                    maxWidth={20}
                    lineHeight={1}
                    letterSpacing={-0.05}
                    textAlign={'center'}
                    color="white"
                >
                    <Html position={[-11, 8, 0.1]}>
                        <img src={titleImage}/>
                    </Html>
                    {/* Road to Valhalla */}
                </Text>
            </mesh>
            <mesh receiveShadow position={[45, 9, -20]} rotation-x={-Math.PI * 90}>
                <planeGeometry args={[200, 50]} />
                <meshStandardMaterial {...props} side={DoubleSide} />
            </mesh>
        </>
    );
}
