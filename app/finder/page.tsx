import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './finder.module.css';
import { client } from '@/sanity/lib/client';
import SearchWidget from '../components/SearchWidget';

export const revalidate = 60;

async function getTours() {
    return await client.fetch(`*[_type == "tour"]{
        _id,
        title,
        price,
        duration,
        location,
        "imageUrl": mainImage.asset->url
    }`);
}

export default async function FinderPage() {
    const tours = await getTours();

    return (
        <>
            <Header />
            <main className={styles.page}>
                <section className={styles.heroBanner}>
                    <div className={styles.heroOverlay} />
                    <div className={styles.heroContent}>
                        <span className={styles.breadcrumb}>
                            <Link href="/">Главная</Link> / Поиск тура
                        </span>
                        <h1 className={styles.heroTitle}>Найдите свой идеальный тур</h1>
                        <p className={styles.heroSubtitle}>
                            Более 50 уникальных направлений по всему миру
                        </p>
                    </div>
                </section>

                <div style={{ padding: '0 20px', marginTop: '60px', position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
                    <SearchWidget />
                </div>

                <section className={styles.results}>
                    <div className={styles.grid}>
                        {tours.map((tour: any) => (
                            <div key={tour._id} className={styles.card}>
                                <div className={styles.cardImageWrap}>
                                    <span className={styles.cardTag} style={{ zIndex: 1 }}>{tour.location || 'Весь мир'}</span>
                                    <Image
                                        src={tour.imageUrl || '/hero.png'}
                                        alt={tour.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className={styles.cardImage}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardName}>{tour.title}</h3>
                                    <div className={styles.cardMeta}>
                                        <span className={styles.cardDuration}>⏱️ {tour.duration || 'По запросу'}</span>
                                        <span className={styles.cardPrice}>{tour.price || 'Уточняйте'}</span>
                                    </div>
                                    <button className={styles.cardBtn}>Узнать подробнее</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.ctaBanner}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Не нашли подходящий тур?</h2>
                        <p className={styles.ctaText}>
                            Свяжитесь с нами — мы составим индивидуальный маршрут специально для вас
                        </p>
                        <a
                            href="https://t.me/lucky_tour_omsk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaBtn}
                        >
                            Написать в Telegram
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
