import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/TablePage.css';

const rows = [
  { name: 'Project A', role: 'Admin', creationDate: '2023-07-01', status: 'Active', files: [
    { name: 'File A1', status: 'Complete', priority: 'High' },
    { name: 'File A2', status: 'Incomplete', priority: 'Low' }
  ]},
  { name: 'Project B', role: 'User', creationDate: '2023-07-10', status: 'Inactive', files: [
    { name: 'File B1', status: 'Complete', priority: 'Medium' },
    { name: 'File B2', status: 'Incomplete', priority: 'High' }
  ]}
  // Add more rows as needed
];

function TablePage() {
  const navigate = useNavigate();

  const handleRowClick = (project) => {
    navigate('/projects', { state: { project } });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Creation Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} onClick={() => handleRowClick(row)}>
              <TableCell>
                <span className="link-text">{row.name}</span>
              </TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.creationDate}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablePage;
