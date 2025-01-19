import React from 'react';
import { Box, Typography, IconButton, Link as MuiLink, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';
import payment from '/Public/eg.svg';

function Footer() {
  const theme = useTheme();
  return (

    <Box
      sx={{
        backgroundColor: theme.palette.background.main, // Dark background color
        color: theme.palette.Text.main, // White text color
        padding: '40px 20px',
        marginTop: 'auto', // Pushes the footer to the bottom
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Logo and Company Name */}
        <Grid item size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="" // Replace with your logo path
              alt="Go Learn Logo"
              width={50}
              height={50}
            />
            <Typography variant="h5" sx={{ ml: 2, fontWeight: 'bold' }}>
              Go Learn
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            مساعدك الأول في التفوق والنجاح
          </Typography>
        </Grid>

        {/* Social Media Links */}
        <Grid item size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            تابعنا على
          </Typography>
          <Box>
            <IconButton
              href="https://facebook.com"
              target=""
              sx={{ color: '#FFFFFF', '&:hover': { color: '#1877F2' } }}
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target=""
              sx={{ color: '#FFFFFF', '&:hover': { color: '#1DA1F2' } }}
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target=""
              sx={{ color: '#FFFFFF', '&:hover': { color: '#E1306C' } }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target=""
              sx={{ color: '#FFFFFF', '&:hover': { color: '#0A66C2' } }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            روابط سريعة
          </Typography>
          <Box>
            <MuiLink href="/" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              الرئيسية
            </MuiLink>
            <MuiLink href="/Subjects" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              المواد
            </MuiLink>
            <MuiLink href="/Teachers" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              المدرسين
            </MuiLink>
            <MuiLink href="/Contact" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              اتصل بنا
            </MuiLink>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Image
          src={payment}
          alt="Landscape picture"
          width={200}
          height={200}
        />
      </Box>
      {/* Copyright */}
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 4 }}>
        © {new Date().getFullYear()} Go Learn. جميع الحقوق محفوظة.
      </Typography>
    </Box>
  );
}

export default Footer;