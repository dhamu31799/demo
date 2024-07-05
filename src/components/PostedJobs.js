// components/PostedJobs.js
import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const jobs = [
  "Python Developers",
  "Angular Developers",
  "Java Developers",
  "UX/UI Designers",
];

const PostedJobs = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Posted Jobs</Typography>
        <Grid container spacing={2}>
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="body1">{job}</Typography>
                  <Typography variant="body2">Senior Developers</Typography>
                  <Typography variant="h5">258</Typography>
                  <Typography variant="body2">Total Applicants</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PostedJobs;
