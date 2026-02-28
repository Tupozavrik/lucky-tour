import styles from './footer.module.css';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h4>ЛАКИ-ТУР</h4>
                    <p>Агентство нестандартных путешествий</p>
                </div>
                <div className={styles.column}>
                    <h4>Контакты</h4>
                    <p><Link href="tel:+79039267748" className={styles.link}>+7 (903) 926-77-48</Link></p>
                    <p><Link href="mailto:ziminauk@yandex.ru" className={styles.link}>ziminauk@yandex.ru</Link></p>
                    <p><Link href="https://yandex.ru/maps/org/laki_tur/1179968896/?ll=73.385354%2C54.971841&z=18" className={styles.link}>г. Омск, Полковая ул., 32</Link></p>
                </div>
                <div className={styles.column}>
                    <h4>Мы в соцсетях</h4>
                    <p><Link href="https://t.me/lucky_tour_omsk" className={styles.link} style={{ userSelect: 'none' }}>MAX</Link> <span style={{ userSelect: 'none' }}> | </span><Link href="https://t.me/lucky_tour_omsk" className={styles.link} style={{ userSelect: 'none' }}>Telegram</Link></p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p style={{ userSelect: 'none' }}>&copy; 2005-2026 ЛАКИ-ТУР. Все права защищены.</p>
            </div>
        </footer>
    );
}
