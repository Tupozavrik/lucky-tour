'use client';

import React, { useState } from 'react';
import styles from './searchWidget.module.css';
import { Search, ChevronDown, Star, MapPin, Calendar, Clock, User, SlidersHorizontal, Heart } from 'lucide-react';

export default function SearchWidget() {
  const [type, setType] = useState('tours'); // 'tours', 'hotels', 'lastMinute'

  return (
    <div className={styles.container}>
      {/* Top Radios */}
      <div className={styles.typeSelector}>
        <label className={`${styles.radioLabel} ${type === 'tours' ? styles.activeRadio : ''}`}>
          <input 
            type="radio" 
            name="searchType" 
            className={styles.radioInput}
            checked={type === 'tours'}
            onChange={() => setType('tours')}
          />
          <div className={styles.radioCustom} />
          <span>Туры<span className={styles.hideOnMobileText}> с перелетом</span></span>
        </label>
        <label className={`${styles.radioLabel} ${type === 'hotels' ? styles.activeRadio : ''}`}>
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
        <label className={`${styles.radioLabel} ${type === 'lastMinute' ? styles.activeRadio : ''}`}>
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

      {/* Mobile Top Bar (City + Heart) */}
      <div className={`${styles.mobileTopBar} ${styles.showOnMobile}`}>
        <div className={styles.mobileCity}>
          из Москвы <ChevronDown size={16} />
        </div>
        <button className={styles.mobileHeartBtn}>
          <Heart size={20} color="#fff" />
        </button>
      </div>

      {/* Main Search Box */}
      <div className={styles.mainSearchBox}>
        <div className={styles.searchColumns}>
          <div className={`${styles.searchCol} ${styles.hideOnMobile}`}>
            <div className={styles.colLabel}>Город вылета</div>
            <div className={styles.colValue}>Москва</div>
          </div>
          <div className={`${styles.searchCol} ${styles.countryCol}`}>
            <MapPin className={styles.mobileIcon} size={18} color="#1a8ee1" />
            <div className={styles.colContent}>
              <div className={styles.colLabel}>Страна</div>
              <div className={styles.colValue}>Турция</div>
            </div>
          </div>
          <div className={`${styles.searchCol} ${styles.dateCol}`}>
            <Calendar className={styles.mobileIcon} size={18} color="#1a8ee1" />
            <div className={styles.colContent}>
              <div className={styles.colLabel}>Даты вылета</div>
              <div className={styles.colValue}>26 мар - 4 апр</div>
            </div>
          </div>
          <div className={`${styles.searchCol} ${styles.nightsCol}`}>
            <Clock className={styles.mobileIcon} size={18} color="#1a8ee1" />
            <div className={styles.colContent}>
              <div className={styles.colLabel}>Ночей</div>
              <div className={styles.colValue}>6 - 14 ночей</div>
            </div>
          </div>
          <div className={`${styles.searchCol} ${styles.touristsCol}`}>
            <User className={styles.mobileIcon} size={18} color="#1a8ee1" />
            <div className={styles.colContent}>
              <div className={styles.colLabel}>Туристы</div>
              <div className={styles.colValue}>2 взрослых</div>
            </div>
          </div>
          <div className={`${styles.searchCol} ${styles.mobileFiltersCol} ${styles.showOnMobile}`}>
            <SlidersHorizontal className={styles.mobileIcon} size={18} color="#1a8ee1" />
            <div className={styles.colContent}>
              <div className={styles.colValue}>Фильтры</div>
            </div>
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
