'use client';
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const VideoPage = () => {
    return (
        <div style={{width: "100%"}}>
                <title>Go Learn | Video</title>
            <Container component="main" maxWidth="lg" sx={{ marginTop: '65px' }}>
                <Typography sx={{ marginTop: '65px', textAlign: "center" }} variant="h4" component="h1" gutterBottom>
                    اسم الدرس
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                    <video
                        controls
                        style={{ width: '100%', maxWidth: '800px' }}
                        src="https://www.example.com/path/to/your/video.mp4" // استبدل هذا بالرابط الخاص بالفيديو
                        alt="وصف الفيديو"
                    >
                        Your browser does not support the video tag.
                    </video>
                </Box>
            </Container>
        </div>
    );
};

export default VideoPage;