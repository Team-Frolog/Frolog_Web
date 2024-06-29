import React from 'react';
import PopperAnimation from '@/components/animation/PopperAnimation';
import FinishLight from '@/components/common/FinishLight';
import Image from 'next/image';
import { IMAGES } from '../../../../constants/images';
import { ICONS } from '@/constants/icons';
import Link from 'next/link';
import TestStartButton from '@/components/joinPage/TestStartButton';

function JoinFinishPage() {
  return (
    <div className='relative flex h-full w-full flex-col justify-between overflow-hidden pt-[30px]'>
      <Link
        className='absolute left-[24px] top-[24px] z-10 cursor-pointer'
        href='/'
      >
        <Image src={ICONS.common.cancel} alt='x' width={24} height={24} />
      </Link>
      <FinishLight>
        야호!
        <br />
        가입이
        <br />
        완료되었어요
      </FinishLight>
      <div className='flex w-full flex-1 flex-col items-center justify-end gap-[12px] bg-white'>
        <Image
          src={IMAGES.frog.finish}
          alt='congrats'
          width={319}
          height={257}
          className='w-full'
        />
        <TestStartButton />
      </div>
      <PopperAnimation />
    </div>
  );
}

export default JoinFinishPage;
