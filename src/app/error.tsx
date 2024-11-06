'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import Button from '@/components/Button/Button';
import FinishLight from '@/components/Light/FinishLight';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className='safe-screen safe-header flex w-full flex-col items-center justify-between overflow-hidden overscroll-none bg-white'>
      <FinishLight frog='/images/frog/fallback/error-frog.svg'>
        <div className='flex flex-col items-center gap-[16px] pt-[50px]'>
          <h1 className='text-heading-lg-bold text-main'>error</h1>
          <span className='text-title-xl-bold text-gray-800 mobile:text-title-lg-bold'>
            잠시 후 다시 시도해주세요
          </span>
        </div>
      </FinishLight>

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
          <Button type='button' onClick={() => reset()}>
            새로고침
          </Button>
        </div>
      </div>
    </div>
  );
}
