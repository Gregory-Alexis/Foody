import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RestaurantMenu, Search } from '@mui/icons-material';

import { fetchRecipeByIngredient } from '../redux/features/fetchRecipeByIngredientSlice';

const Formulaire: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');

  const dispatch = useDispatch();

  const url = `/recipes/findByIngredients?ingredients=${ingredients}`;

  const handleSearch = (event: React.FormEvent) => {
    setIngredients((event.target as HTMLInputElement).value);
  };

  const SubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(fetchRecipeByIngredient(url));
  };

  return (
    <form className='relative mt-3' onSubmit={SubmitHandler}>
      <span className='absolute flex items-center bottom-0 top-0 text-gray-400'>
        <Search />
      </span>
      <input
        className='outline-none p-1 w-full pl-8'
        type='text'
        name='text'
        value={ingredients}
        onChange={handleSearch}
        placeholder='search ingredients... ex: Apple'
        required
      />

      <button type='submit' className='absolute right-0 bg-blue-600 p-1 rounded-md'>
        <RestaurantMenu />
      </button>
    </form>
  );
};

export default Formulaire;
