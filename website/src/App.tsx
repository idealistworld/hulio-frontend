import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Litepaper from './pages/litepaper';
import ContactElement from './pages/contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactElement />} />
        <Route path='/litepaper' element={<Litepaper />} />
      </Routes>
    </Router>
  );
}

export default App;
