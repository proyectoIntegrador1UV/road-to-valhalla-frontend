
import Floor from './Floor';
import WelcomeWall from './WelcomeWall';
import { ScrollControls, Scroll, Sky, OrbitControls} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { SceneMitology } from './SceneMitology';
import SceneEconomic from './SceneEconomic';
import Options from './Options';
import ThreeScene from './ThreeScene';
import TextWall from './TextWall';
import { Wall } from './Wall';
import SceneCultural from './SceneCultural';
import ScenePrueba from './SceneMitology2';
import { constant } from './constant';

export default function Experience() {
    


    return <>
        <Options />
        <ThreeScene>
            <Sky/>
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

        
            
            <ScrollControls horizontal pages={15} damping={0.2}>
                <Scroll style={{ width: '100%' }}>
                
                    <WelcomeWall/>
                    <Floor/>

                    <ScenePrueba/>
                    <SceneEconomic/>
                    <SceneCultural/>
                </Scroll>
                <Scroll html style={{ width: '100%' }}>

                    {
                        constant.mitoWall.map(mito => 
                            <TextWall text={mito.text} img={mito.img} top={mito.top} left={mito.left}/>
                        )  
                    } 
                    {
                        constant.ecoWall.map(mito => 
                            <TextWall text={mito.text} img={mito.img} top={mito.top} left={mito.left}/>
                        )
                    }  
                    {
                        constant.culturaWall.map(mito => 
                            <TextWall text={mito.text} img={mito.img} top={mito.top} left={mito.left}/>
                        )
                    }  



                </Scroll>
            </ScrollControls>
           
        </ThreeScene>
        
    </>
}