'use client'
import React from 'react'
import Link from 'next/link'
import { Container, Typography, Box, Button, Card, CardContent, CardMedia, Rating, Toolbar, useTheme, Stack, Paper } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import googlePlay from '/Public/google.play.svg';
import appStore from '/Public/appstore.svg';
import imageIntro from '/Public/homePage.webp';
import IMGintro1 from '/Public/abwaab-scholarship.svg';
import IMGintro2 from '/Public/images.jpg';
import IMGintro3 from '/Public/helpTeacher.jpg';
import Subscription from '../Subscription/page';
import profileTeacher from '/Public/profileTeacher.png';
import profileTeacher2 from '/Public/profileTeacher2.jpg';
import profileTeacher3 from '/Public/profileTeacher3.jpg';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import Fade from '@mui/material/Fade';
import Footer from '../Components/Footer';









const teachers = [
  {
    name: 'أحمد محمد',
    price: 'EGP 100',
    lectures: 10,
    image: profileTeacher,
    rating: 4,
  },
  {
    name: 'سارة علي',
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
    name: 'فاطمة الزهراء',
    price: 'EGP 100',
    lectures: 15,
    image: profileTeacher,
    rating: 4.5,
  },
  {
    name: 'أحمد محمد',
    price: 'EGP 100',
    lectures: 10,
    image: profileTeacher2,
    rating: 4,
  },
  {
    name: 'أحمد محمد',
    price: 'EGP 100',
    lectures: 10,
    image: profileTeacher3,
    rating: 4,
  },
  {
    name: 'أحمد محمد',
    price: 'EGP 100',
    lectures: 10,
    image: profileTeacher,
    rating: 4,
  },
];



function Intro() {
  const [bannerOpen, setBannerOpen] = React.useState(true);

  const closeBanner = () => {
    setBannerOpen(false);
  };
  const theme = useTheme();
  return (
    <div>
      <head>
        <title>Go Learn | Intro</title>
      </head>

      <Container component="main" maxWidth="100%" sx={{ textAlign: 'right' }}>
        <Box sx={{ mt: 8 }}>
          <Grid container sx={{ justifyContent: 'center', alignItems: 'center', width: "100%", }} spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Image
                src={imageIntro}
                alt="Landscape picture"
                width={800}
                height={500}
              />
            </Grid>
            <Grid item sx={{ textAlign: 'center' }} size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
                <Typography sx={{
                  fontWeight: "bold",
                  mt: 3,
                  color: theme.palette.Text.TXTHeadline,
                }} variant="h1" component="h1" gutterBottom>
                  Go Learn
                </Typography>
              </Box>
              <Typography sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: theme.palette.Text.TXTHeadline,
              }} variant="h3" component="h1" gutterBottom>
                بيئة تعليمية متكاملة
              </Typography>
              <Typography sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: theme.palette.Text.TXTHeadline,
              }} variant="h3" component="h1" gutterBottom>
                معك خطوة بخطوة لتتفوق
              </Typography>
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
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 8 }}>
          <Typography sx={{ textAlign: "center", fontWeight: "bold", }} variant="h5" >حمل التطبيق </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button>
              <Image
                src={googlePlay}
                alt="Landscape picture"
                width={200}
                height={200}
              />
            </Button>
            <Button>
              <Image
                src={appStore}
                alt="Landscape picture"
                width={200}
                height={200}
              />
            </Button>
          </Box>
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
              <SwiperSlide key={index}>
                <Image
                  src={teacher.image}
                  alt="Landscape picture"
                  width={800}
                  height={500}
                />
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
          <Grid container sx={{ width: "100%", justifyContent: 'center', alignItems: 'center', }} spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Image
                src={IMGintro1}
                alt="Landscape picture"
                width={800}
                height={500}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Typography sx={{ textAlign: "right", fontWeight: "bold", }} variant="h2" component="h1" gutterBottom>
                من نحن ؟
              </Typography>
              <Typography variant="h4" gutterBottom>
                نحن شركة Go Learn مساعدك الأول في التفوق والنجاح معا نستطيع حل مشاكل التعليم في المراحل التعليمية والأزهرية ونوفر لك مميزات لم تراها من قبل مع Go Learn
              </Typography>
            </Grid>
          </Grid>
        </Box>



        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <Grid container sx={{ width: "100%", justifyContent: 'center', alignItems: 'center' }} spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Typography sx={{ textAlign: "right", fontWeight: "bold", }} variant="h2" component="h1" gutterBottom>
                ميزة الذكاء الاصطناعي
              </Typography>
              <Typography variant="h4" gutterBottom>
                نوفر لك مساعد منتور خصيصا لك يساعدك صنع جدول يكون مناسب معاك ومساعدتك في أي مشكلة تخص المواد بتاعك في أسرع وقت واجابتك علي اي سوال
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Image
                src={IMGintro2}
                alt="Landscape picture"
                width={800}
                height={500}
              />
            </Grid>
          </Grid>
        </Box>



        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <Grid container sx={{ width: "100%", justifyContent: 'center', alignItems: 'center' }} spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Image
                src={IMGintro3}
                alt="Landscape picture"
                width={800}
                height={500}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Typography sx={{ textAlign: "right", fontWeight: "bold", }} variant="h2" component="h1" gutterBottom>
                مساعدك الاول في التفوق
              </Typography>
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
            borderBottom: "solid 1px ",
            paddingBottom: "20px"
          }} variant="h2" component="h1" gutterBottom>
            اشحن محفظتك الان
          </Typography>
          <Subscription />

        </Box>
      </Container>

      <TrapFocus open disableAutoFocus disableEnforceFocus>
        <Fade appear={false} in={bannerOpen}>
          <Paper
            role="dialog"
            aria-modal="false"
            aria-label="Cookie banner"
            square
            variant="outlined"
            tabIndex={-1}
            sx={{
              position: 'fixed',
              zIndex: 2,
              bottom: 0,
              left: 0,
              right: 0,
              m: 0,
              p: 2,
              borderWidth: 0,
              borderTopWidth: 1,
              bgcolor: theme.palette.background.bgAlertDown,
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ justifyContent: 'space-between', gap: 2 }}
            >
              <Box
                sx={{ flexShrink: 1, alignSelf: { xs: 'flex-start', sm: 'center' } }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  This website uses cookies
                </Typography>
                <Typography variant="body2">
                  example.com relies on cookies to improve your experience.
                </Typography>
              </Box>
              <Stack
                direction={{
                  xs: 'row-reverse',
                  sm: 'row',
                }}
                sx={{
                  gap: 2,
                  flexShrink: 0,
                  alignSelf: { xs: 'flex-end', sm: 'center' },
                }}
              >
                <Button sx={{ bgcolor: theme.palette.background.bgButton }} size="small" onClick={closeBanner} variant="contained">
                  Allow all
                </Button>
                <Button sx={{ bgcolor: theme.palette.background.bgButton }} size="small" onClick={closeBanner} variant="contained">
                  Reject all
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Fade>
      </TrapFocus>
    </div >
  );
}

export default Intro;
