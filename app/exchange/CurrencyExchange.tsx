"use client";

import { useState, useEffect } from "react";
import styles from "./exchange.module.css";
import { ArrowRightLeft } from "lucide-react";

type CurrencyRate = {
  code: string;
  name: string;
  rate: number;
};

type Location = {
  name: string;
  address: string;
  description?: string;
  rates?: CurrencyRate[];
};

type Country = {
  name: string;
  locations: Location[];
};

type Props = {
  initialCountries: Country[];
};

export default function CurrencyExchange({
  initialCountries,
}: Props) {
  // Default values mapping
  const activeCountries = initialCountries || [];
  const defaultCountry = activeCountries[0]?.name || "";
  const defaultLocation = activeCountries.find(c => c.name === defaultCountry)?.locations?.[0]?.name || "";

  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);

  const [amount, setAmount] = useState<number | string>(1000);
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const countryData = activeCountries.find((c) => c.name === selectedCountry);
  const locationsForSelectedCountry = countryData?.locations || [];
  const activeLocationData = locationsForSelectedCountry.find(l => l.name === selectedLocation);
  
  // The rates available AT this precise location.
  const activeRates = activeLocationData?.rates || [];

  useEffect(() => {
    // When country changes, select its first location by default
    if (selectedCountry) {
        const cData = activeCountries.find((c) => c.name === selectedCountry);
        if (cData && cData.locations?.length > 0) {
            const firstLoc = cData.locations[0].name;
            if (selectedLocation !== firstLoc && !cData.locations.find(l => l.name === selectedLocation)) {
              setSelectedLocation(firstLoc);
            }
        } else {
            setSelectedLocation("");
        }
    }
  }, [selectedCountry, activeCountries, selectedLocation]);

  useEffect(() => {
    // If rates change (location changes), try to preserve selected currencies, or fallback to available ones.
    if (activeRates.length > 0) {
      if (!activeRates.find(r => r.code === fromCurrency)) {
        setFromCurrency(activeRates.find(r => r.code === 'RUB')?.code || activeRates[0].code);
      }
      if (!activeRates.find(r => r.code === toCurrency) || toCurrency === "") {
        const targetRate = activeRates.find(r => r.code === 'USD')?.code || (activeRates.length > 1 ? activeRates[1].code : activeRates[0].code);
        setToCurrency(targetRate);
      }
    } else {
       setFromCurrency("");
       setToCurrency("");
    }
  }, [selectedLocation, activeRates, fromCurrency, toCurrency]);


  useEffect(() => {
    calculateExchange();
  }, [amount, fromCurrency, toCurrency, activeRates]);

  const calculateExchange = () => {
    const fromRate = activeRates.find((r) => r.code === fromCurrency)?.rate;
    const toRate = activeRates.find((r) => r.code === toCurrency)?.rate;

    const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;

    if (fromRate && toRate && !isNaN(numAmount)) {
      // conversion math
      const amountInBase = numAmount * fromRate;
      const finalAmount = amountInBase / toRate;
      setResult(finalAmount);
    } else {
      setResult(null);
    }
  };

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Location Selection */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Выбор местоположения</h2>
          
          <div className={styles.inputGroup}>
            <label className={styles.label}>Страна</label>
            <select
              className={styles.select}
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {activeCountries.length === 0 ? (
                <option disabled value="">Данные загружаются...</option>
              ) : (
                activeCountries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))
              )}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Офис / Район</label>
            <select
              className={styles.select}
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              disabled={locationsForSelectedCountry.length === 0}
            >
              {locationsForSelectedCountry.length === 0 && <option disabled value="">Нет доступных офисов</option>}
              {locationsForSelectedCountry.map((loc) => (
                <option key={loc.name} value={loc.name}>
                  {loc.name}
                </option>
              ))}
            </select>
          </div>

          {activeLocationData && (
            <div className={styles.locationInfoCard}>
              <div className={styles.locationInfoHeader}>Информация о точке</div>
              <div className={styles.locationAddress}>📍 {activeLocationData.address}</div>
              {activeLocationData.description && (
                  <div className={styles.locationDesc}>{activeLocationData.description}</div>
              )}
              {(!activeLocationData.rates || activeLocationData.rates.length === 0) && (
                <div className={styles.noRatesBadge}>Курсы валют в данном офисе пока не загружены</div>
              )}
            </div>
          )}
        </div>

        {/* Currency Calculator */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Калькулятор</h2>

          <div className={styles.calculatorForm}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Сумма</label>
              <input
                type="number"
                className={styles.input}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                disabled={activeRates.length === 0}
              />
            </div>

            <div className={styles.currencySelectorsRow}>
              <div className={styles.currencySelectWrapper}>
                <label className={styles.label}>Отдаю</label>
                <select
                  className={styles.select}
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  disabled={activeRates.length === 0}
                >
                  {activeRates.length === 0 ? (
                    <option value="">---</option>
                  ) : (
                    activeRates.map((rate) => (
                      <option key={`from-${rate.code}`} value={rate.code}>
                        {rate.code} - {rate.name}
                      </option>
                    ))
                  )}
                </select>
              </div>

              <button 
                className={styles.swapButton} 
                onClick={handleSwap} 
                aria-label="Поменять местами"
                disabled={activeRates.length === 0}
              >
                <ArrowRightLeft className={styles.swapIcon} />
              </button>

              <div className={styles.currencySelectWrapper}>
                <label className={styles.label}>Получаю</label>
                <select
                  className={styles.select}
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  disabled={activeRates.length === 0}
                >
                  {activeRates.length === 0 ? (
                    <option value="">---</option>
                  ) : (
                    activeRates.map((rate) => (
                      <option key={`to-${rate.code}`} value={rate.code}>
                        {rate.code} - {rate.name}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>

            <div className={styles.resultArea}>
              <div className={styles.resultLabel}>Итого к получению:</div>
              <div className={styles.resultValue}>
                {result !== null && !isNaN(result)
                  ? new Intl.NumberFormat("ru-RU", {
                      maximumFractionDigits: 2,
                    }).format(result)
                  : "0"}
                <span className={styles.resultCurrency}> {toCurrency}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
