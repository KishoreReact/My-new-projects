import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectFilesPage from '../components/ProjectFilesPage';

function ProjectsPage() {
  const location = useLocation();
  const { project } = location.state || {};

  return <ProjectFilesPage project={project} />;
}

export default ProjectsPage;
