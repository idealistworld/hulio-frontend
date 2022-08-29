import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Welcome from './pages/welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        {/* <Route path='/' element={} />
        <Route path='/info' element={} />
        <Route path='/settings' element={} />
        <Route path='/tutorials' element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
