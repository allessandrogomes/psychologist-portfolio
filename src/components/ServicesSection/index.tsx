import TitleAndSubtitle from "../shared/TitleAndSubtitle"
import Accordions from "./Accordions"
import styles from "./styles.module.scss"

export default function ServicesSection() {
    return (
        <section className={styles.section}>
            <div className={styles.title}>
                <TitleAndSubtitle
                    title="Meus serviços"
                    subtitle="Ajudarei você a encontrar uma solução e resolver seu problema."
                />
            </div>
            <div className={styles.accordions}>
                <Accordions />
            </div>
        </section>
    )
}