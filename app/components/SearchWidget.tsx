'use client';

import React, { useState } from 'react';
import styles from './searchWidget.module.css';
import { Search, ChevronDown, Star } from 'lucide-react';

export default function SearchWidget() {
  const [type, setType] = useState('tours'); // 'tours', 'hotels', 'lastMinute'

  return (
    <div className={styles.container}>
      {/* Top Radios */}
      <div className={styles.typeSelector}>
        <label className={styles.radioLabel}>
          <input 
            type="radio" 
            name="searchType" 
            className={styles.radioInput}
            checked={type === 'tours'}
            onChange={() => setType('tours')}
          />
          <div className={styles.radioCustom} />
          <span>Туры с перелетом</span>
        </label>
        <label className={styles.radioLabel}>
          <input 
            type="radio" 
            name="searchType" 
            className={styles.radioInput}
            checked={type === 'hotels'}
            onChange={() => setType('hotels')}
          />
          <div className={styles.radioCustom} />
          <span>Отели</span>
        </label>
        <label className={styles.radioLabel}>
          <input 
            type="radio" 
            name="searchType" 
            className={styles.radioInput}
            checked={type === 'lastMinute'}
            onChange={() => setType('lastMinute')}
          />
          <div className={styles.radioCustom} />
          <span>Горящие</span>
        </label>
      </div>

      {/* Main Search Box */}
      <div className={styles.mainSearchBox}>
        <div className={styles.searchColumns}>
          <div className={styles.searchCol}>
            <div className={styles.colLabel}>Город вылета</div>
            <div className={styles.colValue}>Москва</div>
          </div>
          <div className={styles.searchCol}>
            <div className={styles.colLabel}>Страна</div>
            <div className={styles.colValue}>Турция</div>
          </div>
          <div className={styles.searchCol}>
            <div className={styles.colLabel}>Даты вылета</div>
            <div className={styles.colValue}>22 мар - 31 мар</div>
          </div>
          <div className={styles.searchCol}>
            <div className={styles.colLabel}>Ночей</div>
            <div className={styles.colValue}>6 - 14</div>
          </div>
          <div className={styles.searchCol}>
            <div className={styles.colLabel}>Туристы</div>
            <div className={styles.colValue}>2 взрослых</div>
          </div>
        </div>
        
        <div className={styles.submitBtnContainer}>
          <button className={styles.submitBtn}>
            <Search size={20} color="#fff" strokeWidth={2.5} />
            <span>Найти туры</span>
          </button>
        </div>
      </div>

      {/* Bottom Filters */}
      <div className={styles.bottomFilters}>
        <button className={styles.filterBtn}>
          Класс отеля
          <div className={styles.stars}>
            <Star className={styles.starActive} fill="currentColor" size={16} strokeWidth={0} />
            <Star className={styles.star} fill="currentColor" size={16} strokeWidth={0} />
            <Star className={styles.star} fill="currentColor" size={16} strokeWidth={0} />
            <Star className={styles.star} fill="currentColor" size={16} strokeWidth={0} />
            <Star className={styles.star} fill="currentColor" size={16} strokeWidth={0} />
          </div>
        </button>
        <button className={styles.filterBtn}>
          Курорт / отель
          <ChevronDown className={styles.iconDown} size={16} />
        </button>
        <button className={styles.filterBtn}>
          Питание
          <ChevronDown className={styles.iconDown} size={16} />
        </button>
        <button className={styles.filterBtn}>
          Рейтинг
          <ChevronDown className={styles.iconDown} size={16} />
        </button>
        <button className={styles.filterBtn}>
          Расширенные филь...
          <ChevronDown className={styles.iconDown} size={16} />
        </button>
      </div>
    </div>
  );
}
