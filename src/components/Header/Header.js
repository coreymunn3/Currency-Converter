import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <span className={styles.icon}>
        <i className='fas fa-comments-dollar fa-5x'></i>
      </span>
      <h2>
        Currency Converter <span className={styles.badge}>PRO</span>
      </h2>
      <p className={styles.subtext}>
        Choose the currency and amounts to get the exchange rate
      </p>
    </div>
  );
};

export default Header;
