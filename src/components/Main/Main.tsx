import React from 'react';

interface Props {
  data: [];
}

interface Elem {
  id: number;
  image: string;
}

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
