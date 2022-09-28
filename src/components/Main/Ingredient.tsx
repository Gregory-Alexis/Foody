import React, { memo } from 'react';
import { useSelector } from 'react-redux';

interface Elem {
  id: number;
  image: string;
  title: string;
}

const Ingredient: React.FC = () => {
  const { getRecipeByIngredient } = useSelector((state: any) => state.fetchRecipeByIngredient);
  console.log(getRecipeByIngredient);
  return (
    <div className='grid grid-cols-2 gap-3 mt-4'>
      {getRecipeByIngredient.map((el: Elem) => (
        <div key={el.id}>
          <img src={el.image} alt='recipes' className='rounded-2xl' />
          <h1>{el.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Ingredient;
