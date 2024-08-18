import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

interface Props {
  data: {
    id: number;
    name: string;
    isNew: boolean;
  };
  isSelected: boolean;
  onClick: () => void;
}

function FrogCharacter({ data, isSelected, onClick }: Props) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`relative flex w-full max-w-[105px] flex-col items-center gap-[12px] rounded-[12px] border bg-white pb-[16px] pt-[20px] ${isSelected ? 'border-main shadow-inner' : 'border-gray-300'}`}
    >
      {data.isNew && (
        <span className='absolute left-0 top-0 rounded-[20px] bg-error px-[8px] py-[4px] text-body_sm_bold text-white'>
          NEW
        </span>
      )}
      <Image
        src={IMAGES.frog.character}
        alt='frog-ex'
        width={77}
        height={108}
      />
      <span className='text-body_md text-gray-800'>{data.name}</span>
    </button>
  );
}

export default FrogCharacter;