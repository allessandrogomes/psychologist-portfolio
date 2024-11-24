'use client'

import Image from "next/image"
import styles from "./styles.module.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import TelegramIcon from '@mui/icons-material/Telegram'
import { Link } from "react-scroll"

export default function IntroSection() {
    return (
        <section className={styles.section} id="inicio">
            <div className={styles.text}>
                <div className={styles.bar}></div>
                <h1>Me chamo Alessandra Daré,<br></br>e sou Psicóloga</h1>
                <h2>Apoio emocional e desenvolvimento pessoal para uma vida mais equilibrada</h2>
                <button>
                    <Link
                        role="button"
                        aria-label="Scroll to respective Section"
                        style={{ display: "block", padding: "20px 15px" }}
                        to="contate"
                        spy
                        smooth
                        duration={500}
                        offset={0}
                    >
                        Vamos Conversar
                    </Link>
                </button>
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
                    src="/images/psicologa-1.jpg"
                    alt="Imagem da Psicóloga"
                    width={3355}
                    height={5033}
                />
            </div>

            <div className={styles.mobileImage}></div>
        </section>
    )
}