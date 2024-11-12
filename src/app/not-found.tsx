import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import LinkButton from '@/components/Button/LinkButton';
import BackButton from '@/components/Button/BackButton';
import Flash from '@/components/Flash/Flash';

function NotFound() {
  return (
    <Flash flashKey='notfound'>
      <BackButton
        safeArea='back-fixed'
        extraClass='absolute left-[24px] z-100'
      />
      <div className='flex-col-center relative w-full justify-end gap-[12px]'>
        <Image
          src={IMAGES.ground}
          alt='ground'
          width={319}
          height={257}
          className='h-auto max-h-[160px] w-full'
          loading='eager'
          priority
        />
        <div className='absolute bottom-0 left-0 flex w-full p-page'>
          <LinkButton route='/'>홈으로 돌아가기</LinkButton>
        </div>
      </div>
    </Flash>
  );
}

export default NotFound;
