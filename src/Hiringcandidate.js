
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import av1 from "./assets/ava1.jpg"
import av2 from "./assets/av4.jpg"
import av3 from "./assets/images.png"
function Hiringcandidate() {
  return (
    <div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <div>
      <h6>Activity</h6>
      </div>
      <div>
     <a href='#'>View All</a>
      </div>
    </div>
       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={av1} />
      </ListItemAvatar>
      <ListItemText
        primary="John Doe "
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
            [Python Devloper]
            </Typography>
            {"Hired By: Stella"}
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={av1} />
      </ListItemAvatar>
      <ListItemText
        primary="John Doe"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
            Senior Python Devloper
            </Typography>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
          Hired By: Stella
            </Typography>
         
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={av1} />
      </ListItemAvatar>
      <ListItemText
        primary="John Doe "
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
            [ Senior Python Devloper]
            </Typography>
            {"Hired By: Stella"}
          </React.Fragment>
        }
      />
    </ListItem>
  </List>
  </div>
  )
}

export default Hiringcandidate