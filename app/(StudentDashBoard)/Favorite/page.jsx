'use client'
import React from 'react'
import { Card, CardContent, Typography, CardMedia, Rating, Button, useTheme } from '@mui/material';
import profileTeacher from '/Public/profileTeacher.png';
import profileTeacher2 from '/Public/profileTeacher2.jpg';
import profileTeacher3 from '/Public/profileTeacher3.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Grid from '@mui/material/Grid2';



const teachers = [
    // يمكنك إضافة المزيد من المدرسين هنا
    {
        name: 'أحمد محمد',
        price: 'EGP 100',
        lectures: 10,
        image: profileTeacher,
        rating: 4,
    },
    {
        name: 'ابراهيم احمد',
        price: 'EGP 100',
        lectures: 12,
        image: profileTeacher2,
        rating: 5,
    },
    {
        name: 'محمد سعيد',
        price: 'EGP 100',
        lectures: 8,
        image: profileTeacher3,
        rating: 3,
    },
    {
        name: 'عصام علي ',
        price: 'EGP 100',
        lectures: 15,
        image: profileTeacher,
        rating: 4.5,
    },
    
    
];
const Favorite = () => {
    const theme = useTheme();
    return (
        <div>
            <head>
                <title>Go Learn | Favorite </title>
            </head>
            <Grid container spacing={2} style={{ padding: '20px', marginTop: '50px' }}>

        
                    {teachers.map((teacher, index) => (
                        <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 3 }} key={index}>
                            <Card sx={{
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                transition: '0.5s',

                                borderTopLeftRadius: '16px',
                                borderTopRightRadius: '16px',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                                    // backgroundColor: "#ffff",
                                }
                            }}>
                                <Image
                                    src={teacher.image}
                                    alt="Landscape picture"
                                    width={800}
                                    height={500}
                                />

                                <CardContent sx={{ backgroundColor: theme.palette.background.bgCardTeachers, }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} container direction="column" justifyContent="center">
                                            <Button variant="contained" color="primary" style={{ marginBottom: '10px' }}>
                                                اشترك الآن
                                            </Button>
                                            <Link href="/Contant">
                                                <Button variant="outlined" color="secondary">
                                                    رؤية المحتوى
                                                </Button>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={8} sx={{ textAlign: 'right' }}>
                                            <Typography variant="h4" component="div">
                                                {teacher.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {teacher.price}  :  سعر الكورس

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                عدد المحاضرات: {teacher.lectures}
                                            </Typography>
                                            <Rating name="read-only" value={teacher.rating} readOnly />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
        </div>
    )
}

export default Favorite