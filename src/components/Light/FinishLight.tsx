import React from 'react';
import Image from 'next/image';
import BigTitle from '@/components/Text/BigTitle';

interface Props {
  children: React.ReactNode;
  frog: string;
}

function FinishLight({ children, frog }: Props) {
  return (
    <div className='relative z-0 flex h-fit w-full flex-1 flex-col bg-gray-900 pt-[30px]'>
      <Image
        src='/images/flash/light.webp'
        alt='light'
        width={2505}
        height={2479}
        className='z-0 w-full'
        loading='eager'
        priority
      />
      <div className='w-full flex-1 bg-white' />
      <div className='flex-col-center absolute left-1/2 z-10 h-full w-full -translate-x-1/2 justify-between gap-[10px] pt-[150px] [@media(max-height:800px)]:pt-[100px]'>
        <BigTitle
          type='default'
          extraClass='text-center mobile:text-heading-md-bold'
        >
          {children}
        </BigTitle>

        <div className='flex flex-1 items-end justify-center'>
          <Image
            src={frog}
            alt='frog'
            width={1661}
            height={1339}
            className='h-full max-h-[257px] w-full mobile:h-auto [@media(max-height:700px)]:w-[70%]'
            loading='eager'
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default FinishLight;
