import React from 'react';
import { Spinner } from 'daisyui';

const Loader = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900'>
      <Spinner className='text-yellow-400 w-16 h-16' />
    </div>
  );
};

export default Loader;