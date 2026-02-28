import styles from './features.module.css';
import { client, urlFor } from '@/sanity/lib/client';

export const revalidate = 60; // Revalidate every 60 seconds

async function getTeamMembers() {
    return await client.fetch(`*[_type == "teamMember"]{
        _id,
        name,
        description,
        "imageUrl": photo.asset->url
    }`);
}

export default async function Features() {
    const teamMembers = await getTeamMembers();

    return (
        <section className={styles.features}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>НАША КОМАНДА</h2>
                <div className={styles.teamGrid}>
                    {teamMembers.length > 0 ? (
                        teamMembers.map((member: any) => (
                            <div key={member._id} className={styles.teamMember}>
                                <div className={styles.avatar}>
                                    {member.imageUrl ? (
                                        <img src={member.imageUrl} alt={member.name} />
                                    ) : (
                                        <span className={styles.avatarInitial}>
                                            {member.name ? member.name.charAt(0).toUpperCase() : '👤'}
                                        </span>
                                    )}
                                </div>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberDesc}>{member.description}</p>
                            </div>
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', opacity: 0.7 }}>Команда пока не добавлена. Администратор может добавить сотрудников через CMS.</p>
                    )}
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
