import React from 'react'
import {
    Container, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, Button, TextField, IconButton, Box
  } from '@mui/material';
  import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
  
    Row,
    Col,
  } from "reactstrap";
  import SearchIcon from '@mui/icons-material/Search';
  import FilterListIcon from '@mui/icons-material/FilterList';
import './Table.css'
function Tablevalue() {
    const candidateData = [
        { jobId: '#001', name: 'John Doe', position: 'Designer', levels: [5, 7, 3], total: '...', status: 'Active' },
        { jobId: '#002', name: 'John Smith', position: 'Angular Developer', levels: [5, 5, 10], total: '24/40', status: 'Hired' },
        { jobId: '#003', name: 'Johnson Smith', position: 'Python Developer', levels: [6, 7, 3], total: '...', status: 'Active' },
        { jobId: '#004', name: 'Stela', position: 'Android Developer', levels: [2, 5, 0], total: '8/40', status: 'Reject' },
        { jobId: '#005', name: 'Randy', position: 'iOS Developer', levels: [5, 7, 3], total: '...', status: 'Active' },
        { jobId: '#006', name: 'John Doe', position: 'Junior Designer', levels: [6, 7, 3], total: '...', status: 'Active' },
      ];
  return (
    <div>
        <Card>
            <CardBody>
            <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <h2>Candidate Status</h2>
        <Button variant="text">View All</Button>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Job ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>1st Level</TableCell>
              <TableCell>2nd Level</TableCell>
              <TableCell>3rd Level</TableCell>
              <TableCell>4th Level</TableCell>
              <TableCell>Total Marks</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidateData.map((candidate) => (
              <TableRow key={candidate.jobId}>
                <TableCell>{candidate.jobId}</TableCell>
                <TableCell>{candidate.name}</TableCell>
                <TableCell>{candidate.position}</TableCell>
                <TableCell>{candidate.levels[0]}/10</TableCell>
                <TableCell>{candidate.levels[1]}/10</TableCell>
                <TableCell>{candidate.levels[2]}/10</TableCell>
                <TableCell>...</TableCell>
                <TableCell>{candidate.total}</TableCell>
                <TableCell>
                  <Button variant="contained" color={candidate.status === 'Active' ? 'primary' : candidate.status === 'Hired' ? 'success' : 'error'}>
                    {candidate.status}
                  </Button>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
            </CardBody>
        </Card>
      
    </div>
  )
}

export default Tablevalue