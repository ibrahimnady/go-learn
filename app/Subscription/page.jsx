"use client"
import React from 'react'
import { Box, Button, Typography, useTheme } from '@mui/material'

function Subscription() {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#1976d2',
                    padding: 4,
                    borderRadius: 4,
                    color: 'white',
                    textAlign: 'center',
                    maxWidth: 600,
                    margin: '0 auto',
                    mt: 4
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                    {/* <img src="https://via.placeholder.com/300" alt="Student" style={{ width: 100, height: 100 }} /> */}
                </Box>

                <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
                    كن مستعد للتفوق في دراستك!
                </Typography>

                <Typography variant="h6" sx={{ mb: 4 }}>
                    تعلم وارفع معدّلك من خلال فيديوهات تشرح موادك الدراسية واختبارات قوية مع أفضل المعلمين
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            color: theme.palette.text.primary,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.main,
                                color: '#fff'
                            },
                            fontSize: '1.1rem',
                            py: 1.5
                        }}
                    // startIcon={<span style={{ marginLeft: 8 }}>🔑</span>}
                    >
                        اشحن محفظتك الان
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default Subscription;
