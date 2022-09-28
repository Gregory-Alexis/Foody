import React, { useEffect, useState } from 'react';

import { useIsMounted } from '../../hooks/isMounted';
import { fetchTypeOfMeal } from '../../utils/fetchTypeOfMeal';

const TypeOfMeal: React.FC = () => {
  const [mealType, setMealType] = useState<string>('');

  const isMounted: React.MutableRefObject<boolean> = useIsMounted();

  useEffect(() => {
    fetchTypeOfMeal(`/recipes/complexSearch?query=pasta`).then((meal) => console.log(meal));
  }, [isMounted]);

  return (
    <div>
      {/*mealType.map((meal: MealType) => (
        <div key={meal.id}>
          <h1>{meal.title}</h1>
        </div>
      ))*/}
    </div>
  );
};

export default TypeOfMeal;
