import styles from "./styles.module.scss"

interface ITitleAndSubtitle {
    title: string,
    subtitle: string,
    darkTheme?: boolean
}

export default function TitleAndSubtitle({ title, subtitle, darkTheme = false }: ITitleAndSubtitle) {
    return (
        <div className={darkTheme ? styles.darkContent : styles.content}
        >
            <div className={styles.bar}></div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
    )
}