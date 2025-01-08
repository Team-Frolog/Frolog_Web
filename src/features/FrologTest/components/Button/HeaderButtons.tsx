'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { PAGES } from '@/constants/page';
import QuitButton from '@/components/Button/QuitButton';
import ShareButton from './ShareButton';

/** 테스트 결과 페이지 상단 버튼 헤더
 * - 'callbackUrl' 쿼리 스트링이 존재할 경우 quit button이 추가로 렌더링 됩니다.
 */
function HeaderButtons() {
  const hasCallback = !!useSearchParams().get('callbackUrl');

  return (
    <div
      className={`absolute left-0 top-0 z-[20] flex w-full items-center p-[24px] ${hasCallback ? 'justify-end' : 'justify-between'}`}
    >
      {!hasCallback && (
        <QuitButton route={PAGES.HOME} classes='cursor-pointer' />
      )}
      <ShareButton />
    </div>
  );
}

export default HeaderButtons;
