import axios, { AxiosResponse } from 'axios';

const BASE_URL: string = `https://api.spoonacular.com`;

export const fetchData = async (endpoint: string) => {
  try {
    const result: AxiosResponse = await axios.get(
      `${BASE_URL}${endpoint}&apiKey=${process.env.REACT_APP_DATA_API}`
    );
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
