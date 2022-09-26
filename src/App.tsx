import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useIsMounted } from './hooks/isMounted';
import { fetchData } from './utils/fetchData';

const App: React.FC = () => {
  // data contient les données de l'API
  const [data, setData] = useState<any>([]);
  /**
   * la variable ingredients permet de rechercher des recettes via la barre de recherche en
   * entrant l'ingrédient avec lequel on voudrait cuisiner.
   * Exemple: Le mot "Apple" recherchera toutes les recettes à base de pommes.
   */
  const [ingredients, setIngredients] = useState<string>('');

  const isMounted: React.MutableRefObject<boolean> = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      fetchData(`/recipes/findByIngredients?ingredients=${ingredients}`);
    }
  }, []);

  return (
    <div className='p-3'>
      <Header
        ingredients={ingredients}
        setIngredients={setIngredients}
        setData={setData}
        data={data}
      />
      <Main data={data} />
    </div>
  );
};

export default App;
