import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Grid,
  AppBar,
  Box,
  IconButton,
  InputBase,
  Paper,
  Badge,Stack
} from '@mui/material';
import { Search as SearchIcon, FilterList as FilterListIcon } from '@mui/icons-material';
import Python from './assets/Python.png'
import java from './assets/java.png'
import Angular from './assets/angularjs.png'
import Uiux from './assets/ux-design.png'
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
};

const JobCard = ({ title,image, number,color,texcolor, applicants, lastMonthChange, timeAgo }) => (
  <Card style={{ minWidth: 275, margin: 16 }}>
    <CardContent>
    <Stack
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  direction={"row"}
                
                  p={2}
                  sx={{ borderBottom: "1px solid lightgrey" }}
                >
                     <img src={image} style={{height:'25px',width:'25px,',objectFit:'contain'}} />
      <Typography variant="subtitle2" component="h2">
        {title}
      </Typography>
      <Typography color="textSecondary">
        {number}
      </Typography>
                </Stack>{" "}
     
                <Stack
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  direction={"column"}
                
                 spacing={3}
                
                >
                 
      <Typography variant="body2" component="p" style={{ marginTop: 16 }}>
        Senior Developers
      </Typography>
    
      <Stack
          style={{ width: "125px", height: "125px" }}
          justifyContent={"center"}
          alignItems={"center"}
          component={Paper}
          sx={{ bgcolor: "#73A1FB" }}
        >
           <p style={{ fontSize: "56px" ,  color:'#fafafa' }}>{applicants}</p>
        </Stack>
      <Typography color="textSecondary">
        Total Applicants
      </Typography>
      </Stack>
      <Box display="flex" justifyContent="space-between" style={{ marginTop: 16, borderTop: "1px solid lightgrey"  }}>
        <Typography variant="body2" color="primary">
          ↑ {lastMonthChange}% vs last month
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {timeAgo} ago
        </Typography>
      </Box>
      
    </CardContent>
  </Card>
);

const PostedJobs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Posted Jobs
      </Typography>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} aria-label="job tabs">
          <Tab label="Active Jobs" />
          <Tab label="Inactive Jobs" />
          <Tab label="Completed Jobs" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
         
            <JobCard
              title="Python Developers"
              number="#001"
              applicants="258"
              image={Python}
              lastMonthChange="28"
              timeAgo="6 mins"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <JobCard
              title="Angular Developers"
              number="#002"
              applicants="258"
              lastMonthChange="28"       image={Angular}
              timeAgo="6 mins"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <JobCard
              title="Java Developers"
              number="#003"
              applicants="258"
              image={java}
              lastMonthChange="28"
              timeAgo="6 mins"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <JobCard
              title="UX/UI Designers"
              number="#004"
              image={Uiux}
              applicants="258"
              lastMonthChange="28"
              timeAgo="6 mins"
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Inactive Jobs</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Completed Jobs</Typography>
      </TabPanel>
      <Paper component="form" style={{ display: 'flex', alignItems: 'center', marginTop: 16 }}>
        <InputBase
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          style={{ marginLeft: 8, flex: 1 }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <IconButton aria-label="filters">
          <Badge badgeContent={4} color="primary">
            <FilterListIcon />
          </Badge>
        </IconButton>
      </Paper>
    </Box>
  );
};

export default PostedJobs;
