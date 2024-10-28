'use client';

import { PAGES } from '@/constants/page';
import useAddBookStore from '@/store/addBookStore';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

interface Props {
  type: string;
}

function FlashHandler({ type }: Props) {
  const callbackUrl = useSearchParams().get('callbackUrl');
  const { resetWellId } = useAddBookStore((state) => state.actions);

  useEffect(() => {
    setTimeout(() => {
      if (type === 'review') {
        resetWellId();
      }
      // window.location.replace(callbackUrl || PAGES.HOME);
    }, 2500);
  }, []);

  return <></>;
}

export default FlashHandler;
