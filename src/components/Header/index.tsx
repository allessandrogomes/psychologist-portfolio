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

const drawerWidth = 240
const color1 = "#E9EFEC"
const color2 = "#2C363F"
const navItems = ["Início", "Serviços", "Contextos", "Sobre Mim"]

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
                    {navItems.map(item => <ListItem sx={{ width: "max-content", fontWeight: 300, cursor: "pointer", p: 0 }} key={item}>{item}</ListItem>)}
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
                    position: "relative"
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
                            {navItems.map(item => <ListItem sx={{ width: "max-content", fontWeight: 300, cursor: "pointer", p: 0 }} key={item}>{item}</ListItem>)}
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
                            display: { xs: "none", sm: "block" }
                        }}
                    >
                        Contate
                    </Button>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth } }}
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