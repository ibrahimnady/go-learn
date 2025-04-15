'use client';
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import Link from 'next/link';
import Grid from '@mui/material/Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { loginStudent } from '../../redux/slices/loginSlice';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
const { isLoggedIn, loading, error } = useSelector((state) => state.login); // الوصول إلى حالة تسجيل الدخول من Redux

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginStudent(formData)).then((action) => {
      if (action.type === 'auth/loginStudent/fulfilled') {
        router.push('/Subjects'); // إعادة التوجيه عند نجاح تسجيل الدخول
        Cookies.set("isLoggedIn", "true", { expires: 7 }); // تخزين حالة تسجيل الدخول في الكوكيز لمدة 7 أيام
        dispatch(logIn()); // تحديث حالة تسجيل الدخول في Redux
      }
    });
  };

  
  return (
    <div>
      
        <title>Go Learn | Login</title>
      
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
          }}
        >
          <Typography component="h1" variant="h5">
            تسجيل الدخول
          </Typography>
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="البريد الإلكتروني"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="كلمة المرور"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
            />
            
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              disabled={loading}
              >
              {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
              </Button>
            
            <Grid container spacing={4} justifyContent='center'>
              <Grid item size={{ xs: 6 }}>

                <Button href="#" variant="text">
                  هل نسيت كلمة المرور؟
                </Button>

              </Grid>
              <Grid item size={{ xs: 6 }}>
                <Link href="/Register">
                  <Button href="#" variant="text">
                    لا تمتلك حساب؟ تسجيل
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Login;