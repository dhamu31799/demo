// components/ApplicationInfo.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Received',
      data: [12000, 19000, 3000, 5000, 2000, 3000, 7000, 15000, 10000, 12000, 19000, 24000],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
    },
    {
      label: 'Processed',
      data: [8000, 14000, 2000, 4500, 1500, 2500, 5000, 10000, 8000, 10000, 16000, 20000],
      fill: false,
      backgroundColor: 'rgba(153,102,255,0.4)',
      borderColor: 'rgba(153,102,255,1)',
    },
  ],
};

const ApplicationInfo = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Application's Info</Typography>
        <Line data={data} />
      </CardContent>
    </Card>
  );
};

export default ApplicationInfo;
