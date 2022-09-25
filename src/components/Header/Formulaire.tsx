import React, { useEffect } from 'react';
import { RestaurantMenu, Search } from '@mui/icons-material';
import axios, { AxiosResponse } from 'axios';

interface Props {
  ingredients: string;
  setIngredients: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<any>>;
  data: [];
}

const Formulaire: React.FC<Props> = ({ ingredients, setIngredients, setData, data }) => {
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${process.env.REACT_APP_DATA_API}`;

  // Permet d'écrire dans la barre de recherche
  const handleSearch = (event: React.FormEvent) => {
    setIngredients((event.target as HTMLInputElement).value);
  };

  /*
   * Lors d'un submit, la fonction fera un appel api et,
    ira recherche les recettes à base de l'ingrédient inscrit dans la barre de recherche.
   */
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const result: AxiosResponse = await axios.get(url);
    setData(result.data);
  };

  return (
    <form className='relative mt-3' onSubmit={submitHandler}>
      <span className='absolute flex items-center bottom-0 top-0 text-gray-400'>
        <Search />
      </span>
      <input
        className='outline-none p-1 w-full pl-8'
        type='text'
        value={ingredients}
        onChange={handleSearch}
        placeholder='search ingredients... ex: Apple'
      />
      <button type='submit' className='absolute right-0 bg-blue-600 p-1 rounded-md'>
        <RestaurantMenu />
      </button>
    </form>
  );
};

export default Formulaire;
