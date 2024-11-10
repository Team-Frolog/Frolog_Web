import Image from 'next/image';
import React from 'react';
import { CATEGORY } from '@/constants/category';
import WellBubble from 'public/images/well/well-bubble.svg';
import MemoLeaf from './MemoLeaf';

interface Props {
  title: string;
  category: string;
  height: number;
  isReading: boolean;
  hasMemo: boolean;
}

function Wave({ title, category, height, isReading, hasMemo }: Props) {
  return (
    <div
      style={{ height }}
      className={`w-full bg-category-bg-${category} relative z-auto box-border flex justify-center pt-[12px]`}
    >
      <Image
        src={CATEGORY[category].wave}
        alt='wave'
        width={392}
        height={12}
        className='absolute -left-[0px] -top-[12px] h-[12px] w-full'
        loading='eager'
      />
      {isReading && (
        <WellBubble
          fill={CATEGORY[category].band}
          className='absolute left-[24px] top-[8px]'
        />
      )}
      {hasMemo && (
        <MemoLeaf bg={CATEGORY[category].text} line={CATEGORY[category].bg} />
      )}
      <span
        className={`text-category-text-${category} truncate text-center text-body-sm-bold ${isReading || hasMemo ? 'w-[65%]' : 'w-[90%]'}`}
      >
        {title}
      </span>
      <div
        className={`absolute h-[10px] w-full bg-category-bg-${category} bottom-[-10px] left-0`}
      />
    </div>
  );
}

export default Wave;
