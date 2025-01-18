'use client'
import Link from 'next/link'
import React from 'react'
// import Typography from '@mui/material/Typography'
// import { Box } from '@mui/material'
import { Container, Typography, Box, Button, Card, CardContent, CardMedia, Rating, Toolbar, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
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
  {
    name: 'أحمد محمد',
    price: 'EGP 100',
    lectures: 10,
    image: 'https://via.placeholder.com/150',
    rating: 4,
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
  const theme = useTheme();

  

  return (
    <div>
      <head>
        <title>Go Learn | Intro</title>
      </head>



      <Container component="main" maxWidth="100%" sx={{ textAlign: 'right' }}>



        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <Typography sx={{
            fontWeight: "bold",
            mt: 3,
            color: theme.palette.Text.TXTHeadline,
          }} variant="h2" component="h1" gutterBottom>
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




        <div className='container-slider'>
          {/* <Typography variant="h3" className="heading" sx={{
            fontWeight:"bold",
            
            }}>افضل المدرسين </Typography> */}
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={50}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,

            }}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              900: {
                slidesPerView: 3,
              },
              400: {
                slidesPerView: 1,
              },
              300: {
                slidesPerView: 1,
              }
            }}

            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className='swiper-container'
            autoplay={{
              delay: 6000, // التأخير بين الصور بالثواني
              disableOnInteraction: false, // لا يوقف التأخير عند التفاعل مع السليدر

            }}


          >

            {teachers.map((teacher, index) => (
              <SwiperSlide key={teacher}>
                <img src={teacher.image} alt="صورة الذكاء الاصطناعي" />
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">

              </div>
              <div className="swiper-button-next slider-arrow">

              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>




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
          <Typography sx={{
            textAlign: "center",
            fontWeight: 'bold',
            borderBottom: "solid"


          }} variant="h2" component="h1" gutterBottom>
           اشحن محفظتك الان
          </Typography>

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
                  backgroundColor: '#ffd700',
                  color: '#000',
                  '&:hover': {
                    backgroundColor: '#ffed4a',
                  },
                  fontSize: '1.1rem',
                  py: 1.5
                }}
                startIcon={<span style={{ marginLeft: 8 }}>🔑</span>}
              >
                ادخل مفتاح الاشتراك
              </Button>

              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: '#1976d2',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                  fontSize: '1.1rem',
                  py: 1.5
                }}
              >
                شراء اشتراك
              </Button>
            </Box>
          </Box>

        </Box>
      </Container>
    </div >
  )
}

export default Intro