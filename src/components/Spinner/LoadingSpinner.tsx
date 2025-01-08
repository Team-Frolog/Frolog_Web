import React from 'react';

interface Props {
  theme: 'dark' | 'light' | 'transparent';
}

/** 로딩 화면에 활용되는 스피너
 * @param theme - dark, light, transparent
 */
function LoadingSpinner({ theme }: Props) {
  const borderColor = {
    dark: 'border-gray-700',
    light: 'border-gray-300',
    transparent: 'border-gray-200',
  };

  return (
    <div
      className={`spinner h-[30px] w-[30px] rounded-[50%] border-[4px] border-t-main ${borderColor[theme]}`}
    />
  );
}

export default LoadingSpinner;
