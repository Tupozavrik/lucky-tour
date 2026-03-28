import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './exchange-page.module.css';

export default function Loading() {
    return (
        <>
            <Header />
            <main className={styles.page}>
                <section className={styles.heroBanner}>
                    <div className={styles.heroOverlay} />
                    <div className={styles.heroContent}>
                        <div style={{ width: '150px', height: '14px', background: 'rgba(255,255,255,0.2)', margin: '0 auto 12px', borderRadius: '4px', animation: 'pulse 1.5s infinite ease-in-out' }} />
                        <div style={{ width: '400px', height: '40px', background: 'rgba(255,255,255,0.2)', margin: '0 auto 8px', borderRadius: '4px', animation: 'pulse 1.5s infinite ease-in-out' }} />
                        <div style={{ width: '250px', height: '18px', background: 'rgba(255,255,255,0.2)', margin: '0 auto', borderRadius: '4px', animation: 'pulse 1.5s infinite ease-in-out' }} />
                    </div>
                </section>
                <section className={styles.calculatorSection} style={{ display: 'flex', justifyContent: 'center', marginTop: '-40px', padding: '0 20px', zIndex: 10, position: 'relative' }}>
                    <div style={{ width: '100%', maxWidth: '800px', height: '400px', background: '#fff', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', animation: 'pulse 1.5s infinite ease-in-out' }} />
                </section>
                <style dangerouslySetInnerHTML={{__html: `
                    @keyframes pulse {
                        0% { opacity: 0.6; }
                        50% { opacity: 1; }
                        100% { opacity: 0.6; }
                    }
                `}} />
            </main>
            <Footer />
        </>
    );
}
