import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

const initialState = {
    isLoggedIn: !!Cookies.get('student_token'),
    loading: false,
    error: null,
    user: null,
    token: Cookies.get('student_token') || null,
};

export const loginStudent = createAsyncThunk(
    'auth/loginStudent',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'https://go-learn-be.vercel.app/api/v1/auth/student/login',
                credentials
            );

            // حفظ التوكن في cookies
            Cookies.set('student_token', response.data.token, { expires: 7 }); // 7 أيام
            Cookies.set('student_info', JSON.stringify(response.data.data), { expires: 7 });

            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || 'فشل تسجيل الدخول');
        }
    }
);

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
            Cookies.remove('student_token');
            Cookies.remove('student_info');
            Cookies.remove('isLoggedIn');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginStudent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.token = action.payload.token;
                state.user = action.payload.data;
            })
            .addCase(loginStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
