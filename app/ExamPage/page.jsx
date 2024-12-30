'use client';
import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';

const ExamPage = () => {
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAnswers({
            ...answers,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // هنا يمكنك إضافة المنطق لمعالجة الإجابات
        console.log('الإجابات:', answers);
    };

    return (
        <Container component="main" maxWidth="lg" sx={{ marginTop: '20px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                امتحان الدرس
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, textAlign: 'right' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6">السؤال 1: ما هو مفهوم البرمجة؟</Typography>
                        <TextField
                            fullWidth
                            name="question1"
                            value={answers.question1}
                            onChange={handleChange}
                            variant="outlined"
                            placeholder="أدخل إجابتك هنا"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">السؤال 2: اذكر بعض لغات البرمجة.</Typography>
                        <TextField
                            fullWidth
                            name="question2"
                            value={answers.question2}
                            onChange={handleChange}
                            variant="outlined"
                            placeholder="أدخل إجابتك هنا"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">السؤال 3: ما هو الفرق بين البرمجة الكائنية والبرمجة الإجرائية؟</Typography>
                        <TextField
                            fullWidth
                            name="question3"
                            value={answers.question3}
                            onChange={handleChange}
                            variant="outlined"
                            placeholder="أدخل إجابتك هنا"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            إرسال الإجابات
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ExamPage;