import { Box, List, ListItem } from "@mui/material"
import { Link } from "react-scroll"
import styles from "./styles.module.scss"

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

interface INavItems {
    mobile?: boolean
}

const boxMobileStyle = {
    width: "100%",
    height: "100%"
}

const listMobileStyle = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly"
}

export default function NavItems({ mobile }: INavItems) {
    return (
        <Box component="nav" sx={mobile ? boxMobileStyle : { display: { xs: "none", md: "block" } }}>
            <List sx={ mobile ? listMobileStyle : { display: "flex", gap: "30px" }}>
                {navItems.map(item =>
                    <ListItem className={styles.listItem} sx={{ width: "max-content", fontWeight: 300, cursor: "pointer", p: 0 }} key={item.to}>
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
    )
}