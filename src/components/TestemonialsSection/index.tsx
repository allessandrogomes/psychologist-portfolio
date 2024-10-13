'use client'

import TitleAndSubtitle from "../shared/TitleAndSubtitle"
import styles from "./styles.module.scss"
import "swiper/css"
import { SwiperSlide, Swiper } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import Testemonial from "../shared/Testemonial"

export default function TestemonialsSection() {
    return (
        <section className={styles.section}>
            <TitleAndSubtitle title="Depoimentos" subtitle="O que as pessoas dizem sobre mim" darkTheme />
            <Swiper
                className={styles.swiper}
                modules={[Pagination, Autoplay, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                centeredSlides={true}
                speed={900}
                autoplay={{ delay: 20000 }}
                simulateTouch={false}
            >
                <SwiperSlide>
                    <Testemonial
                        urlImage="/images/testemonial/testemonial-1.jpg"
                        widthImage={3392}
                        heightImage={5088}
                        altImage="Imagem da Testemunha Fernanda"
                        text="A terapia com Alessandra transformou minha vida. Ela me ajudou a entender meus sentimentos e enfrentar meus desafios com mais clareza e confiança. O ambiente sempre foi acolhedor e seguro, o que facilitou muito para eu me abrir e trabalhar minhas questões. Sinto que sou uma versão muito melhor de mim mesma agora, graças à sua orientação. Recomendo de olhos fechados!"
                        author="Fernanda Belfort"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Testemonial
                        urlImage="/images/testemonial/testemonial-1.jpg"
                        widthImage={3392}
                        heightImage={5088}
                        altImage="Imagem da Testemunha Fernanda"
                        text="A terapia com Alessandra transformou minha vida. Ela me ajudou a entender meus sentimentos e enfrentar meus desafios com mais clareza e confiança. O ambiente sempre foi acolhedor e seguro, o que facilitou muito para eu me abrir e trabalhar minhas questões. Sinto que sou uma versão muito melhor de mim mesma agora, graças à sua orientação. Recomendo de olhos fechados!"
                        author="Fernanda Belfort"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}