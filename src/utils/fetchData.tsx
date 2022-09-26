import axios, { AxiosResponse } from 'axios';

const BASE_URL = `https://api.spoonacular.com`;

export const fetchData = async (endpoint: string) => {
  const result: AxiosResponse = await axios.get(
    `${BASE_URL}${endpoint}&apiKey=${process.env.REACT_APP_DATA_API}`
  );
  return result;
};
