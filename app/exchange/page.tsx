import { client } from "@/sanity/lib/client";
import CurrencyExchange from "./CurrencyExchange";
import { groq } from "next-sanity";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from './exchange-page.module.css';

export const revalidate = 60; // Revalidate every minute

async function getExchangeData() {
  const query = groq`{
    "countries": *[_type == "country"] {
      name,
      locations[] {
        name,
        address,
        description,
        rates[] {
          code,
          name,
          rate
        }
      }
    }
  }`;

  return await client.fetch(query);
}

export default async function ExchangePage() {
  const data = await getExchangeData();

  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.heroBanner}>
            <div className={styles.heroOverlay} />
            <div className={styles.heroContent}>
                <span className={styles.breadcrumb}>
                    <a href="/">Главная</a> / Обмен валюты
                </span>
                <h1 className={styles.heroTitle}>Выгодный обмен валюты</h1>
                <p className={styles.heroSubtitle}>
                    Актуальные курсы для вашего комфортного путешествия
                </p>
            </div>
        </section>

        <section className={styles.calculatorSection}>
            <CurrencyExchange
              initialCountries={data.countries}
            />
        </section>
      </main>
      <Footer />
    </>
  );
}
