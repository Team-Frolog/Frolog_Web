'use client';

import React, { useState } from 'react';
import ToggleIcon from 'public/icons/common/toggle.svg';
import CategoryItem from '../CategoryItem';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { category: 'novel', count: 12 },
    { category: 'travel', count: 8 },
    { category: 'it', count: 4 },
    { category: 'art', count: 2 },
  ];

  return (
    <div className='relative w-full'>
      <button
        type='button'
        onClick={() => setIsOpen((prev) => !prev)}
        className={`box-border flex w-full rounded-[12px] border px-[16px] py-[18px] ${isOpen ? 'border-gray-900 bg-gray-900 text-body_lg_bold text-white' : 'border-gray-400 bg-white text-body_lg text-gray-800'}`}
      >
        <span className='flex-1 text-start'>도서 카테고리 분류</span>
        <ToggleIcon
          fill='#B3B6C5'
          className={`transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      {isOpen && (
        <div className='absolute left-0 top-[65px] h-fit max-h-[300px] w-full overflow-auto rounded-[12px] border border-gray-400 py-[12px]'>
          {data.map((item) => (
            <CategoryItem key={item.category} categoryData={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
