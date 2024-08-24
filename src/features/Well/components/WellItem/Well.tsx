import Image from 'next/image';
import React from 'react';
import Outline from 'public/images/well/outline/1.svg';
import { Well as WellDataType } from '@/data/dummy/well';
import { CATEGORY } from '@/constants/category';

interface Props {
  wellData: WellDataType;
}

function Well({ wellData }: Props) {
  return (
    <div className='flex h-fit w-fit flex-col gap-[8px] place-self-center'>
      <div className='flex-center relative box-content h-[120px] w-[120px] bg-gray-900 p-[20px]'>
        <Image
          src='/images/frog/frog-sitting.svg'
          alt='frog'
          width={80}
          height={110}
          className='absolute inset-x-0 bottom-[18px] z-10 mx-auto h-[60%]'
        />
        <div className='absolute left-1/2 top-1/2 z-20 h-full w-full -translate-x-1/2 -translate-y-1/2 pt-[0px]'>
          <Outline fill={CATEGORY[wellData.category].bg} />
        </div>
      </div>
      <h5 className='text-center text-body_lg_bold text-gray-800'>
        {wellData.title}
      </h5>
    </div>
  );
}

export default Well;
