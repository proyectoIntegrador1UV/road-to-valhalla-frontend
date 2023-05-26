import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 18,
    near: 1,
    position: [0, 60, 100]
}

root.render(
    <Canvas camera={cameraSettings} shadows={true}>
        <Experience />
    </Canvas>
)