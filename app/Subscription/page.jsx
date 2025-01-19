import { Box, Button, Typography, useTheme } from '@mui/material'

import React from 'react'

function Subscription() {
    const theme = useTheme();
    return (
        <div>
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
                            backgroundColor: theme.palette.background.bgSubscrbtion,
                            color: theme.palette.Text.TXTSubscrbtion,
                            '&:hover': {
                                backgroundColor: '#ffed4a',
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
        </div>
    )
}

export default Subscription
