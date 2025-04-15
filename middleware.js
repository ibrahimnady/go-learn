import { NextResponse } from "next/server";

export function middleware(request) {
    const url = request.nextUrl.clone();
    const isLoggedIn = request.cookies.get("isLoggedIn"); // قراءة حالة تسجيل الدخول من الكوكيز

    const allowedPagesForGuests = ["/","/Intro", "/Register", "/Login"];
    const restrictedPagesForLoggedIn = ["/","/Intro", "/Register", "/Login"];
    const currentPath = url.pathname;


    if (!isLoggedIn && !allowedPagesForGuests.includes(currentPath)) {
        // إذا لم يكن المستخدم مسجلاً الدخول وحاول الوصول إلى صفحة غير مسموح بها
        console.log("User is not logged in and trying to access a restricted page.");
        url.pathname = "/Login"; // إعادة التوجيه إلى صفحة تسجيل الدخول
        return NextResponse.redirect(url);
    } else if (isLoggedIn && restrictedPagesForLoggedIn.includes(currentPath)) {
        // إذا كان المستخدم مسجلاً الدخول وحاول الوصول إلى صفحات Intro, Register, أو Login
        console.log("User is logged in and trying to access a guest-only page.");
        url.pathname = "/Subjects"; // إعادة التوجيه إلى صفحة المواد
        return NextResponse.redirect(url);
    } 

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next|static|favicon.ico).*)"], // تطبيق Middleware على جميع الصفحات باستثناء API وملفات النظام
};