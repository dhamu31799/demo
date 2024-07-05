// components/CandidateStatus.js
import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';

const candidates = [
  { id: '#001', name: 'John Doe', position: 'Designer', levels: [6, 7, 3, null], total: 16, status: 'Active' },
  { id: '#002', name: 'Jane Smith', position: 'Angular Developer', levels: [6, 5, 8, null], total: 24, status: 'Hired' },
  // Add more candidates here
];

const CandidateStatus = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Candidate Status</Typography>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="body2">Job ID</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">Name</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">Position</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body2">1st Level</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body2">2nd Level</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body2">3rd Level</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body2">4th Level</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body2">Total Marks</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body2">Status</Typography>
          </Grid>
        </Grid>
        {candidates.map((candidate, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={2}>
              <Typography variant="body2">{candidate.id}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2">{candidate.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2">{candidate.position}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2">{candidate.levels[0]}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2">{candidate.levels[1]}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2">{candidate.levels[2]}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2">{candidate.levels[3]}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2">{candidate.total}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2">{candidate.status}</Typography>
            </Grid>
          </Grid>
        ))}
      </CardContent>
    </Card>
  );
};

export default CandidateStatus;
