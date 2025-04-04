'use client'
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Autocomplete } from '@mui/material';
import Link from 'next/link';
import Grid from '@mui/material/Grid2';
function Register() {
    const [name, setName] = useState('');
    const [governorate, setGovernorate] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [guardianNumber, setGuardianNumber] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [educationType, setEducationType] = useState('');
    const [academicYear, setAcademicYear] = useState('');
    const [sectionType, setSectionType] = useState('');

    const governorates = ['القاهرة', 'الجيزة', 'الإسكندرية', 'أسوان', 'الإسماعيلية'];
    const educationTypes = ['الأزهر', 'تربية وتعليم'];
    const academicYears = ['أولي إعدادي', 'ثاني إعدادي', 'ثالث إعدادي', 'أولي ثانوي', 'ثاني ثانوي', 'ثالث ثانوي'];
    const azharSections = ['علمي', 'أدبي'];
    const educationSections = ['علمي علوم', 'علمي رياضة', 'أدبي'];

    return (
        <div>
            <head>
                <title>Go Learn | Register</title>
            </head>
            <Container component="main" maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 8,
                    }}
                >
                    <Typography component="h1" variant="h5">
                        تسجيل طالب جديد
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="الاسم ثلاثي"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <Autocomplete
                                    options={governorates}
                                    renderInput={(params) => (
                                        <TextField {...params} label="المحافظة" margin="normal" required fullWidth />
                                    )}
                                    value={governorate}
                                    onChange={(event, newValue) => setGovernorate(newValue)}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="العنوان"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="رقم الموبيل"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="البريد الإلكتروني"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="كلمة المرور"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="العمر"
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="رقم ولي الأمر"
                                    value={guardianNumber}
                                    onChange={(e) => setGuardianNumber(e.target.value)}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="اسم المدرسة"
                                    value={schoolName}
                                    onChange={(e) => setSchoolName(e.target.value)}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <Autocomplete
                                    options={educationTypes}
                                    renderInput={(params) => (
                                        <TextField {...params} label="نوع التعليم" margin="normal" required fullWidth />
                                    )}
                                    value={educationType}
                                    onChange={(event, newValue) => {
                                        setEducationType(newValue);
                                        setSectionType(''); // Reset section type when education type changes
                                    }}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <Autocomplete
                                    options={academicYears}
                                    renderInput={(params) => (
                                        <TextField {...params} label="السنة الدراسية" margin="normal" required fullWidth />
                                    )}
                                    value={academicYear}
                                    onChange={(event, newValue) => setAcademicYear(newValue)}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <Autocomplete
                                    options={educationType === 'الأزهر' && academicYear.includes('ثانوي') ? azharSections :
                                        educationType === 'تربية وتعليم' && academicYear.includes('ثانوي') ? educationSections : []}
                                    renderInput={(params) => (
                                        <TextField {...params} label="نوع القسم" margin="normal" required fullWidth />
                                    )}
                                    value={sectionType}
                                    onChange={(event, newValue) => setSectionType(newValue)}
                                    disabled={!educationType}
                                />
                            </Grid>
                        </Grid>
                        <Link href="/Login">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                تسجيل
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Register;