'use client'

import TitleAndSubtitle from "../shared/TitleAndSubtitle"
import styles from "./styles.module.scss"
import "swiper/css"
import { SwiperSlide, Swiper } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import Image from "next/image"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

export default function TestemonialsSection() {
    return (
        <section className={styles.section}>
            <TitleAndSubtitle title="Depoimentos" subtitle="O que as pessoas dizem sobre mim" darkTheme />
            <Swiper
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
            >
                <SwiperSlide>
                    {/* Container do Depoimento */}
                    <div className={styles.containerTestemonial}>

                        {/* Estrutura da Foto */}
                        <div className={styles.containerPhoto}>
                            <Image
                                src="/images/testemonial/testemonial-1.jpg"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                width={3392}
                                height={5088}
                                alt="Imagem da Testemunha 1"
                            />
                        </div>

                        {/* Container do Texto e Setas de Navegação */}
                        <div className={styles.containerText}>

                            {/* Texto e Setas de Navegação */}
                            <div className={styles.textAndArrows}>
                                <FormatQuoteIcon sx={{ fontSize: "3rem", ml: "25px" }} />
                                <blockquote>
                                    A terapia com Alessandra transformou minha vida. Ela me ajudou a entender meus sentimentos e enfrentar meus desafios com mais clareza e confiança. O ambiente sempre foi acolhedor e seguro, o que facilitou muito para eu me abrir e trabalhar minhas questões. Sinto que sou uma versão muito melhor de mim mesma agora, graças à sua orientação. Recomendo de olhos fechados!<br /><br />
                                    <cite>Geovanna Tarim</cite>
                                </blockquote>

                                {/* Setas de navegação */}
                                <div className={styles.navArrows}>
                                <ArrowCircleLeftIcon className="swiper-button-prev" sx={{ fontSize: "3rem", cursor: "pointer" }} />
                                <ArrowCircleRightIcon className="swiper-button-next" sx={{ fontSize: "3rem", cursor: "pointer" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.containerTestemonial}>

                        {/* Estrutura da Foto */}
                        <div className={styles.containerPhoto}>
                            <Image src="/images/testemonial/testemonial-1.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} width={3392} height={5088} alt="Imagem da Testemunha 1" />
                        </div>

                        {/* Container do Texto e Setas de Navegação */}
                        <div className={styles.containerText}>

                            {/* Texto */}
                            <div className={styles.textAndArrows}>
                                <FormatQuoteIcon sx={{ fontSize: "3rem", ml: "25px" }} />
                                <blockquote>
                                    A terapia com Alessandra transformou minha vida. Ela me ajudou a entender meus sentimentos e enfrentar meus desafios com mais clareza e confiança. O ambiente sempre foi acolhedor e seguro, o que facilitou muito para eu me abrir e trabalhar minhas questões. Sinto que sou uma versão muito melhor de mim mesma agora, graças à sua orientação. Recomendo de olhos fechados!<br /><br />
                                    <cite>Geovanna Tarim</cite>
                                </blockquote>

                                {/* Setas de navegação */}
                                <div className={styles.navArrows}>
                                    <ArrowCircleLeftIcon className="swiper-button-prev" sx={{ fontSize: "3rem", cursor: "pointer" }} />
                                    <ArrowCircleRightIcon className="swiper-button-next" sx={{ fontSize: "3rem", cursor: "pointer" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}