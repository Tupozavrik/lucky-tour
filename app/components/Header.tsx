import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    ЛАКИ-ТУР
                </Link>
                <nav className={styles.nav}>
                    <Link href="/finder" className={styles.link}>Поиск тура</Link>
                    <Link href="/contacts" className={styles.link}>Контакты</Link>
                    <Link href="/docs" className={styles.link}>Договоры</Link>
                </nav>
                <a
                    href="tel:+79039267748"
                    className={styles.whatsappBtn}
                >
                    +7 (903) 926-77-48
                </a>
            </div>
        </header>
    );
}
