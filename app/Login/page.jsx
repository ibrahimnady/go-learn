import React from 'react';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';
import Link from 'next/link';

function Login() {
  return (
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
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="البريد الإلكتروني"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          <Link href="/Intro">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              تسجيل الدخول
            </Button>
          </Link>
          <Grid container>
            <Grid item xs>

              <Button href="#" variant="text">
                هل نسيت كلمة المرور؟
              </Button>

            </Grid>
            <Grid item>
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
  );
}

export default Login;