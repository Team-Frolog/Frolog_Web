import React from 'react';

interface Props {
  theme: 'dark' | 'light' | 'transparent';
}

function LoadingSpinner({ theme }: Props) {
  return (
    <div
      className={`spinner h-[30px] w-[30px] rounded-[50%] border-[4px] border-t-main ${theme === 'dark' ? 'border-gray-700' : theme === 'light' ? 'border-gray-300' : 'border-gray-200'}`}
    />
  );
}

export default LoadingSpinner;
