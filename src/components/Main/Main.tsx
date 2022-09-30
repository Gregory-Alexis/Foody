import React from 'react';
import { useAppSelector } from '../../redux/app/hooks';
import Loading from '../Loading/Loading';
import Ingredient from './Recipes/Ingredient';
import TypeOfMeal from './Recipes/TypeOfMeal';

const Main: React.FC = () => {
  const { isLoading } = useAppSelector((state) => state.fetchRecipeByIngredient);

  if (isLoading) {
    <Loading />;
  }

  return (
    <div>
      <Ingredient />
      <TypeOfMeal />
    </div>
  );
};

export default Main;
