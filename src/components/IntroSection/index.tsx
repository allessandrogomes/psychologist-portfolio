import Image from "next/image"
import styles from "./styles.module.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import TelegramIcon from '@mui/icons-material/Telegram'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function IntroSection() {
    return (
        <section className={styles.section}>
            <div className={styles.text}>
                <div className={styles.bar}></div>
                <h1>Me chamo Alessandra Daré,<br></br>e sou Psicóloga</h1>
                <h2>I craft high-performing, beautiful websites that are conversion-focused, brand-accurate, & people-friendly.</h2>
                <button>Vamos Conversar</button>
                <div className={styles.follow}>
                    <p>Siga-me</p>
                    <div>
                        <LinkedInIcon sx={{ cursor: "pointer" }} />
                        <InstagramIcon sx={{ cursor: "pointer" }} />
                        <XIcon sx={{ cursor: "pointer" }} />
                        <TelegramIcon sx={{ cursor: "pointer" }} />
                    </div>
                </div>
            </div>

            <div className={styles.image}>
                <Image 
                    quality={100} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                    src="/images/intro.png"
                    alt="Imagem da Psicóloga" 
                    width={620} 
                    height={740}/>
                
                <button><KeyboardArrowDownIcon sx={{ fontSize: "100px", color: "#FAFAFA" }}/></button>
            </div>
        </section>
    )
}