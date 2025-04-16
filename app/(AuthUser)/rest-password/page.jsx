'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../redux/slices/forgetPasswordSlice';
import { useRouter, useSearchParams } from 'next/navigation';
import { Container, TextField, Button, Box, Alert } from '@mui/material';

function ResetPassword() {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token'); // قراءة التوكن من الرابط
    const { loading, successMessage, errorMessage } = useSelector((state) => state.forgetPassword);

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
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
        if (formData.password !== formData.confirmPassword) {
            alert('كلمتا المرور غير متطابقتين');
            return;
        }
        dispatch(resetPassword({ token, password: formData.password })).then((action) => {
            if (action.type === 'auth/resetPassword/fulfilled') {
                router.push('/Login'); // إعادة التوجيه إلى صفحة تسجيل الدخول
            }
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100vh',
                    justifyContent: 'center',
                }}
            >
                <h1>إعادة تعيين كلمة المرور</h1>
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                {successMessage && <Alert severity="success">{successMessage}</Alert>}
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="كلمة المرور الجديدة"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="إعادة إدخال كلمة المرور الجديدة"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={loading}
                    >
                        {loading ? 'جاري التغيير...' : 'تغيير كلمة المرور'}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default ResetPassword;