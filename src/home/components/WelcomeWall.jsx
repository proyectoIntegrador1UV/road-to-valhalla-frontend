import { Html, Text, useTexture } from '@react-three/drei';
import { DoubleSide } from "three";
import titleImage from './../../assets/images/titleWall.png';
import navImage from './../../assets/images/nav02.png';

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
            <mesh receiveShadow position={[-150, 0, -15]} rotation-z={-Math.PI * 2}>
                <planeGeometry args={[600, 300, 2]} />
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
                <Text
                    position={[0, 0, 0.1]}
                    fontSize={2}
                    maxWidth={20}
                    lineHeight={1}
                    letterSpacing={-0.05}
                    textAlign={'center'}
                    color="white"
                >
                    <Html position={[285, 100, 0.1]}>
                        <img src={navImage} sizes='500px' width="391" height="306"/>
                    </Html>
                    {/* Nav Inicial*/}
                </Text>
            </mesh>
            <mesh receiveShadow position={[-150, 50, -100]} rotation-x={-Math.PI * 90}>
                <planeGeometry args={[1550, 340]} />
                <meshStandardMaterial {...props} side={DoubleSide}  />
            </mesh>
            <mesh receiveShadow position={[2000, 50, -100]} rotation-x={-Math.PI * 90}>
                <planeGeometry args={[1550, 340]} />
                <meshStandardMaterial {...props} side={DoubleSide}  />
            </mesh>
            
            
        </>
    );
}
