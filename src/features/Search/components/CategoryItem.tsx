'use client';

import { CATEGORY } from '@/constants/category';
import React from 'react';

interface Props {
  categoryData: {
    category: string;
    count: number;
  };
}

function CategoryItem({ categoryData }: Props) {
  const { name, bg } = CATEGORY[categoryData.category];

  return (
    <div className='flex w-full cursor-pointer items-center gap-[12px] px-[16px] py-[12px] transition-all duration-150 hover:bg-gray-300'>
      <div
        className='h-[16px] w-[16px] rounded-[50%]'
        style={{ backgroundColor: bg }}
      />
      <span className='text-body_lg text-gray-800'>
        {name} ({categoryData.count})
      </span>
    </div>
  );
}

export default CategoryItem;
