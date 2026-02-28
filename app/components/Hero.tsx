import Link from 'next/link';
import styles from './hero.module.css';
import { client, urlFor } from '@/sanity/lib/client';

export default async function Hero() {
    const heroData = await client.fetch(`*[_type == "hero"][0]`);

    const headline = heroData?.headline || "АГЕНТСТВО \n НЕСТАНДАРТНЫХ \n ПУТЕШЕСТВИЙ";
    const subheadline = heroData?.subheadline || "Авторские туры, серфинг, экспедиции и приключения по всему миру";
    const buttonText = heroData?.buttonText || "ПОДОБРАТЬ ТУР";
    const backgroundUrl = heroData?.backgroundImage ? urlFor(heroData.backgroundImage).url() : '/hero.png';

    return (
        <section className={styles.hero} style={{ backgroundImage: `url('${backgroundUrl}')` }}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
                    {headline}
                </h1>
                <p className={styles.subtitle}>
                    {subheadline}
                </p>
                <Link href="/finder" className={styles.ctaButton}>
                    {buttonText}
                </Link>
            </div>
        </section>
    );
}
