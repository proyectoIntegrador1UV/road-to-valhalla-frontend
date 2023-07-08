import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThreeScene from './home/components/ThreeScene';
import Login from './login/components/Login';
import Experience from './home/components/Experience';
import { Quiz } from './quiz/quiz';
import Users from './users/components/users';
import Help from './help/components/help';


function App() {

  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt === null || jwt === undefined) {
      setIsToken(false);
    } else {
      setIsToken(true);
    }
  })

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='*' element={<Login setIsToken={setIsToken} />}></Route>
          <Route exact path='/quiz' element={<Quiz />}></Route>
          <Route exact path='/users' element={<Users />}></Route>
          <Route exact path='/help' element={<Help />}></Route>
          <Route exact path='/login' element={<Login setIsToken={setIsToken} />}></Route>
          {
            isToken &&
            <Route exact path='/home' element={<Experience />}></Route>
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;