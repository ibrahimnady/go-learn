'use client';
import React from 'react'
import { Divider, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useTheme, Typography, Box, Button, Tooltip, IconButton, Avatar, Menu } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logout, Settings } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WalletIcon from '@mui/icons-material/Wallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function SideBar({ drawerWidth, DisplaySidebar, TypeSidebar, HideSidebar, loggin, setLoggin }) {
    const theme = useTheme();
    const location = usePathname();
    const myList = [
        { text: "الرئسية", icon: <InboxIcon />, path: "/Subjects" },
        { text: "المحفظة", icon: <InboxIcon />, path: "/Wallet" },
        // { text: "تسجيل الخروج", icon: <Logout />, path: "/Intro" },
        // { text: "Settings", icon: <InboxIcon />, path: "/" },
    ]
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const logOut = () => {
        localStorage.removeItem("isLoggedIn");
        setLoggin(false)
        // console.log("test")



    }


    return (
        <div>
            <Drawer
                sx={{
                    display: { xs: DisplaySidebar, sm: 'block' },
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        bgcolor: theme.palette.background.main,
                        width: drawerWidth,
                        boxSizing: "border-box"
                    },
                    position: "fixed",
                    zIndex: (theme) => theme.zIndex.drawer + 5,
                }}
                variant={TypeSidebar}
                anchor="right"
                open={true}
                onClose={() => {
                    HideSidebar()
                }}
            >
                <Toolbar sx={{
                    display: "inline-grid", textAlign: "center", fontSize: 25,
                    // backgroundColor: theme.palette.background.bgHeadline,
                    // color: theme.palette.Text.TXTHeadline,

                }}>

                    <Typography sx={{
                        fontWeight: "bold"
                    }} variant="h4" >Go Learn</Typography>
                    <Grid container sx={{ flexGrow: 1, justifyContent: { xs: 'center', md: 'center', lg: 'center' }, alignItems: 'center' }}>
                        <Grid item size={{ xs: 9, md: 12 }}>
                            <Tooltip title="Account settings" >
                                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'center' }, alignItems: 'center' }}>
                                    <Typography sx={{ fontWeight: "bold" }} mr={2} variant="body1">
                                        Ibrahim
                                    </Typography>
                                    
                                    <Avatar sx={{ width: 32, height: 32 }} src="https://mui.com/static/images/avatar/1.jpg" />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'center' }, alignItems: 'center' }}>
                                    <Typography sx={{ fontWeight: "bold" }} mr={2} variant="body1">
                                        علمي علوم , ثالثه ثانوي
                                    </Typography>
                                    
                                </Box>
                            </Tooltip>
                        </Grid>
                    </Grid>


                </Toolbar>
                <Divider />
                {
                    myList.map((item) => {
                        return (
                            <Link key={item} href={item.path}>
                                <ListItem
                                    sx={{
                                        bgcolor: location === item.path
                                            ?
                                            theme.palette.background.bgSidebar
                                            : null,

                                    }}
                                    disablePadding
                                >
                                    <ListItemButton
                                        sx={{
                                            textAlign: "right",
                                        }}
                                    >
                                        <ListItemText
                                            sx={{
                                                mr: 2,

                                            }}
                                            primary={item.text} />
                                        <ListItemIcon

                                            sx={{ minWidth: 0 }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                            </Link>
                        )
                    })}
                <Link href="">
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => {
                                logOut()
                            }}
                            sx={{
                                textAlign: "right"
                            }}
                        >
                            <ListItemText
                                sx={{
                                    mr: 2
                                }}
                                primary="تسجيل الخروج"
                            />
                            <ListItemIcon
                                sx={{ minWidth: 0 }}
                            >
                                <Logout />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </Link>
            </Drawer>
        </div>
    )
}

export default SideBar