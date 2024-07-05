// components/InterviewsInfo.js
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Button,
} from "@mui/material";

const interviews = [
  {
    name: "John Smith",
    role: "Senior Python Developer",
    date: "10th Feb 2024, 10:30 AM",
    avatar: "/path/to/john-smith.jpg",
  },
  {
    name: "Maria",
    role: "Senior Python Developer",
    date: "10th Feb 2024, 10:30 AM",
    avatar: "/path/to/maria.jpg",
  },
];

const InterviewsInfo = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Today Interviews Meetings Info</Typography>
        <Grid container spacing={2}>
          {interviews.map((interview, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box display="flex" alignItems="center">
                <Avatar alt={interview.name} src={interview.avatar} />
                <Box ml={2}>
                  <Typography variant="body1">{interview.name}</Typography>
                  <Typography variant="body2">{interview.role}</Typography>
                  <Typography variant="body2">{interview.date}</Typography>
                  <Button variant="outlined">Join Meeting</Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InterviewsInfo;
