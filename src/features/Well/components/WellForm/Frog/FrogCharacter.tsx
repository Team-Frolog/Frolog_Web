import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import { getIsNew } from '@/features/Well/utils/getIsNew';
import NewTag from '../../NewTag';

interface Props {
  data: {
    id: string;
    date: string;
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
      {getIsNew(data.date) && <NewTag position='left-0 top-0' />}
      <Image
        src={IMAGES.frog.character.default}
        alt='frog character'
        width={77}
        height={108}
      />
      <span className='text-body-md text-gray-800'>개구리 이름</span>
    </button>
  );
}

export default FrogCharacter;
