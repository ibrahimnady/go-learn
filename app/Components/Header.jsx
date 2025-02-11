import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, Tooltip, useTheme, Toolbar, AppBar } from '@mui/material';
import WalletIcon from '@mui/icons-material/Wallet';
import Grid from '@mui/material/Grid2';



function Header({ setmyMode, ShowSidebar, setLoggin, loggin, DisplaySidebar }) {
    const theme = useTheme();
    const handleLogin = () => {
        localStorage.setItem("isLoggedIn", "true")
        setLoggin(true);
    };
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
                <Toolbar>

                    <Grid container sx={{ flexGrow: 1, justifyContent: { xs: 'center', md: 'flex-start' }, alignItems: 'center' }}>
                        <Grid item size={{ xs: 9, md: 1 }}>
                            <Tooltip title="Account settings" >
                                {loggin ? (
                                    <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-start' }, alignItems: 'center' }}>

                                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                                            <Link href="/Wallet">
                                                <WalletIcon />
                                            </Link>
                                            <Typography sx={{ fontWeight: "bold", pl: 1 }}>0 EGP</Typography>

                                        </Box>
                                    </Box>

                                ) : (
                                    <Link href="/Subjects">
                                        <Button color="inherit" onClick={handleLogin}>Sign In</Button>
                                    </Link>
                                )}
                            </Tooltip>
                        </Grid>
                        <Grid item size={{ xs: 3, md: 10 }} sx={{ display: 'flex', justifyContent: { xs: 'flex-end', md: 'flex-start' }, alignItems: 'center' }}>
                            <Box>
                                <Button onClick={() => {
                                    localStorage.setItem("currentMode", theme.palette.mode === "dark" ? "light" : "dark"),
                                        setmyMode(theme.palette.mode === "light" ? "dark" : "light")
                                }} variant="" >
                                    {theme.palette.mode === "dark" ? <Brightness4Icon color='warning' /> : <Brightness7Icon />}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>


                    <IconButton
                        sx={{
                            ml: 2, display: loggin ? { xs: 'block', sm: DisplaySidebar } : { xs: 'none', sm: 'none' }
                        }}
                        onClick={() => { ShowSidebar() }}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            );
        </div>
    )
}

export default Header