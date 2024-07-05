import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Grid,
  StackDivider,
  Paper,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chartvalue from "../Chartvalue";
import Divider from "@mui/material/Divider";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Received",
      data: [
        2500, 3000, 2000, 3500, 2800, 4000, 3200, 4500, 3000, 3700, 3400, 3800,
      ],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
    {
      label: "Processed",
      data: [
        2000, 2500, 1500, 3000, 2300, 3500, 2700, 4000, 2500, 3200, 2900, 3300,
      ],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};

const ApplicationsChart = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <Paper style={{ height: "383px", width: "100%" }} elevation={3}>
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"row"}
        p={3}
      >
        <Typography variant="h6" color="initial">
          Application’s Info
        </Typography>

        <FormControl size="small" sx={{ minWidth: "100px" }}>
          <InputLabel id="demo-select-small-label">Month</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
            color="primary"
          >
            <MenuItem value={10}>Month</MenuItem>
            <MenuItem value={20}>Feb</MenuItem>
            <MenuItem value={30}>March</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Divider variant="middle" />
      <Chartvalue />
    </Paper>
  );
};

export default ApplicationsChart;
