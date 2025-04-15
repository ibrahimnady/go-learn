'use client'
import React, { useEffect, useState } from 'react'
import "./Styles/globals.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ThemeMode from "./utils/MyTheme";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./redux/store";
import Cookies from "js-cookie";
import { setTheme } from "./redux/slices/themeSlice";
import Header from './Components/Header';
import { Box } from '@mui/material';
import Footer from './Components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <title>Go Learn</title>
      </head>
      <body>
        <Provider store={store}>
          <ReduxWrapper>{children}</ReduxWrapper>
        </Provider>
      </body>
    </html>
  );
}

function ReduxWrapper({ children }) {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode); // قراءة الثيم من Redux
  const [isClient, setIsClient] = useState(false); // حالة لتحديد إذا كان العميل قد تم تحميله
  const theme = createTheme(ThemeMode(mode)); // إنشاء الثيم بناءً على الوضع الحالي
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn); // قراءة حالة تسجيل الدخول من Redux
  useEffect(() => {
    setIsClient(true); // تعيين أن العميل قد تم تحميله
    const savedMode = Cookies.get("themeMode") || "light";
    dispatch(setTheme(savedMode)); // تحديث الثيم في Redux بناءً على الكوكيز
  }, [dispatch]);
  if (!isClient) {
    // أثناء SSR، قم بإرجاع مكون فارغ أو حالة تحميل
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
        <div className="">
          <Box sx={{mb:5}}>
          {children}
          </Box>
          {!isLoggedIn ? (
            <Footer/>
          ):(null)}
        </div>
    </ThemeProvider>
  );
}