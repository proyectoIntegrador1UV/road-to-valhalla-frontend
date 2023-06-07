import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { OrbitControls } from '@react-three/drei';
import { MOUSE } from 'three';
import ThreeScene from './home/components/ThreeScene';
import Login from './login/components/Login';
import HornModel from './home/components/HornModel';
import ShipModel from './home/components/ShipModel';
import Floor from './home/components/Floor';
import WelcomeWall from './home/components/WelcomeWall';
import HachaModel from './home/components/HachaModel';
import ShieldModel from './home/components/ShieldModel';

function App() {

  const [ isToken, setIsToken ] = useState(false);
  const [ name, setName ] = useState('');

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='*' element={<Login/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/home' element={
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
                <ambientLight intensity={0.5} />
                <WelcomeWall />
                <Floor />
                <HachaModel />
                <ShieldModel />
                <HornModel />
                <ShipModel />
              </ThreeScene>
            </>
          }>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;