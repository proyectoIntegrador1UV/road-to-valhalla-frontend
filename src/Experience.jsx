import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Floor from './Floor'
import WelcomeWall from './WelcomeWall'
import HachaModel from './HachaModel'
import ShieldModel from './ShieldModel'

export default function Experience() {
    
    return <>
        {/* <Perf position="top-left" /> */}
        <OrbitControls enableRotate={false} makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, -20]} intensity={1.5}/>
        <WelcomeWall/>
        <Floor/>
        <HachaModel />
        <ShieldModel />
    </>
}