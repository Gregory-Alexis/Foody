import React from 'react';

import Ingredient from './Ingredient';
import TypeOfMeal from './TypeOfMeal';

const Main: React.FC = () => {
  return (
    <div>
      <Ingredient />
      <TypeOfMeal />
    </div>
  );
};

export default Main;
