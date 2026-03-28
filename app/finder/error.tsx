'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './finder.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <main className={styles.page} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '60vh', padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a1a1a' }}>Что-то пошло не так!</h2>
        <p style={{ color: '#888', marginBottom: '2rem', maxWidth: '500px' }}>
          Не удалось загрузить список туров. Пожалуйста, попробуйте обновить страницу.
        </p>
        <button
          onClick={() => reset()}
          style={{ padding: '0.8rem 2rem', background: '#1a8ee1', color: 'white', border: 'none', borderRadius: '2rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
        >
          Попробовать снова
        </button>
      </main>
      <Footer />
    </>
  );
}
