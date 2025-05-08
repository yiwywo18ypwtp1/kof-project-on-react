import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserProvider } from './components/KofContext';

import HomePage from './components/HomePage'
import BlackTshirtPage from './components/BlackTshirtPage';
import WhiteTshirtPage from './components/WhiteTshirtPage';
import RegisterPage from './components/RegisterPage';
import TimerExample from './components/TimerExample';


function App() {
  // const [user, setUser] = useState(null);

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/black-tshirt' element={<BlackTshirtPage />} />
          <Route path='/white-tshirt' element={<WhiteTshirtPage />} />

          <Route path='/register' element={<RegisterPage />} />
          <Route path='/test' element={<TimerExample />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;