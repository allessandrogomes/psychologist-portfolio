import styles from "./styles.module.scss"

export default function CallSection() {
    return (
        <section className={styles.section}>
            <h2>Você só precisa de uma conversa</h2>
            <h3>Dê o primeiro passo!</h3>
            <button>Quero conversar</button>
        </section>
    )
}