import Header from './components/Header';
import Hero from './components/Hero';

import Features from './components/Features';
import Footer from './components/Footer';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Hero />

            <Features />
            <Footer />
        </main>
    );
}
