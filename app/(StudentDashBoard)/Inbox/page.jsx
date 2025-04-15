'use client'
import React from 'react'
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import Link from 'next/link';
import Grid from '@mui/material/Grid2';

const Inbox = () => {
    const theme = useTheme();
    return (
        <div>
            
                <title>Go Learn | Inbox </title>
            
            <Grid container spacing={2} justifyContent="center" alignItems="center"
                sx={{ marginTop: '80px', }}>
                <div>hello inbox</div>
            </Grid>
        </div>
    )
}

export default Inbox