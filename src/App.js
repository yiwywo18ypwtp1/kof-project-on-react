import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage'
import BlackTshirtPage from './components/BlackTshirtPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/black-tshirt' element={<BlackTshirtPage />} />
        <Route path='/white-tshirt' element={<BlackTshirtPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;