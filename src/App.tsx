import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [ingredients, setIngredients] = useState<string>('');

  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${process.env.REACT_APP_DATA_API}`;

  useEffect(() => {
    const fetchData = async () => {
      const result: AxiosResponse = await axios.get(url);
      setData(result.data);
    };
    fetchData();
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
