'use client';

import React from 'react';

interface Props {
  handleChange: () => void;
  isPublic: boolean;
  theme?: 'light' | 'dark';
}

function ToggleButton({ isPublic, handleChange, theme = 'light' }: Props) {
  return (
    <div className='flex gap-[4px]'>
      <span
        className={`text-body-md ${theme === 'light' ? 'text-white' : 'text-gray-700'}`}
      >
        {isPublic ? '공개' : '비공개'}
      </span>
      <input
        type='checkbox'
        checked={isPublic}
        onChange={handleChange}
        className='relative h-[20px] w-[40px] cursor-pointer appearance-none rounded-[20px] bg-gray-700 outline-none before:absolute before:left-[2px] before:top-[2px] before:h-[16px] before:w-[16px] before:rounded-[50%] before:bg-white before:transition-transform before:duration-200 checked:bg-main checked:before:translate-x-[20px]'
      />
    </div>
  );
}

export default ToggleButton;
