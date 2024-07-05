import React from "react";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Grid,
  StackDivider,
  Paper,
} from "@mui/material";
import icon2 from "../assets/Group344.png";
import doll from "../assets/doll.png";

const NewAssessments = () => (
  <div
    style={{
      padding: "20px",
      color: "white",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      //   width: "711px",
      height: "383px",
      borderRadius: "10px 10px 10px 10px",
      opacity: "0px",
      background: "linear-gradient(74deg, #0A66C2 6.27%, #5994CE 90.96%)",
    }}
  >
    <Grid container spacing={3} pl={5}>
      <Grid item xs={5} style={{ position: "relative", top: "66px" }}>
        <Stack
          style={{ width: "125px", height: "125px" }}
          justifyContent={"center"}
          alignItems={"center"}
          component={Paper}
        >
          <img
            src={icon2}
            alt="kjs"
            style={{ width: "58.09px", height: "79px", objectFit: "contain" }}
          />
        </Stack>
        <Stack
          direction="column"
          justifyContent={"space-between"}
          alignItems={"start"}
          mt={4}
        >
          <h2 style={{ fontSize: "56px" }}>0033</h2>
          <p style={{ fontSize: "22px" }}>New Assessments</p>
        </Stack>
      </Grid>
      <Grid item xs={7}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          position={"relative"}
        >
          <Stack
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
          >
            <img
              src={doll}
              alt="kjs"
              style={{
                height: "160px",
                objectFit: "contain",
                position: "relative",
                left: "39px",
                top: "-55px",
              }}
            />

            <img
              src={doll}
              alt="kjs"
              style={{
                height: "346.7px",
                objectFit: "contain",
                position: "relative",
                top: "-66px",
              }}
            />
          </Stack>

          <button
            style={{
              backgroundColor: "white",
              color: "#000000",
              borderRadius: "4px",
              padding: "10px 20px",
              border: "none",
              position: "relative",
              top: "-64px",
              right: "-57px",
            }}
          >
            View Details
          </button>
        </Stack>
      </Grid>
    </Grid>
  </div>
);

export default NewAssessments;
