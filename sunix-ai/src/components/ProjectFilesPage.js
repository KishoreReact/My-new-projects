import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import '../styles/ProjectFilesPage.css';

function ProjectFilesPage({ project }) {
  return (
    <div className="project-files-container">
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
      </Card>
      
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
