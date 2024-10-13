import Image from "next/image"
import styles from "./styles.module.scss"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

interface ITestemonial {
    urlImage: string,
    widthImage: number,
    heightImage: number,
    altImage: string,
    text: string,
    author: string,
    firstTestemonial?: boolean,
    lastTestemonial?: boolean
}

const styleArrow = {
    fontSize: "3rem",
    cursor: "pointer"
}

const styleArrowWithOpacity = {
    fontSize: "3rem",
    opacity: "20%"
}

export default function Testemonial(
    {
        urlImage,
        widthImage,
        heightImage,
        altImage,
        text,
        author,
        firstTestemonial = false,
        lastTestemonial = false
    }: ITestemonial) {
    return (
        <div className={styles.container}>
            <div className={styles.photo}>
                <Image
                    src={urlImage}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    width={widthImage}
                    height={heightImage}
                    alt={altImage}
                />
            </div>
            <div style={{ backgroundImage: `url(${urlImage})` }} className={styles.mobilePhoto}></div>

            <div className={styles.content}>
                <div className={styles.boxTextAndArrows}>
                    <FormatQuoteIcon sx={{ ml: "-10px", fontSize: "3rem" }} />

                    <blockquote>
                        {text}<br /><br />
                        <cite>{author}</cite>
                    </blockquote>

                    <div className={styles.navArrows}>
                        <ArrowCircleLeftIcon className="swiper-button-prev" sx={firstTestemonial ? styleArrowWithOpacity : styleArrow} />
                        <ArrowCircleRightIcon className="swiper-button-next" sx={lastTestemonial ? styleArrowWithOpacity : styleArrow} />
                    </div>
                </div>
            </div>
        </div >
    )
}