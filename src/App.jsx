import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThreeScene from './home/components/ThreeScene';
import Login from './login/components/Login';
import Experience from './home/components/Experience';

function App() {

  const [isToken, setIsToken] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='*' element={<Login/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/home' element={
            <ThreeScene>
              <Experience/>
            </ThreeScene>
          }>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;