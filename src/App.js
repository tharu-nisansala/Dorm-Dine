// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Offers from './pages/Offers';
import Contactus from './pages/Contactus';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App;
