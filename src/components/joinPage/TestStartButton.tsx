'use client';

import React from 'react';
import LinkButton from '../common/button/LinkButton';
import { PAGES } from '@/constants/page';
import { useSearchParams } from 'next/navigation';

function TestStartButton() {
  const username = useSearchParams().get('username');

  return (
    <div className='absolute bottom-0 left-0 flex w-full flex-col gap-[12px] p-[24px]'>
      <span className=' gap-[12px] text-center text-body_lg_bold text-gray-800'>
        {username}님의
        <br />
        독서 성향에 맞는 책을 앞으로 추천할게요!
      </span>
      <LinkButton route={PAGES.TEST}>내 독서성향 알아보기</LinkButton>
    </div>
  );
}

export default TestStartButton;
