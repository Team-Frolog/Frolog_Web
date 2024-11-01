import Image from 'next/image';
import React from 'react';
import { CATEGORY } from '@/constants/category';
import WellBubble from 'public/images/well/well-bubble.svg';

interface Props {
  title: string;
  category: string;
  height: number;
  isReading: boolean;
}

function Wave({ title, category, height, isReading }: Props) {
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
        loading='eager'
      />
      {isReading && (
        <WellBubble
          fill={CATEGORY[category].band}
          className='absolute left-[24px] top-[8px]'
        />
      )}
      <span className={`text-category-text-${category} text-body-sm-bold`}>
        {title}
      </span>
      <div
        className={`absolute h-[10px] w-full bg-category-bg-${category} bottom-[-10px] left-0`}
      />
    </div>
  );
}

export default Wave;
