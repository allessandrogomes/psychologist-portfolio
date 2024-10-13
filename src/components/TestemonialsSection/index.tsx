'use client'

import TitleAndSubtitle from "../shared/TitleAndSubtitle"
import styles from "./styles.module.scss"
import "swiper/css"
import { SwiperSlide, Swiper } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import Testemonial from "./Testemonial"

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
                        firstTestemonial
                        urlImage="/images/testemonial/testemonial-1.jpg"
                        widthImage={3392}
                        heightImage={5088}
                        altImage="Imagem da Testemunha Fernanda Belfort"
                        text="A terapia com Alessandra transformou minha vida. Ela me ajudou a entender meus sentimentos e enfrentar meus desafios com mais clareza e confiança. O ambiente sempre foi acolhedor e seguro, o que facilitou muito para eu me abrir e trabalhar minhas questões. Sinto que sou uma versão muito melhor de mim mesma agora, graças à sua orientação. Recomendo de olhos fechados!"
                        author="Fernanda Belfort"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Testemonial
                        urlImage="/images/testemonial/testemonial-2.jpg"
                        widthImage={1982}
                        heightImage={2000}
                        altImage="Imagem da Testemunha Letícia Donni"
                        text="O aconselhamento psicológico com a Alessandra trouxe uma nova perspectiva para minha vida. Através de suas orientações, consegui entender melhor minhas emoções e tomar decisões mais conscientes. O ambiente de acolhimento e segurança nas sessões foi essencial para eu me sentir confortável em compartilhar meus pensamentos e dúvidas. Com sua ajuda, me sinto mais preparado para enfrentar os desafios do dia a dia. Recomendo o trabalho dela para quem busca clareza e equilíbrio emocional!"
                        author="Letícia Donni"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Testemonial
                        lastTestemonial
                        urlImage="/images/testemonial/testemonial-3.jpg"
                        widthImage={2426}
                        heightImage={3024}
                        altImage="Imagem das Testemunhas Ernesto Lahm e Gabriela Nunes"
                        text="A terapia de casal com a Alessandra foi fundamental para melhorar nossa comunicação e fortalecer nosso relacionamento. Ela nos ajudou a entender melhor os sentimentos e necessidades um do outro, proporcionando um espaço seguro para conversas honestas e construtivas. Com sua orientação, aprendemos a lidar com os conflitos de forma mais saudável e a reconstruir a conexão que parecia perdida. A mudança que vivemos juntos foi incrível, e só temos a agradecer por todo o apoio e profissionalismo dela. Recomendo para qualquer casal que busca melhorar a relação!"
                        author="Ernesto Lahm e Gabriela Nunes"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}