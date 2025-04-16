'use client'
import React, { useState, useEffect, useRef } from 'react';
import {
    Container, Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, CircularProgress, Alert, IconButton, Avatar
} from '@mui/material';
import Link from 'next/link';
import Grid from '@mui/material/Grid2';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { registerStudent, resetRegisterState } from '../../redux/slices/registerSlice';


// ثوابت للخيارات لتنظيم الكود
const egyptianGovernorates = [
    "القاهرة", "الجيزة", "الأسكندرية", "الدقهلية", "الشرقية", "القليوبية", "البحيرة", "الغربية",
    "المنوفية", "كفر الشيخ", "الفيوم", "بني سويف", "المنيا", "أسيوط", "سوهاج", "قنا",
    "الأقصر", "أسوان", "البحر الأحمر", "الوادي الجديد", "مطروح", "شمال سيناء", "جنوب سيناء",
    "بورسعيد", "الإسماعيلية", "السويس", "دمياط"
].sort(); // فرز أبجدي

const stages = ["اعدادي", "ثانوي"];
const educationTypes = ["ازهر", "تربية وتعليم"];

const baseYearOptions = {
    اعدادي: ["الصف الاول الاعدادي", "الصف الثاني الاعدادي", "الصف الثالث الاعدادي"],
    ثانوي: ["الصف الاول الثانوي", "الصف الثاني الثانوي", "الصف الثالث الثانوي"],
};




function Register() {
    const dispatch = useDispatch();
    const { loading, successMessage, errorMessage } = useSelector((state) => state.register);
    const router = useRouter();
    // حالات التحكم في البيانات
    const [formData, setFormData] = useState({
        name: '', // اسم الطالب
        email: '', // البريد الإلكتروني
        phone: '', // رقم الهاتف
        fatherPhone: '', // رقم ولي الأمر
        password: '', // كلمة المرور
        year: '', // السنة الدراسية
        city: '', // المحافظة
        address: '', // العنوان
        stage: '', // المرحلة الدراسية (اعدادي , ثانوي)
        educationType: '', // نوع التعليم ( ازهر , تربية وتعليم)
        section: '', // الشعبة (علمي ,ادبي ,علمي علوم , علمي رياضة)
    });
    const [imageFile, setImageFile] = useState(null); // حالة لملف الصورة
    const [imagePreview, setImagePreview] = useState(null); // حالة لمعاينة الصورة (اختياري)
    // const [loading, setLoading] = useState(false); //تحميل وقت الانتظار 
    // const [error, setError] = useState(null); // في حالة عدم نجاح الاتصال بالباك اند
    // const [success, setSuccess] = useState(null); // في حالة نجاح الاتصال بي الباك اند

    // حالات للتحكم الديناميكي بالقوائم
    const [yearOptions, setYearOptions] = useState([]); // تجميع المراحل الدراسية
    const [sectionOptions, setSectionOptions] = useState([]); // تجميع الشُعب
    const [showSection, setShowSection] = useState(false); // التحكم في إظهار الشعبة من عدمه

    const fileInputRef = useRef(null); // للوصول لـ input file المخفي

    // 1. التأثير لتحديث خيارات السنة بناءً على المرحلة
    useEffect(() => {
        if (formData.stage) {
            setYearOptions(baseYearOptions[formData.stage] || []); // تعيين الخيارات بناءً على المرحلة الدراسية
        } else {
            setYearOptions([]); // تعيين الخيارات إلى مصفوفة فارغة إذا لم يتم اختيار المرحلة
        }
        // إعادة تعيين السنة والشعبة عند تغيير المرحلة الدراسية 
        setFormData(prev => ({ ...prev, year: '', section: '' }));
    }, [formData.stage]);

    // 2. التأثير لتحديث خيارات الشعبة وإظهار/إخفاء الحقل بناءً على الشروط المعقدة
    useEffect(() => {
        const { stage, year, educationType } = formData; // الحصول على القيم الحالية من formData
        let shouldShow = false; // الشعبة ستظهر فقط في حالة وجود شروط معينة
        let currentSectionOptions = []; // خيارات الشعبة الافتراضية

        if (stage === 'ثانوي') {
            shouldShow = true; // أظهر الحقل طالما المرحلة ثانوي
            if (year === 'الصف الاول الثانوي' || year === 'الصف الثاني الثانوي') {
                currentSectionOptions = ['علمي', 'ادبي'];
            } else if (year === 'الصف الثالث الثانوي') {
                if (educationType === 'ازهر') {
                    currentSectionOptions = ['علمي', 'ادبي'];
                } else if (educationType === 'تربية وتعليم') {
                    currentSectionOptions = ['علمي علوم', 'علمي رياضه', 'ادبي'];
                }
                // إذا لم يتم اختيار نوع التعليم بعد في سنة ثالثة، تبقى الخيارات فارغة مؤقتاً
            }
        }

        setShowSection(shouldShow); // تعيين حالة إظهار الشعبة
        setSectionOptions(currentSectionOptions); // تعيين خيارات الشعبة بناءً على الشروط

        // إعادة تعيين الشعبة إذا تغيرت الشروط أو تم إخفاء الحقل
        if (!shouldShow || currentSectionOptions.length === 0 || formData.section && !currentSectionOptions.includes(formData.section)) {
            setFormData(prev => ({ ...prev, section: '' }));
        }

    }, [formData.stage, formData.year, formData.educationType]); // التأثير يعتمد على المرحلة والسنة ونوع التعليم


    //3. دالة تغير بيانات الفورم 
    const handleChange = (e) => {
        const { name, value } = e.target; // الحصول على اسم الحقل والقيمة
        setFormData(prevState => ({
            ...prevState,
            [name]: value // تغيير قيمة الحقل المحدد
        }));
        // setError(null); // مسح الخطأ عند البدء في التعديل
        // setSuccess(null); // مسح رسالة النجاح عند البدء في التعديل
    };
    //4. دالة تغير صورة المستخدم
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // الحصول على الملف الصورة
        if (file && file.type.startsWith('image/')) { // التحقق من أن الملف هو صورة
            setImageFile(file); // تعيين الصورة في الحالة
            // إنشاء معاينة (اختياري)
            const reader = new FileReader(); // إنشاء كائن FileReader
            reader.onloadend = () => { // عند الانتهاء من القراءة
                setImagePreview(reader.result); // تعيين نتيجة القراءة في الحالة
            };
            reader.readAsDataURL(file); // قراءة الملف كـ Data URL
            setError(null); // مسح الخطأ عند اختيار صورة صالحة
        } else {
            setImageFile(null); // تعيين الصورة إلى null إذا لم يكن الملف صورة
            setImagePreview(null); // إزالة المعاينة
            // if (file) { // إذا تم اختيار ملف لكنه ليس صورة
            //     setError("الرجاء اختيار ملف صورة صالح.");
            // }
        }
    };
    // 5. دالة لفتح نافذة اختيار الصورة
    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };
    // 6. دالة لإرسال البيانات إلى الباك اند
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = {
            ...formData,
            profilePicture: imagePreview,
        };
        dispatch(registerStudent(dataToSubmit)).then((action) => {
            if (action.type === 'register/registerStudent/fulfilled') {
                router.push('/Login'); // إعادة التوجيه عند النجاح
            }
        });
    };
    // console.log("FormData:", formData);
    useEffect(() => {
        return () => {
            dispatch(resetRegisterState()); // إعادة تعيين الحالة عند إلغاء تحميل المكون
        };
    }, [dispatch]);



    return (
        <div>
            <title>Go Learn | Register</title>

            <Container component="main" maxWidth="lg">
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 8,
                        
                    }}

                    noValidate // تعطيل التحقق المدمج في المتصفح لصالح MUI والتحقق الخاص بك
                >
                    <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                        تسجيل طالب جديد
                    </Typography>
                    {/* حقل رفع الصورة */}
                    <Grid item xs={12}>
                        <Box sx={{ padding: 2, textAlign: 'center', mt: 1, mb: 1 }}>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                style={{ display: 'none' }} // إخفاء الحقل الأصلي
                                id="student-image-upload"
                            />
                            <Button
                                onClick={triggerFileInput}
                            >
                                <Avatar src={imagePreview} variant="h1" sx={{ m: 1, bgcolor: 'secondary.main', width: 80, height: 80 }} />
                            </Button>
                            {imagePreview && (
                                <Box >
                                    <Typography variant="body2">الصورة الشخصية</Typography>
                                    {/* <img src={imagePreview} alt="معاينة الصورة" style={{ maxWidth: '100%', maxHeight: '150px', marginTop: '8px' }} /> */}
                                </Box>
                            )}
                            {imageFile && !imagePreview && <Typography variant="body2" mt={1}>{imageFile.name}</Typography>}

                        </Box>
                    </Grid>


                    {/* عرض رسائل الخطأ والنجاح */}
                    {errorMessage && <Alert variant="filled" severity="error" sx={{ width: '100%', mb: 2 }}>{errorMessage}</Alert>}
                    {successMessage && <Alert variant="filled" severity="success" sx={{ width: '100%', mb: 2 }}>{successMessage}</Alert>}
                    
                    

                    <Grid container spacing={2}>
                        {/* حقول الإدخال الأساسية */}
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                name="name" label="الاسم بالكامل" value={formData.name} onChange={handleChange}
                                required fullWidth margin="normal"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                name="email" label="البريد الإلكتروني" type="email" value={formData.email} onChange={handleChange}
                                required fullWidth margin="normal"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                name="phone" label="رقم الهاتف" type="tel" value={formData.phone} onChange={handleChange}
                                required fullWidth margin="normal"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                name="password" label="كلمة المرور" type="password" value={formData.password} onChange={handleChange}
                                required fullWidth margin="normal"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                name="fatherPhone" label="رقم هاتف ولي الأمر" type="tel" value={formData.fatherPhone} onChange={handleChange}
                                required fullWidth margin="normal"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <FormControl fullWidth required margin="normal">
                                <InputLabel id="city-label">المحافظة</InputLabel>
                                <Select
                                    labelId="city-label"
                                    id="city" name="city" value={formData.city} label="المحافظة" onChange={handleChange}
                                >
                                    <MenuItem value="" disabled><em>اختر المحافظة</em></MenuItem>
                                    {egyptianGovernorates.map(gov => (
                                        <MenuItem key={gov} value={gov}>{gov}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 12 }}>
                            <TextField
                                name="address" label="العنوان بالتفصيل" value={formData.address} onChange={handleChange}
                                required fullWidth margin="normal"
                            />
                        </Grid>

                        {/* القوائم المنسدلة المشروطة */}
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <FormControl fullWidth required margin="normal">
                                <InputLabel id="stage-label">المرحلة الدراسية</InputLabel>
                                <Select
                                    labelId="stage-label"
                                    id="stage" name="stage" value={formData.stage} label="المرحلة الدراسية" onChange={handleChange}
                                >
                                    <MenuItem value="" disabled><em>اختر المرحلة</em></MenuItem>
                                    {stages.map(stg => (
                                        <MenuItem key={stg} value={stg}>{stg}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <FormControl fullWidth required margin="normal" disabled={!formData.stage}>
                                <InputLabel id="year-label">السنة الدراسية</InputLabel>
                                <Select
                                    labelId="year-label"
                                    id="year" name="year" value={formData.year} label="السنة الدراسية" onChange={handleChange}
                                >
                                    <MenuItem value="" disabled><em>اختر السنة</em></MenuItem>
                                    {yearOptions.map(yr => (
                                        <MenuItem key={yr} value={yr}>{yr}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <FormControl fullWidth required margin="normal">
                                <InputLabel id="educationType-label">نوع التعليم</InputLabel>
                                <Select
                                    labelId="educationType-label"
                                    id="educationType" name="educationType" value={formData.educationType} label="نوع التعليم" onChange={handleChange}
                                >
                                    <MenuItem value="" disabled><em>اختر نوع التعليم</em></MenuItem>
                                    {educationTypes.map(type => (
                                        <MenuItem key={type} value={type}>{type}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* حقل الشعبة المشروط */}
                        {showSection && (
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth required={showSection} margin="normal" disabled={sectionOptions.length === 0}>
                                    <InputLabel id="section-label">الشعبة</InputLabel>
                                    <Select
                                        labelId="section-label"
                                        id="section" name="section" value={formData.section} label="الشعبة" onChange={handleChange}
                                    >
                                        <MenuItem value="" disabled><em>اختر الشعبة</em></MenuItem>
                                        {sectionOptions.map(sec => (
                                            <MenuItem key={sec} value={sec}>{sec}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        )}



                    </Grid> {/* نهاية Grid container */}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, position: 'relative' }} // position relative للـ CircularProgress
                        disabled={loading}
                    >
                        {loading ? 'جاري التسجيل...' : 'تسجيل'}
                        {loading && (
                            <CircularProgress
                                size={24}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px', // نصف الـ size
                                    marginLeft: '-12px', // نصف الـ size
                                    color: 'inherit', // يأخذ لون الزر أو الأبيض حسب الثيم
                                }}
                            />
                        )}
                    </Button>
                </Box>
            </Container>






        </div>
    );
}

export default Register;