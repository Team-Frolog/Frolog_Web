'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import Button from '@/components/Button/Button';
import BackButton from '@/components/Button/BackButton';
import Flash from '@/components/Flash/Flash';

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
    <Flash flashKey='error'>
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
          <Button type='button' onClick={() => reset()}>
            새로고침
          </Button>
        </div>
      </div>
    </Flash>
  );
}
