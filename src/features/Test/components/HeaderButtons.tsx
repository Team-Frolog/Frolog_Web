'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import QuitButton from '@/components/Button/QuitButton';
import DownloadButton from './ShareButton';

interface Props {
  id: '1' | '2' | '3';
}

function HeaderButtons({ id }: Props) {
  const hasCallback = !!useSearchParams().get('callbackUrl');

  return (
    <div
      className={`absolute left-0 top-0 z-[20] flex w-full items-center p-[24px] ${hasCallback ? 'justify-end' : 'justify-between'}`}
    >
      {!hasCallback && <QuitButton route='/' classes='cursor-pointer' />}
      <DownloadButton type={id} />
    </div>
  );
}

export default HeaderButtons;
