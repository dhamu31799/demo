// components/Dashboard.js
import React from "react";
import { Box, Grid } from "@mui/material";
import ApplicationInfo from "./ApplicationInfo";
import InterviewsInfo from "./InterviewsInfo";
import CandidateStatus from "./CandidateStatus";
import PostedJobs from "./PostedJobs";

const Dashboard = () => {
  return (
    <Box p={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ApplicationInfo />
        </Grid>
        <Grid item xs={12} md={6}>
          <InterviewsInfo />
        </Grid>
        <Grid item xs={12}>
          <PostedJobs />
        </Grid>
        <Grid item xs={12}>
          <CandidateStatus />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
