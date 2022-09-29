import React from 'react';
import { useAppSelector } from '../app/hooks';
import Loading from '../Loading/Loading';
import Ingredient from './Ingredient';
import TypeOfMeal from './TypeOfMeal';

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
