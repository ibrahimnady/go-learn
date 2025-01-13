'use client'
import Link from 'next/link'
import React from 'react'
// import Typography from '@mui/material/Typography'
// import { Box } from '@mui/material'
import { Container, Typography, Box, Button, Card, CardContent, CardMedia, Rating, Toolbar } from '@mui/material';
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

  return (
    <div>
      <head>
        <title>Go Learn | Intro</title>
      </head>



      <Container component="main" maxWidth="100%" sx={{ textAlign: 'right' }}>



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




        <div className='container-slider'>
          <h1 className="heading">افضل المدرسين </h1>
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
            fontFamily: 'bold',
            borderBottom: "solid"


          }} variant="h2" component="h1" gutterBottom>
            عروض الاشتراكات
          </Typography>

          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, md: 3 }}>
              <Card sx={{
                textAlign: "center",
                bgcolor: "#4CAF50", // لون الخلفية
                color: "#fff", // لون النص
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
              }}>
                <CardContent sx={{
                  bgcolor: "#3e8e41", // لون الخلفية الداخلية
                  color: "#fff", // لون النص الداخلي
                  padding: "20px",
                  borderRadius: "10px",
                }}>
                  <Typography
                  sx={{
                    borderBottom:'solid'
                  }} variant="h3" component="div">
                    اشتراك عادي
                  </Typography>

                  <Typography variant="h6" color="text.secondary">
                    EGP 50 : السعر
                  </Typography>
                  <Typography sx={{
                    textAlign: 'right',
                    color: "#fff", // لون النص
                  }} variant="body1">
                    المميزات:
                    <ul>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الأساسي</li>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الممتاز</li>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الممتاز جدا</li>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الممتاز جدا جدا</li>
                    </ul>
                  </Typography>
                  <Button variant="contained" color="primary" sx={{
                    mt: 2,
                    bgcolor: "#fff", // لون الخلفية
                    color: "#3e8e41", // لون النص
                    "&:hover": {
                      bgcolor: "#fff", // لون الخلفية عند الحوفر
                      color: "#3e8e41", // لون النص عند الحوفر
                    }
                  }}>
                    اشترك الآن
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item size={{ xs: 12, md: 3 }}>
              <Card sx={{
                textAlign: "center",
                bgcolor: "#4CAF50", // لون الخلفية
                color: "#fff", // لون النص
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
              }}>
                <CardContent sx={{
                  bgcolor: "#3e8e41", // لون الخلفية الداخلية
                  color: "#fff", // لون النص الداخلي
                  padding: "20px",
                  borderRadius: "10px",
                }}>
                  <Typography
                  sx={{
                    borderBottom:'solid'
                  }} variant="h3" component="div">
                    اشتراك عادي
                  </Typography>

                  <Typography variant="h6" color="text.secondary">
                    EGP 50 : السعر
                  </Typography>
                  <Typography sx={{
                    textAlign: 'right',
                    color: "#fff", // لون النص
                  }} variant="body1">
                    المميزات:
                    <ul>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الأساسي</li>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الممتاز</li>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الممتاز جدا</li>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الممتاز جدا جدا</li>
                    </ul>
                  </Typography>
                  <Button variant="contained" color="primary" sx={{
                    mt: 2,
                    bgcolor: "#fff", // لون الخلفية
                    color: "#3e8e41", // لون النص
                    "&:hover": {
                      bgcolor: "#fff", // لون الخلفية عند الحوفر
                      color: "#3e8e41", // لون النص عند الحوفر
                    }
                  }}>
                    اشترك الآن
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item size={{ xs: 12, md: 3 }}>
              <Card sx={{
                textAlign: "center",
                bgcolor: "#4CAF50", // لون الخلفية
                color: "#fff", // لون النص
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
              }}>
                <CardContent sx={{
                  bgcolor: "#3e8e41", // لون الخلفية الداخلية
                  color: "#fff", // لون النص الداخلي
                  padding: "20px",
                  borderRadius: "10px",
                }}>
                  <Typography
                  sx={{
                    borderBottom:'solid'
                  }} variant="h3" component="div">
                    اشتراك عادي
                  </Typography>

                  <Typography variant="h6" color="text.secondary">
                    EGP 50 : السعر
                  </Typography>
                  <Typography sx={{
                    textAlign: 'right',
                    color: "#fff", // لون النص
                  }} variant="body1">
                    المميزات:
                    <ul>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الأساسي</li>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الممتاز</li>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الممتاز جدا</li>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الممتاز جدا جدا</li>
                    </ul>
                  </Typography>
                  <Button variant="contained" color="primary" sx={{
                    mt: 2,
                    bgcolor: "#fff", // لون الخلفية
                    color: "#3e8e41", // لون النص
                    "&:hover": {
                      bgcolor: "#fff", // لون الخلفية عند الحوفر
                      color: "#3e8e41", // لون النص عند الحوفر
                    }
                  }}>
                    اشترك الآن
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item size={{ xs: 12, md: 3 }}>
              <Card sx={{
                textAlign: "center",
                bgcolor: "#4CAF50", // لون الخلفية
                color: "#fff", // لون النص
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
              }}>
                <CardContent sx={{
                  bgcolor: "#3e8e41", // لون الخلفية الداخلية
                  color: "#fff", // لون النص الداخلي
                  padding: "20px",
                  borderRadius: "10px",
                }}>
                  <Typography
                  sx={{
                    borderBottom:'solid'
                  }} variant="h3" component="div">
                    اشتراك عادي
                  </Typography>

                  <Typography variant="h6" color="text.secondary">
                    EGP 50 : السعر
                  </Typography>
                  <Typography sx={{
                    textAlign: 'right',
                    color: "#fff", // لون النص
                  }} variant="body1">
                    المميزات:
                    <ul>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الأساسي</li>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الممتاز</li>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الممتاز جدا</li>
                      <li style={{ color: "#fff" }}>الوصول إلى المحتوى الممتاز جدا جدا</li>
                    </ul>
                  </Typography>
                  <Button variant="contained" color="primary" sx={{
                    mt: 2,
                    bgcolor: "#fff", // لون الخلفية
                    color: "#3e8e41", // لون النص
                    "&:hover": {
                      bgcolor: "#fff", // لون الخلفية عند الحوفر
                      color: "#3e8e41", // لون النص عند الحوفر
                    }
                  }}>
                    اشترك الآن
                  </Button>
                </CardContent>
              </Card>
            </Grid>



          </Grid>
        </Box>
      </Container>
    </div >
  )
}

export default Intro