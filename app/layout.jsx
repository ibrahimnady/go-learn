'use client'
import React, { useMemo } from 'react'
import "./Styles/globals.css";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import Header from "./Components/Header";
import { Box } from '@mui/material';
import ThemeMode from './MyTheme';
import Login from './Login/page';
import Intro from './Intro/page';
import Grid from '@mui/material/Grid2';

const drawerWidth = 240;



export default function RootLayout({ children }) {
  const [mode, setmyMode] = useState("dark");
  // const [mode, setmyMode] = useState("localStorage.getItem("currentMode") === null ? "light" : localStorage.getItem("currentMode") === "light" ? "light" : "dark"");
  const [loggin, setLoggin] = useState("fales");
  // const [loggin, setLoggin] = useState("localStorage.getItem("isLoggedIn") === "true"");
  const [DisplaySidebar, setDisplaySidebar] = useState("none");
  const [TypeSidebar, setTypeSidebar] = useState("permanent");
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
    <html lang="ar">
      <head>
        <title>Go Learn</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header
            setmyMode={setmyMode}
            drawerWidth={drawerWidth}
            ShowSidebar={ShowSidebar}
            setLoggin={setLoggin}
            loggin={loggin}
            DisplaySidebar={DisplaySidebar}

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
                <Box
                  sx={{
                    mr: { sm: `${drawerWidth}px` },
                    display: 'flex',
                    justifyContent: 'center',
                  }} >
                  {children}
                </Box>
                {/* <Footer /> */}
              </div>
              :
              <div className="main-content">
                {/* <Footer />  */}
                <Box
                  sx={{
                    // mr: { sm: `${drawerWidth}px` },
                    // display: 'flex',
                    marginBottom: 5



                  }}>
                  {children}
                </Box>
                <div className="footer-container">

                  <Footer />
                </div>
                {/* <Login/> */}
              </div>
          }
        </ThemeProvider>

      </body>
    </html>
  );
}
