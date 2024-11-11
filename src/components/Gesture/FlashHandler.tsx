'use client';

import { PAGES } from '@/constants/page';
import { FlashKeys } from '@/data/ui/flash';
import useAddBookStore from '@/store/addBookStore';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

interface Props {
  type: FlashKeys;
  isRedirect: boolean;
}

function FlashHandler({ type, isRedirect }: Props) {
  const callbackUrl = useSearchParams().get('callbackUrl');
  const { resetWellId } = useAddBookStore((state) => state.actions);

  useEffect(() => {
    setTimeout(() => {
      if (type === 'review') {
        resetWellId();
      }
      if (isRedirect) {
        window.location.replace(callbackUrl || PAGES.HOME);
      }
    }, 2500);
  }, []);

  return <></>;
}

export default FlashHandler;
