import React, { useState } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App: React.FC = () => {
  // data contient les données de l'API

  return (
    <div className='p-3 bg-pink-100'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
