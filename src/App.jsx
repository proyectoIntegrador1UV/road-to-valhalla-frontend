import ThreeScene from "./ThreeScene";
import { OrbitControls} from "@react-three/drei";
import { MOUSE } from "three";

import HornModel from './HornModel';
import ShipModel from './ShipModel';
import Floor from './Floor';
import WelcomeWall from './WelcomeWall';
import HachaModel from './HachaModel';
import ShieldModel from './ShieldModel';

function App() {
  return (
    <>
      <ThreeScene>
        <OrbitControls
          makeDefault
          maxDistance={80}
          minDistance={60}
          mouseButtons={{
            LEFT: MOUSE.PAN,
            MIDDLE: MOUSE.ROTATE,
          }}
        />
        <directionalLight intensity={1.5} />
        <ambientLight intensity={0.5}/>
        <WelcomeWall />
        <Floor />
        <HachaModel />
        <ShieldModel />
        <HornModel />
        <ShipModel />
      </ThreeScene>
    </>
  );
}

export default App;