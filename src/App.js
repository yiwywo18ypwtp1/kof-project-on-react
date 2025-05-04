import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserContext } from './components/KofContext';

import HomePage from './components/HomePage'
import BlackTshirtPage from './components/BlackTshirtPage';
import WhiteTshirtPage from './components/WhiteTshirtPage';
import RegisterPage from './components/RegisterPage';


function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/black-tshirt' element={<BlackTshirtPage />} />
          <Route path='/white-tshirt' element={<WhiteTshirtPage />} />

          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;