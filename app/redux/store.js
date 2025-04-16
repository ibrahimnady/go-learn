import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './slices/registerSlice';
import loginReducer from './slices/loginSlice';
import themeReducer from "./slices/themeSlice";
import forgetPasswordReducer from './slices/forgetPasswordSlice';

export const store = configureStore({
    reducer: {
        register: registerReducer, // إضافة Slice الخاص بحالة تسجيل الدخول
        login: loginReducer, // إضافة Slice الخاص بحالة تسجيل الدخول
        theme: themeReducer,
        forgetPassword: forgetPasswordReducer,
    },
});

export default store;
