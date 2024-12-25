'use client'
import React, { useMemo } from 'react'
import "./Styles/globals.css";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import { darkTheme, lightTheme } from './theme'
import { useState } from "react";
import { grey, purple, teal } from '@mui/material/colors';
import Header from "./Components/Header";
import { Box } from '@mui/material';
import ThemeMode from './MyTheme';
import Intro from './Intro/page';
import { Flare, WidthFull } from '@mui/icons-material';

const drawerWidth = 240;

export default function RootLayout({ children }) {
  const [mode, setmyMode] = useState(localStorage.getItem("currentMode") === null ? "light" : localStorage.getItem("currentMode") === "light" ? "light" : "dark");
  const [DisplaySidebar, setDisplaySidebar] = useState("none");
  const [TypeSidebar, setTypeSidebar] = useState("permanent");
  const [loggin, setLoggin] = useState(true);


  const theme = useMemo(() => createTheme(ThemeMode(mode)), [mode]);
  const ShowSidebar = () => {
    setTypeSidebar("temporary")
    setDisplaySidebar("block")
  }
  const HideSidebar = () => {
    setTypeSidebar("permanent")
    setDisplaySidebar("none")
  }

  return (
    <html lang="en">
      <head>
        <title> Go Learn</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header setmyMode={setmyMode}
            drawerWidth={drawerWidth}
            ShowSidebar={ShowSidebar}
            setLoggin={setLoggin}
            loggin={loggin}
          />

          {
            loggin === true
              ?
              <div className="main-content">
                <SideBar
                  drawerWidth={drawerWidth}
                  DisplaySidebar={DisplaySidebar}
                  TypeSidebar={TypeSidebar}
                  HideSidebar={HideSidebar}
                />
                {/* <SideBar open={open} handleDrawerClose={handleDrawerClose} /> */}
                <Box
                  sx={{
                    mr: { sm: `${drawerWidth}px` },
                    display: 'flex',
                    justifyContent: 'center',
                  }} className="page-content">
                  {children}
                </Box>
                <Footer />
              </div>
              :
              <div>
                {/* <Intro />
                <Footer /> */}
                {children}
              </div>
          }

        </ThemeProvider>

      </body>
    </html>
  );
}
