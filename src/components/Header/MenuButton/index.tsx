import { IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'

interface IMenuButton {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function MenuButton({ onClick }: IMenuButton) {
    return (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onClick}
            sx={{ mr: 2, display: { md: 'none' } }}
        >
            <MenuIcon />
        </IconButton>
    )
}