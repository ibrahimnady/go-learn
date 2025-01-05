'use client'
import Link from 'next/link'
import React from 'react'
// import Typography from '@mui/material/Typography'
// import { Box } from '@mui/material'
import { Container, Typography, Box, Button, Card, CardContent, CardMedia, Rating } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Grid from '@mui/material/Grid2';




const teachers = [
  {
    name: 'أحمد محمد',
    price: 'EGP 100',
    lectures: 10,
    image: 'https://via.placeholder.com/150',
    rating: 4,
  },
  {
    name: 'سارة علي',
    price: 'EGP 100',
    lectures: 12,
    image: 'https://via.placeholder.com/150',
    rating: 5,
  },
  {
    name: 'محمد سعيد',
    price: 'EGP 100',
    lectures: 8,
    image: 'https://via.placeholder.com/150',
    rating: 3,
  },
  {
    name: 'فاطمة الزهراء',
    price: 'EGP 100',
    lectures: 15,
    image: 'https://via.placeholder.com/150',
    rating: 4.5,
  },
  {
    name: 'أحمد محمد',
    price: 'EGP 100',
    lectures: 10,
    image: 'https://via.placeholder.com/150',
    rating: 4,
  },
];

function Intro() {

  return (
    <div>
      <head>
        <title>Go Learn | Intro</title>
      </head>

    

    
      <Container component="main" maxWidth="100%">
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Go Learn
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Link href="/Login">
            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
              تسجيل الدخول
            </Button>
          </Link>
          <Link href="/Register">
            <Button variant="contained" color="secondary">
              تسجيل طالب جديد
            </Button>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <Grid container sx={{ width: "100%", }} spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <img src="https://via.placeholder.com/300" alt="صورة التعليم" />
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                من نحن ؟
              </Typography>
              <Typography variant="body1" gutterBottom>
                نحن شركة Go Learn مساعدك الأول في التفوق والنجاح معا نستطيع حل مشاكل التعليم في المراحل التعليمية والأزهرية ونوفر لك مميزات لم تراها من قبل مع Go Learn
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <Grid container sx={{ width: "100%", }} spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <img src="https://via.placeholder.com/300" alt="صورة الذكاء الاصطناعي" />
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                نوفر لك ميزة الذكاء الاصطناعي لمساعدتك في الدراسة بشكل أفضل مع توفير حصص لايف متناسبة مع وقتك خصيصا لك
              </Typography>
              <Typography variant="body1" gutterBottom>
                نوفر لك مساعد منتور خصيصا لك يساعدك صنع جدول يكون مناسب معاك ومساعدتك في أي مشكلة تخص المواد بتاعك في أ سرع وقت
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <Grid container sx={{ width: "100%", }} spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <img src="https://via.placeholder.com/300" alt="صورة المونترو" />
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                نوفر لك مساعد منتور خصيصا لك يساعدك صنع جدول يكون مناسب معاك ومساعدتك في أي مشكلة تخص المواد بتاعك في أسرع وقت
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            عروض الاشتراكات
          </Typography>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, md: 3 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    اشتراك عادي
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    السعر: EGP 50
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    مميزات: الوصول إلى المحتوى الأساسي
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item size={{ xs: 12, md: 3 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    اشتراك برميم
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    السعر: EGP 100
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    مميزات: الوصول إلى المحتوى المتقدم + حصص لايف
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    اشتراك فضي
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    السعر: EGP 150
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    مميزات: كل مميزات الاشتراك البرميم + دعم إضافي
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    اشتراك جولد
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    السعر: EGP 200
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    مميزات: كل مميزات الاشتراك الفضي + جلسات استشارية خاصة
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>



  )
}

export default Intro