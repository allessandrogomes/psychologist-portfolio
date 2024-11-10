'use client'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-scroll'

const drawerWidth = 240
const color1 = "#E9EFEC"
const color2 = "#2C363F"
const navItems = [
    {
        text: "Início",
        offset: -80,
        to: "inicio"
    },
    {
        text: "Serviços",
        offset: -80,
        to: "servicos"
    },
    {
        text: "Depoimentos",
        offset: -80,
        to: "depoimentos"
    },
    {
        text: "Sobre Mim",
        offset: -80,
        to: "sobre-mim"
    }
]

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

    const drawer = (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%", alignItems: "center", justifyContent: "space-between", gap: "50px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 800, color: color2, textAlign: "center", padding: "20px 0" }}>
                    Alessandra Daré
                </Typography>
                <Divider />
            </Box>

            <Box component="nav" sx={{ width: "100%", height: "100%" }}>
                <List sx={{ height: "100%", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-evenly" }}>
                    {navItems.map(item =>
                        <ListItem sx={{ width: "max-content", fontWeight: 300, cursor: "pointer", p: 0 }} key={item.to}>
                            <Link
                                role="button"
                                aria-label="Scroll to respective Section"
                                style={{ display: 'block', height: '26px' }}
                                to={item.to}
                                spy
                                smooth
                                duration={500}
                                offset={item.offset}
                            >
                                {item.text}
                            </Link>
                        </ListItem>)}
                </List>
            </Box>

            <Button
                sx={{
                    textTransform: "capitalize",
                    color: color2,
                    border: `2px solid ${color2}`,
                    borderRadius: 0,
                    p: "5px 25px",
                    fontWeight: 600,
                    width: "max-content",
                    alignSelf: "center",
                    mb: "50px"
                }}
            >
                Contate
            </Button>
        </Box>
    )

    return (
        <>
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
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 800, color: color2 }}>
                        Alessandra Daré
                    </Typography>
                    <Box component="nav" sx={{ display: { xs: "none", md: "block" } }}>
                        <List sx={{ display: "flex", gap: "30px" }}>
                            {navItems.map(item =>
                                <ListItem sx={{ width: "max-content", fontWeight: 300, cursor: "pointer", p: 0 }} key={item.to}>
                                    <Link
                                        role="button"
                                        aria-label="Scroll to respective Section"
                                        style={{ display: 'block', height: '26px' }}
                                        to={item.to}
                                        spy
                                        smooth
                                        duration={500}
                                        offset={item.offset}
                                    >
                                        {item.text}
                                    </Link>
                                </ListItem>)}
                        </List>
                    </Box>
                    <Button
                        sx={{
                            textTransform: "capitalize",
                            color: color2,
                            border: `2px solid ${color2}`,
                            borderRadius: 0,
                            padding: 0,
                            fontWeight: 600,
                            width: "106px",
                            height: "38px",
                            display: { xs: "none", sm: "block" }
                        }}
                    >
                        <Link
                            role="button"
                            aria-label="Scroll to respective Section"
                            style={{ display: 'block', padding: "5px 0" }}
                            to="contate"
                            spy
                            smooth
                            duration={500}
                            offset={0}
                        >
                            Contate
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        </>
    )
}