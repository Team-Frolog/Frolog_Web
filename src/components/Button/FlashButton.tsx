'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { PAGES } from '@/constants/page';
import LinkButton from './LinkButton';

interface Props {
  type: string;
}

function FlashButton({ type }: Props) {
  const linkUrl = useSearchParams().get('linkUrl') || PAGES.WELL;

  return (
    <div className='absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-center px-page'>
      <LinkButton
        route={type === 'first_new_well' ? PAGES.HOME : linkUrl}
        isReplace
      >
        확인
      </LinkButton>
    </div>
  );
}

export default FlashButton;
