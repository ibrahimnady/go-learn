'use client'
import React from 'react';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import BiotechIcon from '@mui/icons-material/Biotech'; // أيقونة الفيزياء
import ScienceIcon from '@mui/icons-material/Science'; // أيقونة الكيمياء
import Diversity2Icon from '@mui/icons-material/Diversity2'; // أيقونة الأحياء
import EnglishIcon from '@mui/icons-material/Language'; // أيقونة الإنجليزي
import ArabicIcon from '@mui/icons-material/Translate'; // أيقونة العربي
import ReligionIcon from '@mui/icons-material/Book'; // أيقونة الدين
import EngineeringIcon from '@mui/icons-material/Engineering'; // أيقونة الهندسة
import AlgebraIcon from '@mui/icons-material/Functions'; // أيقونة الجبر
import HistoryIcon from '@mui/icons-material/History'; // أيقونة التاريخ
import GeographyIcon from '@mui/icons-material/Map'; // أيقونة الجغرافيا
import Link from 'next/link';
import Grid from '@mui/material/Grid2';

const subjects = [
    { name: "فيزياء", icon: <BiotechIcon /> },
    { name: "كيمياء", icon: <ScienceIcon /> },
    { name: "أحياء", icon: <Diversity2Icon /> },
    { name: "إنجليزي", icon: <EnglishIcon /> },
    { name: "عربي", icon: <ArabicIcon /> },
    { name: "دين", icon: <ReligionIcon /> },
    { name: "هندسة", icon: <EngineeringIcon /> },
    { name: "جبر", icon: <AlgebraIcon /> },
    { name: "تاريخ", icon: <HistoryIcon /> },
    { name: "جغرافيا", icon: <GeographyIcon /> },
];



const Subjects = () => {
    const theme = useTheme();
    return (

        <div>

                <title>Go Learn | Subjects</title>

            {/* <Typography sx={{ marginTop: '80px',textAlign: "center"}} variant="h1" color="">test</Typography> */}
            <Grid container spacing={2} justifyContent="center" alignItems="center"
                sx={{ marginTop: '80px', }}>
                {subjects.map((subject, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={index}>
                        <Link href="/Teachers">
                            <Card
                                sx={{
                                    backgroundColor: theme.palette.background.bgCardSubjects,
                                    color: theme.palette.Text.TXTCardSubjects,
                                    borderRadius: '16px',
                                    // border:"solid",
                                    width: '100%',
                                    height: '300px',
                                    display: 'grid',
                                    placeItems: 'center',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    transition: '0.5s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                                        // backgroundColor: "#ffff",

                                    }
                                }}
                            >
                                <CardContent sx={{ textAlign: 'center' }} >
                                    {React.cloneElement(subject.icon, { fontSize: 'large', sx: { fontSize: '60px' } })}
                                    <Typography variant="h2" component="div" sx={{ marginTop: 1, textAlign: 'center' }}>
                                        {subject.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Subjects;