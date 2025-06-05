import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ritual from './components/Ritual';
import Splash from './components/Splash';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/formulario" element={<Ritual />} />
      </Routes>
    </Router>
  );
}

export default App;
