import Sidebar from "./sidebar";
import Heder from "./Heder";

import Calender from "./Calender";

import Lists from "./lists";


import Header from "./components/Header";
import ApplicationsChart from "./components/ApplicationsChart";
import NewAssessments from "./components/NewAssessments";
import InterviewCard from "./Interviewcard";
import Tablevalue from "./Tablevalue";
import Hiringcandidate from './Hiringcandidate'
import Task from "./Task"
import Upcomingevent from "./Upcomingevent";
import {

  Row,
  Col,
} from "reactstrap";

import {

  Stack,
  Typography,

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
            <Col md="8">
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

              <Task/>
              <Tablevalue/>
            </Col>
            <Col md="4">
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
                  <Upcomingevent/>
                  <Lists />
                  <Hiringcandidate />
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
