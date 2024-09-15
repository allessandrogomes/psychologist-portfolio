'use client'

import { createTheme } from "@mui/material/styles"
import '@/app/globals.scss'

export const theme = createTheme({
    typography: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
    },
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                }
            }
        }
    }
})