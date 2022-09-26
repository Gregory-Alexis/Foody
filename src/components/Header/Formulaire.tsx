import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { RestaurantMenu, Search } from '@mui/icons-material';
import { fetchData } from '../../utils/fetchData';
import { useIsMounted } from '../../hooks/isMounted';

interface Props {
  ingredients: string;
  setIngredients: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<any>>;
  data: [];
}

const Formulaire: React.FC<Props> = ({ ingredients, setIngredients, setData, data }) => {
  // Permet d'écrire dans la barre de recherche
  const handleSearch = (event: React.FormEvent) => {
    setIngredients((event.target as HTMLInputElement).value);
  };
  const isMounted: React.MutableRefObject<boolean> = useIsMounted();
  /*
   * Lors d'un submit, la fonction fera un appel api et,
    ira chercher les recettes à base de l'ingrédient inscrit dans la barre de recherche.
   */
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (isMounted) {
        fetchData(`/recipes/findByIngredients?ingredients=${ingredients}`).then((data) =>
          setData(data)
        );
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  /*  useEffect(() => {
      if (isMounted) {
        
      }
    }, []);*/

  return (
    <form className='relative mt-3' onSubmit={submitHandler}>
      <span className='absolute flex items-center bottom-0 top-0 text-gray-400'>
        <Search />
      </span>
      <input
        className='outline-none p-1 w-full pl-8'
        type='text'
        value={ingredients}
        onChange={handleSearch}
        placeholder='search ingredients... ex: Apple'
      />
      <button type='submit' className='absolute right-0 bg-blue-600 p-1 rounded-md'>
        <RestaurantMenu />
      </button>
    </form>
  );
};

export default Formulaire;
