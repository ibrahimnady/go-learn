'use client';
import React from 'react'
import { Divider, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useTheme, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SideBar({ drawerWidth, DisplaySidebar, TypeSidebar, HideSidebar }) {
    const theme = useTheme();
    const location = usePathname();
    const myList = [
        { text: "الرئسية", icon: <InboxIcon />, path: "/Subjects" },
        { text: "المحفظة", icon: <InboxIcon />, path: "/Wallet" },
        // { text: "Profiile", icon: <InboxIcon />, path: "/Intro" },
        // { text: "Settings", icon: <InboxIcon />, path: "/" },
    ]

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
                    <Link href="/">
                        <Typography sx={{
                            fontWeight: "bold"
                        }} variant="h4" >Go Learn</Typography>
                    </Link>
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
            </Drawer>
        </div>
    )
}

export default SideBar