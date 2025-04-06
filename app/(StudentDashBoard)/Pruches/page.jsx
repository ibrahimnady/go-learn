'use client'
import React from 'react'
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import Link from 'next/link';
import Grid from '@mui/material/Grid2';
import Contant from '../../Contant/page';

const Pruches = () => {
    const theme = useTheme();
    return (
        <div style={{ width: '100%', }}>
            <head>
                <title>Go Learn | Pruches </title>
            </head>
            <Contant/>
           
        </div>
    )
}

export default Pruches