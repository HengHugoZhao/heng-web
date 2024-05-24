import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About.js';
import Resume from './pages/Resume.js';
import Projects from './pages/Project.js';
import Research from './pages/Research.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

