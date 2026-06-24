import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import MainContent from './sections/MainContent';
import ProjectDetail from './sections/ProjectDetails';
import './styles/index.css';
import HRAgent from './components/HRAgent';

function App() {
  return (
    <AppProvider>
      <Router>
        <main className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <HRAgent />
          <footer className="py-20 text-center border-t border-gray-50">
            <span className="mono-detail text-[9px]">
              DESIGNED WITH ENGINEERING DISCIPLINE — 2026
            </span>
          </footer>
        </main>
      </Router>
    </AppProvider>
  );
}

export default App;