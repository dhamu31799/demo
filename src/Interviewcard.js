import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import person from "./assets/p1.jpg";
import { IoMdTime } from "react-icons/io";

function InterviewCard() {
  return (
    <div style={{ width: 900, alignItems: "center" }}>
      <Row>
        <Col md="12">
          <table
            style={{
              width: "100%",
              textAlign: "center",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td
                  colSpan="2"
                  rowSpan="4"
                  style={{
                    textAlign: "center",
                    border: "1px solid #80808042",
                    padding: "20px",
                  }}
                >
                  <img
                    src={person}
                    alt="Profile"
                    className="rounded-circle img-fluid"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      border: "1px solid skyblue",
                    }}
                  />
                  <CardTitle tag="h5" className="my-2">
                    John Smith
                  </CardTitle>
                  <CardSubtitle className="my-2 text-muted">
                    Senior Python Developer
                  </CardSubtitle>
                </td>
                <td style={{ border: "1px solid #80808042" }}>
                  <strong>1st Level:</strong> 7/10
                </td>
                <td style={{ border: "1px solid #80808042" }}>
                  <strong>Interviewer:</strong> Stella
                </td>
              </tr>

              <tr colSpan="2">
                <td style={{ border: "1px solid #80808042" }}>
                  <strong>2nd Level:</strong> 6/10
                </td>
                <td style={{ border: "1px solid #80808042" }}>
                  <strong>Interviewer:</strong> Smith
                </td>
              </tr>

              <tr colSpan="2">
                <td style={{ border: "1px solid #80808042" }}>
                  <strong>3rd Level:</strong> Waiting
                </td>
                <td style={{ border: "1px solid #80808042" }}>
                  <strong>Interviewer:</strong> <a href="#">Stephan</a>
                </td>
              </tr>

              <tr colSpan="2">
                <td style={{ border: "1px solid #80808042" }}>
                  <strong>Meet Via:</strong> G-Meet
                </td>
                <td style={{ border: "1px solid #80808042" }}>
                  <strong>Attendees:</strong> Johnson
                </td>
              </tr>

              <tr>
                <td
                  colSpan="1"
                  style={{
                    textAlign: "center",
                    border: "1px solid #80808042",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <CalendarTodayIcon style={{ color: "skyblue" }} />
                      <p style={{ color: "skyblue" }}>19 Feb 2024</p>
                    </div>
                  </div>
                </td>
                <td
                  colSpan="1"
                  style={{
                    textAlign: "center",
                    border: "1px solid #80808042",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div>
                      <IoMdTime style={{ color: "skyblue" }} />
                      <p style={{ color: "skyblue" }}>10:30 AM</p>
                    </div>
                  </div>
                </td>
                <td
                  colSpan="2"
                  rowSpan="2"
                  style={{
                    textAlign: "center",
                    border: "1px solid #80808042",
                  }}
                >
                  <Button color="primary" className="m-3">
                    Join Meeting
                  </Button>
                  <Button color="secondary" className="m-3">
                    Reschedule Meeting
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
}

export default InterviewCard;
