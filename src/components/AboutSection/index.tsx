import Image from "next/image"
import TitleAndSubtitle from "../shared/TitleAndSubtitle"
import styles from "./styles.module.scss"

export default function AboutSection() {
    return (
        <section className={styles.section} id="sobre-mim">
            <TitleAndSubtitle title="Sobre Mim" subtitle="Um pouco sobre mim e minha trajetória" />

            <div className={styles.boxImageAndText}>
                <div className={styles.boxImage}>
                    <Image
                        src="/images/about-image.jpg"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        width={3840}
                        height={5760}
                        alt="Fotografia da Psicóloga"
                    />
                </div>

                <p>
                    Olá, eu sou a Ana Clara Martins, psicóloga clínica formada pela Universidade Federal de Minas Gerais (UFMG), com especialização em Terapia Cognitivo-Comportamental (TCC). Ao longo dos últimos 10 anos, venho ajudando pessoas a lidarem com questões emocionais, ansiedade, depressão, autoestima e relacionamentos.
                    <br />
                    <br />
                    Meu objetivo é proporcionar um espaço seguro e acolhedor onde você possa se sentir à vontade para explorar seus pensamentos e sentimentos sem julgamentos. Acredito que cada indivíduo tem dentro de si o potencial para superar desafios e viver de forma mais plena. Minha missão é te apoiar nessa jornada, utilizando ferramentas e abordagens personalizadas de acordo com suas necessidades.
                    <br />
                    <br />
                    Atualmente, atendo adultos e adolescentes, tanto de forma presencial quanto online, para proporcionar flexibilidade e conveniência. Se você está buscando um espaço para refletir, crescer e se desenvolver, ficarei feliz em te acompanhar nesse processo.
                </p>
            </div>
        </section>
    )
}