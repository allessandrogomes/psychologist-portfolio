import styles from "./styles.module.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import TelegramIcon from '@mui/icons-material/Telegram'

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <p>Desenvolvido por <a href="https://www.valebytes.com.br" target="_blank">ValeBytes &copy;</a></p>

            <p>Ana C. Martins 2024 &copy;</p>

            <div className={styles.socialMedias}>
                <LinkedInIcon sx={{ cursor: "pointer" }} />
                <InstagramIcon sx={{ cursor: "pointer" }} />
                <XIcon sx={{ cursor: "pointer" }} />
                <TelegramIcon sx={{ cursor: "pointer" }} />
            </div>

        </footer>
    )
}