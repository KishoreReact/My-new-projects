import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import '../styles/ProjectFilesPage.css';

function ProjectFilesPage({ project }) {
  const Files = [
    { name: 'File A1', status: 'Complete', priority: 'High' },
    { name: 'File A2', status: 'Incomplete', priority: 'Low' },
    { name: 'File A3', status: 'Complete', priority: 'High' },
    { name: 'File A4', status: 'Incomplete', priority: 'Medium' },
    { name: 'File A5', status: 'Complete', priority: 'Medium' },
    { name: 'File A6', status: 'Incomplete', priority: 'Low' },
    { name: 'File A7', status: 'Complete', priority: 'High' },
    { name: 'File A8', status: 'Incomplete', priority: 'Medium' },
    { name: 'File B1', status: 'Complete', priority: 'Medium' },
    { name: 'File B2', status: 'Incomplete', priority: 'High' },
    { name: 'File C1', status: 'Complete', priority: 'High' },
    { name: 'File C2', status: 'Incomplete', priority: 'High' },
    { name: 'File D1', status: 'Complete', priority: 'Medium' },
    { name: 'File D2', status: 'Incomplete', priority: 'Medium' }
  ];

  return (
    <div className="project-files-container">
      {project?.files.length > 0 ?
      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {project?.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            <strong>Role:</strong> {project?.role}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            <strong>Creation Date:</strong> {project?.creationDate}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            <strong>Status:</strong> {project?.status}
          </Typography>
        </CardContent>
      </Card> : ""}
      
      <Typography variant="h5" gutterBottom>
        Files
      </Typography>

      <TableContainer component={Paper} sx={{width: 'auto'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {(project?.files.length > 0 ? project.files : Files).map((file, index) => (
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
