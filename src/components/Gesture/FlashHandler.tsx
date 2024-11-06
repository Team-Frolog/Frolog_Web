'use client';

import { FlashType } from '@/app/(default)/flash/[type]/page';
import { PAGES } from '@/constants/page';
import useAddBookStore from '@/store/addBookStore';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

interface Props {
  type: FlashType;
}

function FlashHandler({ type }: Props) {
  const callbackUrl = useSearchParams().get('callbackUrl');
  const { resetWellId } = useAddBookStore((state) => state.actions);

  useEffect(() => {
    setTimeout(() => {
      if (type === 'review') {
        resetWellId();
      }
      if (type !== 'first_new_well') {
        window.location.replace(callbackUrl || PAGES.HOME);
      }
    }, 2500);
  }, []);

  return <></>;
}

export default FlashHandler;
