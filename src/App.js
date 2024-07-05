import Sidebar from "./sidebar";
import Heder from "./Heder";
import Chartvalue from "./Chartvalue";
import Assignmetcard from "./Assignmetcard";
import Interviewcard from "./Interviewcard";
import Calender from "./Calender";
import JobDashboard from "./JobCard";
import Lists from "./lists";
import Layout2 from "./Layout2";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import ApplicationsChart from "./components/ApplicationsChart";
import NewAssessments from "./components/NewAssessments";
import InterviewCard from "./Interviewcard";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";

import {
  CardContent,
  Stack,
  Typography,
  Grid,
  StackDivider,
  Paper,
} from "@mui/material";

function App() {
  return (
    <div>
      <Heder />
      <Sidebar />
      <div style={{ paddingTop: "97px", paddingLeft: "98px" }}>
        <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
          <Header />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "50px",
            }}
          >
            <div>
              <ApplicationsChart />
            </div>
            <div>
              <NewAssessments />
            </div>
          </div>
          <Row style={{ marginTop: "50px" }}>
            <Col md="9">
              <Paper elevation={3} p={3}>
                <Stack
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  direction={"row"}
                  m={3}
                  p={3}
                  sx={{ borderBottom: "1px solid lightgrey" }}
                >
                  <Typography variant="h6" color="initial">
                    Today Interviews Meetings Info
                  </Typography>
                </Stack>{" "}
                <div
                  style={{
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    padding: "30px",
                    margin:'10px'
                  }}
                >
                  <div style={{ display: "inline-block", marginRight: "20px" }}>
                    <InterviewCard />
                  </div>
                  <div style={{ display: "inline-block", marginRight: "20px" }}>
                    <InterviewCard />
                  </div>
                </div>
              </Paper>
            </Col>
            <Col md="3">
              <Paper
                style={{  width: "100%" }}
                elevation={3}
                p={3}
              >
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  direction={"column"}
                  spacing={3}
                  m={3}
                  p={3}
                  sx={{ borderBottom: "1px solid lightgrey" }}
                >
                  <Calender />
                  <Lists />
                </Stack>
              </Paper>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
