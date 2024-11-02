import PopperAnimation from '@/components/animation/PopperAnimation';
import FlashHandler from '@/components/Gesture/FlashHandler';
import BigTitle from '@/components/Text/BigTitle';
import { flash } from '@/data/ui/flash';
import Image from 'next/image';
import React from 'react';

interface Props {
  params: {
    type: 'review' | 'new_well';
  };
}

export async function generateStaticParams() {
  return [{ type: 'review' }, { type: 'new_well' }];
}

function FlashPage({ params: { type } }: Props) {
  const { getTitle, frog, ground, width, height, max_height } = flash[type];

  return (
    <div className='safe-screen fixed inset-x-0 left-0 top-0 z-100 mx-auto flex w-[450px] flex-col items-center justify-between overflow-hidden overscroll-none bg-white mobile:left-0 mobile:w-full'>
      <FlashHandler type={type} />
      <div className='absolute z-0 flex h-fit w-full flex-1 flex-col items-center bg-gray-900 pt-[30px]'>
        <Image
          src='/images/flash/light.svg'
          alt='light'
          width={481}
          height={476}
          className='z-0 w-full'
          loading='eager'
          priority
        />
        <div className='w-full flex-1 bg-white' />
      </div>
      <div className='z-10 flex h-fit w-full flex-1 flex-col items-center justify-end pt-[170px] mobile:pt-[120px]'>
        <div className='flex min-h-[240px] w-fit items-end mobile:min-h-[180px]'>
          <BigTitle
            type='default'
            extraClass='text-center mobile:text-heading-md-bold'
          >
            {getTitle()}
          </BigTitle>
        </div>

        <div className='flex flex-1 items-end justify-center'>
          <Image
            src={frog}
            alt='frog'
            width={width}
            height={height}
            className='h-full w-full'
            loading='eager'
            priority
            style={{ maxHeight: `${max_height}px`, marginBottom: '-5px' }}
          />
        </div>
        <Image
          src={ground}
          alt='ground'
          width={390}
          height={182}
          className='w-full'
          loading='eager'
          priority
        />
      </div>
      <PopperAnimation />
    </div>
  );
}

export default FlashPage;
