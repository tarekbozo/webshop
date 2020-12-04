import React from 'react';

export const Message = ({ children }) => {
  return (
    <>
      <div className='container mx-auto px-4' role='alert'>
        <div className='text-center py-4 lg:px-4'>
          <div
            className='p-2 bg-red-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex'
            role='alert'
          >
            <span className='flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3 '>
              {children}
            </span>
            <span className='font-semibold mr-2 text-left flex-auto'>
              Something not ideal might be happening.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
