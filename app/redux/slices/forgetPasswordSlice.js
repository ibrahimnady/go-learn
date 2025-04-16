import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    successMessage: null,
    errorMessage: null,
};

// إرسال البريد الإلكتروني لاستعادة كلمة المرور
export const sendResetEmail = createAsyncThunk(
    'auth/sendResetEmail',
    async (email, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'https://go-learn-be.vercel.app/api/v1/auth/student/forgot-password',
                { email }
            );
            return response.data.message;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || 'حدث خطأ أثناء إرسال البريد الإلكتروني.');
        }
    }
);

const forgetPasswordSlice = createSlice({
    name: 'forgetPassword',
    initialState,
    reducers: {
        clearMessages: (state) => {
            state.successMessage = null;
            state.errorMessage = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendResetEmail.pending, (state) => {
                state.loading = true;
                state.successMessage = null;
                state.errorMessage = null;
            })
            .addCase(sendResetEmail.fulfilled, (state, action) => {
                state.loading = false;
                state.successMessage = action.payload;
            })
            .addCase(sendResetEmail.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload;
            });
    },
});

export const { clearMessages } = forgetPasswordSlice.actions;
export default forgetPasswordSlice.reducer;