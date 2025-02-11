'use client'
import React, { useEffect, useMemo } from 'react'
import { Inter, Cairo } from 'next/font/google';
import "./Styles/globals.css";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import Header from "./Components/Header";
import { Box } from '@mui/material';
import ThemeMode from './MyTheme';
import { useRouter } from 'next/navigation';
import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './page';
import Subjects from './Subjects/page';


const drawerWidth = 240;
const cairo = Cairo({
  subsets: ['latin'],
  weight: ['400', '700'], // يمكنك تحديد الأوزان التي تريدها
});


export default function RootLayout({ children }) {

  const router = useRouter();
  // const [mode, setmyMode] = useState("dark");
  // const [mode, setmyMode] = useState(localStorage.getItem("currentMode") === null ? "light" : localStorage.getItem("currentMode") === "light" ? "light" : "dark");
  const [mode, setmyMode] = useState(() => {
    try {
      const storedMode = localStorage.getItem("currentMode");
      return storedMode !== null ? storedMode : "light";
    } catch (error) {
      // console.error(error);
      return "light";
    }
  });
  // const [loggin, setLoggin] = useState("fales");
  // const [loggin, setLoggin] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [loggin, setLoggin] = useState(() => {
    try {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      return isLoggedIn !== null && isLoggedIn === "true" ? true : false;
    } catch (error) {
      // console.error(error);
      return false;
    }
  });
  // useEffect(() => {
  //   if (loggin === false) {
  //     router.push('/Intro'); // إعادة التوجيه إلى صفحة Intro بعد تسجيل الخروج
  //   }
  // }, [loggin]);

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
    <html lang="ar" className={cairo.className}>
      <head>
        <title>Go Learn</title>
      </head>
      <body>
        <Provider store={store}>
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
                    setLoggin={setLoggin}
                    loggin={loggin}
                  />
                  <Box
                    sx={{
                      mr: { sm: `${drawerWidth}px` },
                      display: 'flex',
                      justifyContent: 'center',
                    }} >
                    {children}
                    
                  </Box>
                </div>
                :
                <div className="main-content">
                  <Box
                    sx={{
                      // mr: { sm: `${drawerWidth}px` },
                      // display: 'flex',
                      marginBottom: 5
                    }}>
                    <Home />
                    {/* {children} */}
                  </Box>
                  <div className="footer-container">
                    <Footer />
                  </div>
                  {/* <Login/> */}
                </div>
            }
          </ThemeProvider>
        </Provider>

      </body>
    </html>
  );
}
