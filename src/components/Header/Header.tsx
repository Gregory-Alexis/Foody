import React from 'react';
import Formulaire from './Formulaire';

const Header: React.FC = () => {
  return (
    <div>
      <h1 className='font-semibold text-lg leading-5'>
        Make your own food,
        <br /> search for your <span className='text-green-600 font-semibold'>ingredients</span> and
        find all our recipes.
      </h1>
      <Formulaire />
    </div>
  );
};

export default Header;
