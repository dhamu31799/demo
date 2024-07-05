import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { FaListCheck } from "react-icons/fa6";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { ImProfile } from "react-icons/im";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { FaHandsHelping } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";
import { AiOutlineProfile } from "react-icons/ai";

function Heder() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Box
        sx={{
          width: "70px",
          height: "100vh",
          borderRadius: "0px 18px 18px 0px",
          boxShadow: 3,
          backgroundColor: "#fafafa",
          // overflowY: 'auto',
          position: "fixed",
          top: 100,
          //    margin:2,
          left: 0,
          zIndex: 1000,
          opacity: 1,
        }}
        // role="presentation"
      >
        <List>
          <ListItem>
            <ListItemButton
              sx={{ justifyContent: "flex-start", paddingLeft: 1 }}
            >
              <ListItemIcon>
                <SpaceDashboardIcon color="primary"/>
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemButton
              sx={{ justifyContent: "flex-start", paddingLeft: 1 }}
            >
              <ListItemIcon>
                <AiOutlineProfile />
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <List>
            <ListItem>
              <ListItemButton
                sx={{ justifyContent: "flex-start", paddingLeft: 1 }}
              >
                <ListItemIcon>
                  <RiProfileFill />
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </List>

          <ListItem>
            <ListItemButton
              sx={{ justifyContent: "flex-start", paddingLeft: 1 }}
            >
              <ListItemIcon>
                <FaHandsHelping />
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton
              sx={{ justifyContent: "flex-start", paddingLeft: 1 }}
            >
              <ListItemIcon>
                <FaListCheck />
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton
              sx={{ justifyContent: "flex-start", paddingLeft: 1 }}
            >
              <ListItemIcon>
                <ImProfile />
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton
              sx={{ justifyContent: "flex-start", paddingLeft: 1 }}
            >
              <ListItemIcon>
                <SupportAgentIcon />
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton
              sx={{ justifyContent: "flex-start", paddingLeft: 1 }}
            >
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}

export default Heder;
