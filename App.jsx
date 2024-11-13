import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetStarted from './Pages/GetStarted';
import Selection from './Pages/Selection';
import Questions from './Pages/Questions';
import Results from './Pages/Results';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/questions" element={<Questions />} />
        <Route path='/results' element={<Results/>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;