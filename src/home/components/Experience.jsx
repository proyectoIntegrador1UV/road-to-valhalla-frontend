
import Floor from './Floor';
import WelcomeWall from './WelcomeWall';
import { ScrollControls, Scroll, Sky, OrbitControls} from '@react-three/drei';

import { SceneMitology } from './SceneMitology';
import SceneEconomic from './SceneEconomic';

export default function Experience() {
    return <>
        

        <Sky/>
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        
        <ScrollControls horizontal pages={6} damping={0.2}>
        <Scroll style={{ width: '100%' }}>
        <WelcomeWall/>
        <Floor/>
        <SceneMitology/>
        <SceneEconomic/>
        </Scroll>
        </ScrollControls>
        {/**/}


    </>
}