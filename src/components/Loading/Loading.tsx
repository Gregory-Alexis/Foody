import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className='flex items-center justify-center'>
      <button
        type='button'
        className='inline-flex items-center mt-48 px-4 py-2 font-semibold leading-6 rounded-md  transition ease-in-out duration-150 cursor-not-allowed'
      >
        <svg
          className='animate-spin -ml-1 mr-3 h-20 w-20 text-black'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            stroke-width='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Loading;
