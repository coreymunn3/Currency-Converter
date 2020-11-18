import React from 'react';
import styles from './ConverterField.module.css';

const ConverterField = ({
  currencies,
  currency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) => {
  return (
    <div className={styles.formControl}>
      <select name='currency' value={currency} onChange={onChangeCurrency}>
        {currencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
      <input
        type='number'
        name='amount'
        value={amount}
        onChange={onChangeAmount}
      ></input>
    </div>
  );
};

export default ConverterField;
