import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './slices/registerSlice';
import loginReducer from './slices/loginSlice';
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
    reducer: {
        register: registerReducer, // إضافة Slice الخاص بحالة تسجيل الدخول
        login: loginReducer, // إضافة Slice الخاص بحالة تسجيل الدخول
        theme: themeReducer,
    },
});

export default store;
