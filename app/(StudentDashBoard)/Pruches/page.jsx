'use client'
import React from 'react'
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import Link from 'next/link';
import Grid from '@mui/material/Grid2';

const Pruches = () => {
    const theme = useTheme();
    return (
        <div>
            <head>
                <title>Go Learn | Pruches </title>
            </head>
            <Grid container spacing={2} justifyContent="center" alignItems="center"
                sx={{ marginTop: '80px', }}>
                <div>hello Pruches</div>
            </Grid>
        </div>
    )
}

export default Pruches