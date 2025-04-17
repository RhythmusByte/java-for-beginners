import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects.jsx';
import Home from './components/HomePage.jsx';
import About from './components/About.jsx'
import SimpleCalculatorDetail from './components/projectDetails/SimpleCalculatorDetail.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/simple-calculator" element={<SimpleCalculatorDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
