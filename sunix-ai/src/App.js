import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import EditorPage from './pages/EditorPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </div>
  );
}

export default App;
