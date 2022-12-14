import axios, { AxiosResponse } from 'axios';

const BASE_URL: string = `https://api.spoonacular.com`;

// Récupère les données API
export const fetchTypeOfMeal = async (endpoint: string) => {
  try {
    const { data }: AxiosResponse = await axios.get(
      `${BASE_URL}${endpoint}&apiKey=${process.env.REACT_APP_DATA_API}`
    );
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
