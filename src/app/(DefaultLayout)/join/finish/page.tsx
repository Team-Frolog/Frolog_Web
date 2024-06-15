'use client';

import React from 'react';
import PopperAnimation from '@/components/animation/PopperAnimation';
import { usePreventBack } from '@/hooks/usePreventBack';
import { useSearchParams } from 'next/navigation';
import LinkButton from '@/components/common/button/LinkButton';
import FinishLight from '@/components/common/FinishLight';

function JoinFinishPage() {
  const username = useSearchParams().get('username');
  usePreventBack();

  return (
    <div className='flex h-full w-full flex-col justify-between overflow-hidden pt-[30px]'>
      <FinishLight>
        야호!
        <br />
        가입이
        <br />
        완료되었어요
      </FinishLight>
      <PopperAnimation />
      <div className='flex flex-1 flex-col justify-end gap-[12px] bg-white p-[24px]'>
        <span className=' text-center text-body_md text-gray-800'>
          {username}님의
          <br />
          독서 성향을 알기 위해, 간단히 7가지만 물어볼게요!
        </span>
        <LinkButton route='/frolog-test'>내 독서성향 알아보기</LinkButton>
      </div>
    </div>
  );
}

export default JoinFinishPage;
