import React from 'react';

import { useAppSelector } from '../app/hooks';

interface Elem {
  id: number;
  image: string;
  title: string;
}

const Ingredient: React.FC = () => {
  const { getRecipeByIngredient } = useAppSelector((state) => state.fetchRecipeByIngredient);
  console.log(getRecipeByIngredient);
  return (
    <div className='grid grid-cols-2 gap-3 mt-4'>
      {getRecipeByIngredient.map((el: Elem) => (
        <div key={el.id} className='bg-white rounded-2xl p-1 font-semibold text-sm'>
          <img src={el.image} alt='recipes' className='rounded-2xl' />
          <h1 className='p-2'>{el.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Ingredient;
