import styles from "./styles.module.scss"

interface ITitleAndSubtitle {
    title: string,
    subtitle: string
}

export default function TitleAndSubtitle({ title, subtitle }: ITitleAndSubtitle) {
    return (
        <div className={styles.content}>
            <div className={styles.bar}></div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
    )
}