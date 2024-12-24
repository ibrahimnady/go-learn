import React from 'react'
import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1DA1F2',
        },
        background: {
            default: '#E1E8ED',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#000000',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1DA1F2',
        },
        background: {
            default: '#1A202C',
            paper: '#121212',
        },
        text: {
            primary: '#FFFFFF',
        },
    },
});

export { lightTheme, darkTheme };
