import Image from 'next/image';
import React from 'react';
import { CATEGORY } from '@/constants/category';

interface Props {
  title: string;
  category: string;
  height: number;
}

function Wave({ title, category, height }: Props) {
  return (
    <div
      style={{ height }}
      className={`w-full bg-category-bg-${category} relative z-auto box-border flex justify-center pt-[12px]`}
    >
      <Image
        src={CATEGORY[category].wave}
        alt='wave'
        width={390}
        height={12}
        className='absolute -top-[12px] left-0 h-[12px] w-full'
      />
      <span className={`text-category-text-${category} text-body-sm-bold`}>
        {title}
      </span>
    </div>
  );
}

export default Wave;
