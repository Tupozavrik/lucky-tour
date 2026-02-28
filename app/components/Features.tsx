import styles from './features.module.css';

export default function Features() {
    return (
        <section className={styles.features}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>НАША КОМАНДА</h2>
                <div className={styles.teamGrid}>
                    <div className={styles.teamMember}>
                        <div className={styles.avatar}>
                            {/* Фото будет добавлено позже */}
                            <span className={styles.avatarInitial}>Е</span>
                        </div>
                        <h3 className={styles.memberName}>Елена</h3>
                        <p className={styles.memberDesc}>ОПИСАНИЕ</p>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.avatar}>
                            {/* Фото будет добавлено позже */}
                            <span className={styles.avatarInitial}>О</span>
                        </div>
                        <h3 className={styles.memberName}>Оксана</h3>
                        <p className={styles.memberDesc}>ОПИСАНИЕ</p>
                    </div>
                </div>

                <h2 className={styles.sectionTitle} style={{ marginTop: '4rem' }}>ПОЧЕМУ МЫ?</h2>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Команда экспертов</h3>
                        <p>Мы лично проверяем все маршруты и отели, чтобы гарантировать вам лучший отдых.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Поддержка 24/7</h3>
                        <p>Мы всегда на связи во время вашего путешествия, готовы помочь в любой ситуации.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Уникальные маршруты</h3>
                        <p>Мы предлагаем не просто туры, а настоящие приключения, которые вы запомните на всю жизнь.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
