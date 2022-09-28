import axios, { AxiosResponse } from 'axios';

const BASE_URL: string = `https://api.spoonacular.com`;

// Récupère les données API
export const fetchIngredient = async (endpoint: string) => {
  const { data }: AxiosResponse = await axios.get(
    `${BASE_URL}${endpoint}&apiKey=${process.env.REACT_APP_DATA_API}`
  );
  return data;
};
