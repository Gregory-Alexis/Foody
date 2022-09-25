import React from 'react';
import Formulaire from './Formulaire';

interface Props {
  ingredients: string;
  setIngredients: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<any>>;
  data: [];
}

const Header: React.FC<Props> = ({ ingredients, setIngredients, setData, data }) => {
  return (
    <div>
      <h1 className='font-semibold text-lg leading-5'>
        Make your own food,
        <br /> search for your <span className='text-green-600 font-semibold'>ingredients</span> and
        find all our recipes.
      </h1>
      <Formulaire
        ingredients={ingredients}
        setIngredients={setIngredients}
        setData={setData}
        data={data}
      />
    </div>
  );
};

export default Header;
