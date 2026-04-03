import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './sections/MainContent';
import ProjectDetail from './sections/ProjectDetails';
import './styles/index.css';

function App() {
  return (
    <Router>
      <main className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <footer className="py-20 text-center border-t border-gray-50">
          <span className="mono-detail text-[9px]">
            DESIGNED WITH ENGINEERING DISCIPLINE — 2026
          </span>
        </footer>
      </main>
    </Router>
  );
}

export default App;