'use client';

import QuitButton from '@/components/Button/QuitButton';
import React from 'react';
import { TEST_CALLBACK } from '@/constants/storage';
import DownloadButton from './DownloadButton';

interface Props {
  id: '1' | '2' | '3';
}

function HeaderButtons({ id }: Props) {
  const hasCallback = sessionStorage.getItem(TEST_CALLBACK);

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
