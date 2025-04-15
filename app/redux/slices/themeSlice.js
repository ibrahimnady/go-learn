import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    mode: Cookies.get("themeMode") || "light", // قراءة القيمة من Cookies أو تعيين القيمة الافتراضية
};


const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"; // تبديل الثيم
            Cookies.set("themeMode", state.mode, { expires: 7 }); // تخزين القيمة في Cookies لمدة 7 أيام
        },
        setTheme: (state, action) => {
            state.mode = action.payload; // تعيين الثيم مباشرة
            Cookies.set("themeMode", state.mode, { expires: 7 }); // تخزين القيمة في Cookies
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;