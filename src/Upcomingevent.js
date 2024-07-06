import React from 'react'
import { Grid, Card, CardContent, Typography, Button, Avatar } from '@mui/material';

const interviews = [
    { date: '07', month: 'Feb', title: 'Interview with Designer', createdBy: 'Stella', time: '10 A.M to 11 A.M' },
    { date: '07', month: 'Feb', title: 'Interview with PMO', createdBy: 'Stephan', time: '10 A.M to 11 A.M' },
    { date: '07', month: 'Feb', title: 'Interview with Net. Admin', createdBy: 'Stella', time: '10 A.M to 11 A.M' },
  ];
  
  const InterviewCard = ({ interview }) => (
    <Card style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '600px', marginBottom: '10px', padding: '10px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '15px' }}>
      <Avatar style={{ backgroundColor: '#E0E0E0', color: '#000', marginBottom: '5px', width: 50, height: 50 }}>{interview.date}</Avatar>
      <Typography variant="body2">{interview.month}</Typography>
    </div>
    <CardContent style={{ flex: '1 0 auto' }}>
      <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{interview.title}</Typography>
      <Typography variant="body2" color="textSecondary">Created by <span style={{ color: '#007BFF' }}>{interview.createdBy}</span></Typography>
      <Typography variant="body2" color="textSecondary">{interview.time}</Typography>
    </CardContent>
    <div style={{ marginLeft: 'auto' }}>
      <Button variant="contained" color="primary">Details</Button>
    </div>
  </Card>
  );
function Upcomingevent() {
    
  return (
    <div style={{ padding: '20px' }}>
    <Grid container justifyContent="space-between" alignItems="center">
      <Typography variant="h5">Upcomings</Typography>
      <Button color="primary">View All</Button>
    </Grid>
    <Grid container direction="column">
      {interviews.map((interview, index) => (
        <InterviewCard key={index} interview={interview} />
      ))}
    </Grid>
  </div>
  )
}

export default Upcomingevent