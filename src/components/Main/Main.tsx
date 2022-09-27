import React from 'react';
import { Recipe } from '../../models/recipe';

/**
 * Typage des données reçu au lancement de l'application
 */
interface Props {
  data: [];
}

/**
 * Affiche les données API
 */
const Main: React.FC<Props> = ({ data }) => {
  return (
    <div className='grid grid-cols-2 gap-3 mt-4'>
      {/*Typage pour le paramètre "el" de la méthode .map*/}
      {data.map((el: Recipe) => (
        <div key={el.id}>
          <img src={el.image} alt='recipes' className='rounded-lg' />
          <h1>{el.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Main;
