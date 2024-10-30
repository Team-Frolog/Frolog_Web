'use client';

import { FROGS } from '@/constants/frogs';
import NewTag from '@/features/Well/components/NewTag';
import { getIsNew } from '@/features/Well/utils/getIsNew';
import Image from 'next/image';
import React from 'react';

interface Props {
  data: {
    id: string;
    date?: string;
  };
  isSelected: boolean;
  onClick: () => void;
  isExist?: boolean;
}

function FrogCharacter({ data, isSelected, onClick, isExist }: Props) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`relative flex h-fit w-full max-w-[105px] flex-col items-center justify-end gap-[12px] rounded-[12px] border bg-white pb-[16px] pt-[20px] ${isSelected ? 'border-main shadow-inner' : 'border-gray-300'}`}
    >
      {data.date && getIsNew(data.date) && <NewTag position='left-0 top-0' />}
      <Image
        src={FROGS[data.id].src}
        alt='frog character'
        width={77}
        height={108}
        className='w-full'
      />
      <div className='flex flex-col'>
        <span className='text-body-md text-gray-800'>
          {FROGS[data.id].name}
        </span>
        {isExist !== undefined && (
          <span
            className={`text-body-md-bold ${isExist ? 'text-main' : 'text-gray-800'}`}
          >
            {isExist ? '보유중' : `${FROGS[data.id].price}P`}
          </span>
        )}
      </div>
    </button>
  );
}

export default FrogCharacter;
