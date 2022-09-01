import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Welcome from './pages/welcome/welcome';
import Home from './pages/home/home';
import Info from './pages/info/info';
import Settings from './pages/settings/settings';
import Tutorials from './pages/tutorials/tutorials';
import AdvancedSettings from './pages/advanced-settings/advanced-settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<Info/>} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/advanced-settings' element={<AdvancedSettings />} />
        <Route path='/tutorials' element={<Tutorials />} />
      </Routes>
    </Router>
  );
}

export default App;
