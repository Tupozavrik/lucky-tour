import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './finder.module.css';

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
                
                <div style={{ padding: '0 20px', marginTop: '60px', position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '100%', maxWidth: '1000px', height: '180px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', animation: 'pulse 1.5s infinite ease-in-out' }} />
                </div>

                <section className={styles.results} style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <div className={styles.grid} style={{ width: '100%', maxWidth: '1200px' }}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className={styles.card} style={{ animation: 'pulse 1.5s infinite ease-in-out' }}>
                                <div className={styles.cardImageWrap} style={{ background: '#e0e0e0' }} />
                                <div className={styles.cardBody}>
                                    <div style={{ height: '20px', background: '#e0e0e0', borderRadius: '4px', marginBottom: '16px', width: '70%' }} />
                                    <div className={styles.cardMeta}>
                                        <div style={{ height: '14px', background: '#e0e0e0', borderRadius: '4px', width: '30%' }} />
                                        <div style={{ height: '16px', background: '#e0e0e0', borderRadius: '4px', width: '30%' }} />
                                    </div>
                                    <div style={{ height: '36px', background: '#e0e0e0', borderRadius: '8px', width: '100%', marginTop: '12px' }} />
                                </div>
                            </div>
                        ))}
                    </div>
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
