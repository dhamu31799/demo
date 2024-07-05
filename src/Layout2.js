// src/App.js
import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Box,
} from "@mui/material";

function Layout2() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h6" sx={{ marginBottom: 4 }}>
        Today Interviews Meetings Info
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <InterviewCard
            name="John Smith"
            position="Senior Python Developer"
            image="https://via.placeholder.com/100"
            date="19th Feb 2024"
            time="12:30 AM"
            interviewData={{
              firstLevel: "7/10",
              secondLevel: "8/10",
              meet: "Working",
              interviewer1: "Stella",
              interviewer2: "Smith",
              mode: "G-Meet",
              attendee: "Johnson",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InterviewCard
            name="Maria"
            position="Senior Python Developer"
            image="https://via.placeholder.com/100"
            date="19th Feb 2024"
            time="10:30 AM"
            interviewData={{
              firstLevel: "7/10",
              secondLevel: "8/10",
              meet: "Working",
              interviewer1: "Stephon",
              interviewer2: "Johnson",
              mode: "G-Meet",
              attendee: "Johnson",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

function InterviewCard({ name, position, image, date, time, interviewData }) {
  return (
    <Card sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", marginRight: 4 }}>
        <Avatar
          alt={name}
          src={image}
          sx={{ width: 100, height: 100, marginRight: 2 }}
        />
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {position}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
            <EventIcon date={date} time={time} />
          </Box>
        </Box>
      </Box>
      <Box>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <InterviewInfo label="1st Level" value={interviewData.firstLevel} />
          <InterviewInfo label="2nd Level" value={interviewData.secondLevel} />
          <InterviewInfo label="Meet" value={interviewData.meet} />
          <InterviewInfo
            label="Interviewer 1"
            value={interviewData.interviewer1}
          />
          <InterviewInfo
            label="Interviewer 2"
            value={interviewData.interviewer2}
          />
          <InterviewInfo label="Mode" value={interviewData.mode} />
          <InterviewInfo label="Attendee" value={interviewData.attendee} />
        </CardContent>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
        >
          <ActionButton label="Reschedule Meeting" variant="outlined" />
          <ActionButton label="Join Meeting" variant="contained" />
        </Box>
      </Box>
    </Card>
  );
}

function InterviewInfo({ label, value }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
    >
      <Typography variant="body2">{label}</Typography>
      <Typography variant="body2">{value}</Typography>
    </Box>
  );
}

function EventIcon({ date, time }) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="body2">{date}</Typography>
      <Typography variant="body2">{time}</Typography>
    </Box>
  );
}

function ActionButton({ label, variant }) {
  return (
    <Button variant={variant} sx={{ textTransform: "none" }}>
      {label}
    </Button>
  );
}

export default Layout2;
