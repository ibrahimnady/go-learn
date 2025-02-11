// redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedIn: false, // الحالة الافتراضية لتسجيل الدخول
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state) => {
            state.loggedIn = true; // تسجيل الدخول
        },
        logOut: (state) => {
            state.loggedIn = false; // تسجيل الخروج
        },
    },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
