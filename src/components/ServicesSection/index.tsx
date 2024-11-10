'use client'

import { Link } from "react-scroll"
import TitleAndSubtitle from "../shared/TitleAndSubtitle"
import Accordions from "./Accordions"
import styles from "./styles.module.scss"

export default function ServicesSection() {
    return (
        <section className={styles.section} id="servicos">
            <div className={styles.content}>
                <div className={styles.title}>
                    <TitleAndSubtitle
                        title="Meus serviços"
                        subtitle="Ajudarei você a encontrar uma solução e resolver seu problema."
                    />
                    <button className={styles.letsTalk}>
                        <Link
                            role="button"
                            aria-label="Scroll to respective Section"
                            style={{ display: 'block', padding: "50px 10px", borderRadius: "100%" }}
                            to="contate"
                            spy
                            smooth
                            duration={500}
                            offset={-80}
                        >
                            Vamos Conversar
                        </Link></button>
                </div>

                <div className={styles.accordions}>
                    <Accordions />
                </div>
            </div>
        </section>
    )
}