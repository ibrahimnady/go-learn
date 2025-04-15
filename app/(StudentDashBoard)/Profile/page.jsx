'use client'
import React, { useState } from 'react'
import { Card, CardContent, Typography, Box, useTheme, TextField, Button, Autocomplete, Container, Avatar } from '@mui/material';
import Link from 'next/link';
import Grid from '@mui/material/Grid2';


const Profile = () => {
    const [name, setName] = useState('');
    const [governorate, setGovernorate] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');

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
    const educationSections = ['علمي', 'علمي علوم', 'علمي رياضة', 'أدبي'];
    const [profileImage, setProfileImage] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };
    const theme = useTheme();
    return (
        <div>
            
                <title>Go Learn | Profile </title>
            
            <Container component="main" maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 8,

                    }}
                >
                    {/* <Avatar variant="h1" sx={{ m: 1, bgcolor: 'secondary.main', width: 80, height: 80 }} /> */}
                    <label htmlFor="profile-image-upload">
                        <input
                            id="profile-image-upload"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                        <Avatar
                            src={profileImage}
                            alt="Profile"
                            sx={{ m: 1, bgcolor: 'secondary.main', width: 120, height: 120, cursor: 'pointer' }}
                        />
                    </label>

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
                                    options={
                                        educationType === 'الأزهر' && (academicYear === 'ثاني ثانوي' || academicYear === 'ثالث ثانوي')
                                            ? ['علمي', 'أدبي'] // الأزهر: ثاني ثانوي أو ثالث ثانوي
                                            : educationType === 'تربية وتعليم' && academicYear === 'أولي ثانوي'
                                                ? ['علمي', 'أدبي'] // تربية وتعليم: أولى ثانوي
                                                : educationType === 'تربية وتعليم' && (academicYear === 'ثاني ثانوي' || academicYear === 'ثالث ثانوي')
                                                    ? ['علمي علوم', 'علمي رياضة', 'أدبي'] // تربية وتعليم: ثاني ثانوي أو ثالث ثانوي
                                                    : []  // الخيارات الافتراضية
                                    }
                                    renderInput={(params) => (
                                        <TextField {...params} label="نوع القسم" margin="normal" required fullWidth />
                                    )}
                                    value={sectionType}
                                    onChange={(event, newValue) => setSectionType(newValue)}
                                    disabled={
                                        !educationType || // تعطيل إذا لم يتم اختيار نوع التعليم
                                        !academicYear || // تعطيل إذا لم يتم اختيار السنة الدراسية
                                        academicYear === 'أولي إعدادي' || // تعطيل إذا كانت السنة أولي إعدادي
                                        academicYear === 'ثاني إعدادي' || // تعطيل إذا كانت السنة ثاني إعدادي
                                        academicYear === 'ثالث إعدادي' // تعطيل إذا كانت السنة ثالث إعدادي
                                    }
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
                                حفظ
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Profile