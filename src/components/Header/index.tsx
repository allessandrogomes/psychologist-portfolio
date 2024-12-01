'use client'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Logo from "./Logo"
import MenuButton from "./MenuButton"
import NavItems from './NavItems'
import ContactButton from './ContactButton'
import { useState } from 'react'

const drawerWidth = 240
const color1 = "#E9EFEC"
const color2 = "#2C363F"

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    const handleDrawerClose = () => {
        setIsClosing(true)
        setMobileOpen(false)
    }

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false)
    }

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen)
        }
    }

    // Componentes do Menu Lateral em telas menores
    const drawer = (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%", alignItems: "center", justifyContent: "space-between", gap: "50px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Logo mobile />
                <Divider />
            </Box>

            <NavItems mobile/>

            <ContactButton mobile/>
        </Box>
    )
    // Componentes do Menu Lateral em telas menores

    return (
        <>
            {/* Cabeçalho padrão */}
            <AppBar
                sx={{
                    width: "100%",
                    height: "80px",
                    backgroundColor: color1,
                    color: color2,
                    boxShadow: 0,
                    borderBottom: "2px solid rgba(0, 0, 0, 0.3)",
                    display: "flex",
                    justifyContent: "center",
                    position: "fixed"
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-around", gap: "10px" }}>
                    <MenuButton onClick={handleDrawerToggle}/> {/* Visível somente em telas menores */}
                    <Logo />
                    <NavItems />
                    <ContactButton />
                </Toolbar>
            </AppBar>
            {/* Cabeçalho padrão */}

            {/* Menu Lateral que recebe os "Componentes do Menu Lateral" mencionado inicialmente */}
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            {/* Menu Lateral que recebe os "Componentes do Menu Lateral" mencionado inicialmente */}
        </>
    )
}