import { Html, Text, useTexture } from '@react-three/drei';
import { DoubleSide } from "three";
import titleImage from './../../assets/images/titleWall.png';
import navImage from './../../assets/images/nav02.png';
import { Wall } from './Wall';
import { MitoWall } from './MitoWall';
import { PoliticoWall } from './PoliticoWall';
import { CulturalWall } from './CulturalWall';

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
        {
            <mesh receiveShadow position={[-150, 0, -35]} rotation-z={-Math.PI * 2}>
                <planeGeometry args={[1000, 700, 2]} />
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
               
                </Text>
            
            </mesh>
    }


            <MitoWall position={[-7000, 10, -220]}/>

       

            <Wall position={[2150, 20, -220]}/>
            <Wall position={[2820, 20, -220]}/>
            <Wall position={[3500, 20, -220]}/>

            <PoliticoWall position={[-3400, 26, -120]} />


            <Wall position={[5830, 20, -220]}/>
            <Wall position={[6510, 20, -220]}/>

            <CulturalWall position={[-390, 26, -120]}/>

            <Wall position={[8800, 20, -220]}/>
            <Wall position={[9480, 20, -220]}/>
            <Wall position={[10080, 20, -220]}/>

            

            
            
        </>
    );
}
