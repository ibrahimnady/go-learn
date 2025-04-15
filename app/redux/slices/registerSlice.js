import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isRegistered: false, // الحالة الافتراضية لتسجيل الحساب
    loading: false, // حالة التحميل
    successMessage: null, // رسالة النجاح
    errorMessage: null, // رسالة الخطأ
};

// إنشاء Thunk لاستدعاء API التسجيل
export const registerStudent = createAsyncThunk(
    'register/registerStudent',
    async (dataToSubmit, { rejectWithValue }) => {
        const apiUrl = 'https://go-learn-be.vercel.app/api/v1/auth/student/signup';
        try {
            const response = await axios.post(apiUrl, dataToSubmit);
            return response.data; // إرجاع البيانات عند النجاح
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || 'حدث خطأ أثناء تسجيل الحساب.');
        }
    }
);

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        resetRegisterState: (state) => {
            state.isRegistered = false;
            state.successMessage = null;
            state.errorMessage = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerStudent.pending, (state) => {
                state.loading = true;
                state.successMessage = null;
                state.errorMessage = null;
            })
            .addCase(registerStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.isRegistered = true; // تم تسجيل الحساب بنجاح
                state.successMessage = 'تم تسجيل الحساب بنجاح! برجاء الذهاب إلى بريدك الإلكتروني لتفعيل الحساب.';
                state.errorMessage = null;
            })
            .addCase(registerStudent.rejected, (state, action) => {
                state.loading = false;
                state.isRegistered = false;
                state.successMessage = null;
                state.errorMessage = action.payload;
            });
    },
});

export const { resetRegisterState } = registerSlice.actions;
export default registerSlice.reducer;