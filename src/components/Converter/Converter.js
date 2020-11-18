import React, { useState, useEffect } from 'react';
import ConverterField from '../ConverterField/ConverterField';
import { getRates } from '../../api';

import styles from './Converter.module.css';

const Converter = () => {
  // local state to hold rates & selections
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [allRates, setAllRates] = useState({});
  const [exchange, setExchange] = useState(0);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  // pull rates from api, USD by default
  useEffect(() => {
    const fetchApi = async () => {
      const { rates } = await getRates(fromCurrency);
      setAllRates(rates);
      setCurrencies(Object.keys(rates));
      setExchange(rates[toCurrency]);
    };
    fetchApi();
  }, [fromCurrency]);

  useEffect(() => {
    setExchange(allRates[toCurrency]);
  }, [toCurrency]);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchange;
  } else {
    toAmount = amount;
    fromAmount = amount / exchange;
  }

  const handleFromAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
    setAmountInFromCurrency(false);
  };

  return (
    <div className={styles.converterContainer}>
      <ConverterField
        currencies={currencies}
        currency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        amount={fromAmount}
        onChangeAmount={handleFromAmountChange}
      />

      <ConverterField
        currencies={currencies}
        currency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={handleToAmountChange}
      />
    </div>
  );
};

export default Converter;
