'use client'

import TitleAndSubtitle from "../shared/TitleAndSubtitle"
import styles from "./styles.module.scss"
import "swiper/css"
import { SwiperSlide, Swiper } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import Testemonial from "./Testemonial"

export default function TestemonialsSection() {
    return (
        <section className={styles.section} id="depoimentos">
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
                        firstTestemonial
                        urlImage="/images/testemonial/testemonial-1.webp"
                        widthImage={1696}
                        heightImage={2544}
                        altImage="Imagem da Testemunha Fernanda Belfort"
                        text="A terapia com Ana transformou minha vida. Ela me ajudou a entender meus sentimentos e enfrentar meus desafios com mais clareza e confiança. O ambiente sempre foi acolhedor e seguro, o que facilitou muito para eu me abrir e trabalhar minhas questões. Sinto que sou uma versão muito melhor de mim mesma agora, graças à sua orientação. Recomendo de olhos fechados!"
                        author="Fernanda Belfort"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Testemonial
                        urlImage="/images/testemonial/testemonial-2.webp"
                        widthImage={991}
                        heightImage={1000}
                        altImage="Imagem da Testemunha Letícia Donni"
                        text="O aconselhamento com Ana trouxe uma nova visão para minha vida. Com suas orientações, compreendi melhor minhas emoções e tomei decisões mais conscientes. O ambiente acolhedor das sessões me deu segurança para compartilhar minhas dúvidas. Sinto-me mais preparado para enfrentar os desafios diários e recomendo seu trabalho a quem busca clareza e equilíbrio emocional."
                        author="Letícia Donni"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Testemonial
                        lastTestemonial
                        urlImage="/images/testemonial/testemonial-3.webp"
                        widthImage={1213}
                        heightImage={1512}
                        altImage="Imagem das Testemunhas Ernesto Lahm e Gabriela Nunes"
                        text="A terapia de casal com Ana foi essencial para melhorar nossa comunicação e fortalecer o relacionamento. Ela nos proporcionou um espaço seguro para conversas honestas e nos ajudou a lidar com conflitos de forma saudável. A transformação foi incrível, e somos gratos por seu apoio e profissionalismo. Recomendo para casais que buscam fortalecer a relação!"
                        author="Ernesto Lahm e Gabriela Nunes"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}