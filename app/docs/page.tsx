import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './group.module.css';

export default function GroupPage() {
    return (
        <>
            <Header />
            <main className={styles.page}>

                {/* Hero Banner */}
                <section className={styles.heroBanner}>
                    <div className={styles.heroOverlay} />
                    <div className={styles.heroContent}>
                        <span className={styles.breadcrumb}>
                            <Link href="/">Главная</Link> / Договоры
                        </span>
                        <h1 className={styles.heroTitle}>Договоры</h1>
                        <p className={styles.heroSubtitle}>
                            Договоры (такие то, такие то)
                        </p>
                    </div>
                </section>



                {/* Documents Section */}
                <section className={styles.toursSection}>
                    <p>Здесь будут документы</p>
                </section>

            </main>
            <Footer />
        </>
    );
}
