import React from 'react';

/**
 * Typage des données reçu au lancement de l'application
 */
interface Props {
  data: [];
}

/**
 * Typage pour le paramètre "el" de la méthode .map
 */
interface Elem {
  id: number;
  image: string;
}

/**
 * Affiche les données API
 */
const Main: React.FC<Props> = ({ data }) => {
  return (
    <div className='grid grid-cols-2 gap-3 mt-4'>
      {data.map((el: Elem) => (
        <div key={el.id}>
          <img src={el.image} alt='recipes' className='rounded-lg' />
        </div>
      ))}
    </div>
  );
};

export default Main;
