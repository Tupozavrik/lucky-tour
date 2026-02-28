import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './contacts.module.css';
import { client } from '@/sanity/lib/client';

export const revalidate = 60; // Revalidate every 60 seconds

async function getContactData() {
    return await client.fetch(`*[_type == "contact"][0]`);
}

export default async function ContactsPage() {
    const data = await getContactData();

    // Fallbacks
    const WHATSAPP = data?.phone ? `https://api.whatsapp.com/send?phone=${data.phone.replace(/\D/g, '')}` : 'https://api.whatsapp.com/send?phone=79039267748';
    const MAX = 'https://max.ru/';

    // Форматирование телефона для отображения
    const phoneDisplay = data?.phone || '+7 (903) 926-77-48';
    // Телефон для ссылки tel:
    const phoneLink = data?.phone ? `tel:+${data.phone.replace(/\D/g, '')}` : 'tel:+79039267748';

    return (
        <>
            <Header />
            <main className={styles.page}>

                {/* Hero Banner */}
                <section className={styles.heroBanner}>
                    <div className={styles.heroOverlay} />
                    <div className={styles.heroContent}>
                        <span className={styles.breadcrumb}>
                            <Link href="/">Главная</Link> / Контакты
                        </span>
                        <h1 className={styles.heroTitle}>Контакты</h1>
                        <p className={styles.heroSubtitle}>
                            Свяжитесь с нами любым удобным способом
                        </p>
                    </div>
                </section>

                {/* Contacts Block */}
                <section className={styles.contactsSection}>
                    <div className={styles.contactsGrid}>

                        {/* Left: Info cards */}
                        <div className={styles.infoColumn}>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>📍</div>
                                <div>
                                    <h3 className={styles.infoLabel}>Адрес</h3>
                                    <p className={styles.infoValue}>Омск, Россия</p>
                                    <p className={styles.infoNote}>{data?.address || 'Полковая ул., 32'}</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>📞</div>
                                <div>
                                    <h3 className={styles.infoLabel}>Телефон / WhatsApp</h3>
                                    <a href={phoneLink} className={styles.infoLink}>
                                        {phoneDisplay}
                                    </a>
                                    <p className={styles.infoNote}>Ежедневно с 9:00 до 21:00 МСК</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>✉️</div>
                                <div>
                                    <h3 className={styles.infoLabel}>Email</h3>
                                    <a href={`mailto:${data?.email || 'elena-lucky-tour@gmail.com'}`} className={styles.infoLink}>
                                        {data?.email || 'elena-lucky-tour@gmail.com'}
                                    </a>
                                    <p className={styles.infoNote}>Отвечаем в течение 24 часов</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>🌐</div>
                                <div>
                                    <h3 className={styles.infoLabel}>Сайт</h3>
                                    <a
                                        href="https://lucky-tour.ru"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.infoLink}
                                    >
                                        lucky-tour.ru
                                    </a>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className={styles.socials}>
                                <h3 className={styles.socialsTitle}>Мы в соцсетях</h3>
                                <div className={styles.socialLinks}>

                                    <a
                                        href={data?.telegram || "https://t.me/@Elena_luckytour"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.socialBtn} ${styles.telegram}`}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                        </svg>
                                        Telegram
                                    </a>
                                    <a
                                        href={data?.vk || "https://vk.com/"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.socialBtn} ${styles.telegram}`}
                                        style={{ background: '#0077FF' }}
                                    >
                                        ВКонтакте
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right: Map + Form */}
                        <div className={styles.rightColumn}>
                            {/* Map */}
                            <div className={styles.mapWrap}>
                                <iframe
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A407b47050f41bd2f3dc5e1e2092a0545a265a0b5277e4bfcdbf96b190d0fd5f4&amp;source=constructor"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0, borderRadius: '16px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Lucky-tour на карте"
                                />
                            </div>

                            {/* Quick contact form */}
                            <div className={styles.formCard}>
                                <h2 className={styles.formTitle}>Напишите нам</h2>
                                <p className={styles.formSubtitle}>Ответим в течение нескольких часов</p>
                                {/* По форме - пока превратил её в пустую обертку, так как она не работала до этого */}
                                <div className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>Ваше имя</label>
                                            <input
                                                type="text"
                                                className={styles.formInput}
                                                placeholder="Иван Иванов"
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>Телефон</label>
                                            <input
                                                type="tel"
                                                className={styles.formInput}
                                                placeholder="+7 (___) ___-__-__"
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Email</label>
                                        <input
                                            type="email"
                                            className={styles.formInput}
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Сообщение</label>
                                        <textarea
                                            className={styles.formTextarea}
                                            rows={4}
                                            placeholder="Расскажите, какой тур вас интересует..."
                                        />
                                    </div>
                                    <a href={`mailto:${data?.email || 'elena-lucky-tour@gmail.com'}`} className={styles.formBtn} style={{ textAlign: 'center', textDecoration: 'none' }}>
                                        Написать на Email
                                    </a>
                                    <p className={styles.formNote}>
                                        Нажимая кнопку, вы соглашаетесь с{' '}
                                        <a href="#" className={styles.formNoteLink}>
                                            политикой обработки персональных данных
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* MAX CTA */}
                <section className={styles.whatsappBanner}>
                    <div className={styles.whatsappContent}>
                        <div className={styles.whatsappText}>
                            <h2 className={styles.whatsappTitle}>Предпочитаете общаться напрямую?</h2>
                            <p className={styles.whatsappSubtitle}>Напишите нам в MAX — ответим быстро</p>
                        </div>
                        <a
                            href={MAX}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappBtn}
                        >
                            <svg width="26" height="26" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="maxCtaBg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#2BDBFF" />
                                        <stop offset="45%" stopColor="#5040EE" />
                                        <stop offset="100%" stopColor="#9020DE" />
                                    </linearGradient>
                                    <linearGradient id="maxCtaIn" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#4B6AEF" />
                                        <stop offset="100%" stopColor="#6025CC" />
                                    </linearGradient>
                                </defs>
                                <rect width="100" height="100" rx="22" fill="url(#maxCtaBg)" />
                                <path fillRule="evenodd" fill="white" d="M50 9 A37 37 0 1 1 32 78 L13 90 L18 65 A37 37 0 0 1 50 9 Z M74 46 A24 24 0 1 1 26 46 A24 24 0 1 1 74 46 Z" />
                                <path fill="url(#maxCtaIn)" d="M50 25 A21 21 0 1 1 40 64 L22 76 L32 57 A21 21 0 0 1 50 25 Z" />
                            </svg>
                            Написать в MAX
                        </a>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
