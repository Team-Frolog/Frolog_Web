'use client';

import { CATEGORY } from '@/constants/category';
import React from 'react';

interface Props {
  categoryData: {
    category: string;
    count: number;
  };
  onClick: () => void;
}

function CategoryItem({ categoryData, onClick }: Props) {
  const { name } = CATEGORY[categoryData.category];

  return (
    <div
      onClick={onClick}
      className='flex w-full cursor-pointer items-center gap-[12px] px-[16px] py-[12px] transition-all duration-150 hover:bg-gray-300'
    >
      <div
        className={`h-[16px] w-[16px] rounded-[50%] bg-category-bg-${categoryData.category}`}
      />
      <span className='text-body_lg text-gray-800'>
        {name} ({categoryData.count})
      </span>
    </div>
  );
}

export default CategoryItem;
