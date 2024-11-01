import React from 'react';

interface Props {
  theme: 'dark' | 'light';
}

function LoadingSpinner({ theme }: Props) {
  return (
    <div
      className={`spinner h-[30px] w-[30px] rounded-[50%] border-[4px] border-t-main ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}
    />
  );
}

export default LoadingSpinner;
