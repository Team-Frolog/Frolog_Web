import { CATEGORY } from '@/constants/category';
import Image from 'next/image';
import React from 'react';

interface Props {
  isRootUser: boolean;
}

function EmptyWellItem({ isRootUser }: Props) {
  return (
    <div className='relative z-auto box-border flex h-[55px] w-full justify-center bg-category-bg-economic_business pt-[12px]'>
      <Image
        src={CATEGORY.economic_business.wave}
        alt='wave'
        width={390}
        height={12}
        className='absolute -top-[12px] left-0 h-[12px] w-full'
        loading='eager'
      />
      <span className='text-body-sm-bold text-category-text-economic_business'>
        {isRootUser
          ? '책을 추가해 높게 올라가봐요!'
          : '아직 우물이 비어있어요..'}
      </span>
    </div>
  );
}

export default EmptyWellItem;
