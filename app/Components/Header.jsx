import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, Tooltip, useTheme, Toolbar, AppBar, MenuItem, Menu } from '@mui/material';
import WalletIcon from '@mui/icons-material/Wallet';
import Grid from '@mui/material/Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from "../redux/slices/themeSlice";
import Cookies from "js-cookie";
import { logout, login } from '../redux/slices/loginSlice';
import { usePathname } from 'next/navigation';




function Header({ }) {
    const theme = useTheme();
    const location = usePathname();
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode); // قراءة الثيم من Redux

    const isLoggedIn = useSelector((state) => state.login.isLoggedIn); // قراءة حالة تسجيل الدخول من Redux

    const handleLogout = () => {
        dispatch(logout()); // تحديث حالة تسجيل الخروج في Redux

    };
    console.log(isLoggedIn);

    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);



    const handleMobileMenuOpen = (event) => {
        setMobileMenuAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchorEl(null);
    };

    const tabs = [
        { text: "المواد", path: "/Subjects" },
        { text: "مشترياتي", path: "/Pruches" },
        { text: "المفضلة", path: "/Favorite" },
        { text: "الصفحة الشخصية", path: "/Profile" },
        { text: "المحفظة", path: "/Wallet" },
        { text: "الرسائل", path: "/Inbox" },
    ];

    return (

        <div>
            <AppBar
                sx={{

                    position: "fixed",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    bgcolor: theme.palette.background.main,
                    color: theme.palette.Text.main
                }}
            >
                {isLoggedIn ? (
                    <Toolbar>
                        {/* Logo */}
                        <Typography component={Link} href="/Subjects" variant="h4" sx={{ flexGrow: 1 }}>
                            Go Learn
                        </Typography>

                        {/* Tabs for larger screens */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {tabs.map((tab) => (
                                <Button
                                    key={tab.text}
                                    color="inherit"
                                    component={Link}
                                    href={tab.path}
                                    sx={{ mx: 1,
                                        bgcolor: location === tab.path
                                            ?
                                            theme.palette.background.bgSidebar
                                            : null,
                                     }}
                                >
                                    {tab.text}
                                </Button>
                            ))}
                            <Button
                                color="inherit"
                                component={Link}
                                sx={{ mx: 1 }}
                                href="/Intro"
                                onClick={handleLogout}
                            >
                                تسجيل الخروج
                            </Button>


                        </Box>

                        {/* Theme Toggle */}
                        <Button onClick={() => dispatch(toggleTheme())} color="inherit">
                            {mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
                        </Button>
                        <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-start' }, alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                                <Link href="/Wallet">
                                    <WalletIcon />
                                </Link>
                                <Typography sx={{ fontWeight: "bold", pl: 1 }}>0 EGP</Typography>
                            </Box>
                        </Box>


                        {/* Mobile Menu */}
                        <IconButton
                            color="inherit"
                            edge="end"
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                            onClick={handleMobileMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={mobileMenuAnchorEl}
                            open={Boolean(mobileMenuAnchorEl)}
                            onClose={handleMobileMenuClose}
                        >
                            {tabs.map((tab) => (
                                <MenuItem
                                    key={tab.text}
                                    component={Link}
                                    href={tab.path}
                                    onClick={handleMobileMenuClose}
                                >
                                    {tab.text}
                                </MenuItem>
                            ))}
                            <Button
                                color="inherit"
                                component={Link}
                                sx={{ mx: 1 }}
                                href="/Login"
                                onClick={handleLogout}
                            >
                                تسجيل الخروج
                            </Button>
                        </Menu>
                    </Toolbar>
                ) : (
                    <Toolbar>
                        {/* Logo */}
                        <Typography component={Link} href="/Intro" variant="h4" sx={{ flexGrow: 1 }}>
                            Go Learn
                        </Typography>



                        {/* Theme Toggle */}
                        <Button onClick={() => dispatch(toggleTheme())} color="inherit">
                            {mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
                        </Button>
                        <Button

                            color="inherit"
                            component={Link}
                            href={"/Login"}
                            sx={{ mx: 1 }}
                        >
                            تسجيل الدخول
                        </Button>



                    </Toolbar>

                )}


            </AppBar>
            );
        </div>
    )
}

export default Header