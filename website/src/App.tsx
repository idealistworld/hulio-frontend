import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Litepaper from './pages/litepaper';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/litepaper' element={<Litepaper />} />
      </Routes>
    </Router>
  );
}

export default App;
