
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Avatar, Box, Divider, ListItemIcon, Menu, Tooltip, useTheme, Toolbar, AppBar, ListItemText, ListItem, ListItemButton } from '@mui/material';
import { Logout, Settings } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header({ setmyMode, drawerWidth, ShowSidebar, setLoggin, loggin }) {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openAV = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const test = () => {
        setLoggin(false)
        console.log("test")
    }

    const myList = [
        { text: "الصفحة الشخصية", icon: <AccountCircleIcon />, path: "/" },
        { text: "الاعدادات", icon: <Settings />, path: "/" },

    ]

    return (
        <div>
            <AppBar
                sx={{
                    // width: { sm: `calc(100% - ${drawerWidth}px)` }, mr: { xs: 0, sm: `${drawerWidth}px` }
                }}
                position="static" >
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', flexGrow: 1 }}>
                        <Tooltip title="Account settings" >

                            {loggin ? (
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={openAV ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openAV ? 'true' : undefined}
                                >
                                    <Typography mr={2} variant="body1" ><ArrowDropDownIcon /> Ibrahim Nady</Typography>
                                    <Avatar sx={{ width: 32, height: 32 }} src="https://mui.com/static/images/avatar/1.jpg" />
                                </IconButton>
                            ) : (
                                <Link href="/Login">
                                    <Button color="inherit">Sign In</Button>
                                </Link>
                            )

                            }


                            <Button onClick={() => {
                                localStorage.setItem("currentMode", theme.palette.mode === "dark" ? "light" : "dark"),
                                    setmyMode(theme.palette.mode === "light" ? "dark" : "light")
                            }} variant="" >
                                {theme.palette.mode === "dark" ? <Brightness4Icon color='warning' /> : <Brightness7Icon />}
                            </Button>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={openAV}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        {
                            myList.map((item) => {
                                return (
                                    <Link key={item} href={item.path}>
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                sx={{
                                                    textAlign: "right"
                                                }}
                                            >
                                                <ListItemText
                                                    sx={{
                                                        mr: 2
                                                    }}
                                                    primary={item.text}
                                                />
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
                        <Link href="/">
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        test()
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
                    </Menu>
                    <IconButton
                        onClick={() => { ShowSidebar() }}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 2, display: loggin ? 'block' : 'none' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header