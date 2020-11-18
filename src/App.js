import React from 'react';
import Header from './components/Header/Header';
import Converter from './components/Converter/Converter';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Converter />
    </div>
  );
};

export default App;
