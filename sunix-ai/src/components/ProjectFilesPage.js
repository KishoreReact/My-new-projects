import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../styles/ProjectFilesPage.css';

function ProjectFilesPage({ project }) {
  return (
    <div className="project-files-container">
      <h1>{project?.name}</h1>
      <p>Role: {project?.role}</p>
      <p>Creation Date: {project?.creationDate}</p>
      <p>Status: {project?.status}</p>
      <h2>Files</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {project?.files.map((file, index) => (
              <TableRow key={index}>
                <TableCell>{file.name}</TableCell>
                <TableCell>{file.status}</TableCell>
                <TableCell>{file.priority}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProjectFilesPage;
