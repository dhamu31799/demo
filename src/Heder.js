import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import headerimage from "./assets/header.png";
import avtimage from "./assets/images.png";
import "./header.css";
function Heder() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", position: "fixed", zIndex: 1000 }}
        >
          <Toolbar>
            <Stack
              justifyContent="space-between"
              alignItems={"center"}
              spacing={7}
              direction="row"
              width={"100vw"}
            >
              <Stack
                justifyContent="space-between"
                alignItems={"center"}
                spacing={7}
                direction="row"
              >
                <Typography variant="h6" component="div">
                  <img
                    src={headerimage}
                    style={{ height: 50, width: 200, objectFit: "contain" }}
                    alt="Logo"
                  />
                </Typography>
                <div className="search">
                  <input
                    type="text"
                    className="search__input"
                    placeholder="Search..."
                  />
                  <button className="search__button">
                    <svg
                      className="search__icon"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </Stack>

              <Stack
                justifyContent="space-between"
                alignItems={"center"}
                spacing={7}
                direction="row"
              >
                <IconButton style={{ color: "grey" }}>
                  <IoSunnyOutline style={{ fontSize: "25px" }} />
                </IconButton>
                <IconButton style={{ color: "grey" }}>
                  <HiOutlineDocumentArrowUp style={{ fontSize: "25px" }} />
                </IconButton>
                <IconButton style={{ color: "grey" }}>
                  <AiOutlineMessage style={{ fontSize: "25px" }} />
                </IconButton>
                <IconButton style={{ color: "grey" }}>
                  <IoIosNotificationsOutline style={{ fontSize: "25px" }} />
                </IconButton>
                <IconButton style={{ color: "grey" }}>
                  <IoSettingsOutline style={{ fontSize: "25px" }} />
                </IconButton>
                <Avatar alt="User Avatar" src={avtimage} style={{ maxWidth: "25px",maxHeight: "25px" }} />
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Heder;
