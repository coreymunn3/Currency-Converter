import axios from 'axios';

export const getRates = async (country = 'USD') => {
  // fetch rates for USD by default
  const { data } = await axios.get(
    `https://api.exchangeratesapi.io/latest?base=${country}`
  );
  return data;
};
