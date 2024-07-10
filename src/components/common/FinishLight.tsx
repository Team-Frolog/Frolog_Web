import { ICONS } from '@/constants/icons';
import React from 'react';
import Image from 'next/image';
import BigTitle from '@/components/common/text/BigTitle';
import { IMAGES } from '@/constants/images';

interface Props {
  children: React.ReactNode;
}

function FinishLight({ children }: Props) {
  return (
    <div className='relative z-0 flex h-fit w-full flex-1 flex-col bg-gray-900 pt-[30px]'>
      <Image
        src={ICONS.join.light}
        alt='light'
        width={30}
        height={30}
        className='z-0 w-full'
      />
      <div className='w-full flex-1 bg-white' />
      <div className='absolute left-1/2 z-10 flex h-full w-full -translate-x-1/2 flex-col items-center justify-between pt-[150px] mobile:pt-[100px]'>
        <BigTitle type='default' align='text-center'>
          {children}
        </BigTitle>

        <Image
          src={IMAGES.frog.congrats}
          alt='congrats'
          width={319}
          height={257}
          className='h-[55%] justify-self-end'
        />
      </div>
    </div>
  );
}

export default FinishLight;
