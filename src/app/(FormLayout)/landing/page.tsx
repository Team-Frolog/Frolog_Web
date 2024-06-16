'use client';

import ButtonWithText from '@/components/common/button/ButtonWithText';
import BigTitle from '@/components/common/text/BigTitle';
import { PAGES } from '@/constants/pageConfig';
import Link from 'next/link';
import React from 'react';

function LandingPage() {
  return (
    <div className='flex h-full w-full flex-col bg-gray-900'>
      <div className='flex w-full flex-1 flex-col justify-between p-page'>
        <BigTitle type='bright'>
          이제,
          <br />
          우물 밖으로
          <br />
          나갈 시간
        </BigTitle>
        <ButtonWithText btnText='로그인 하기' route='/login' disabled={false}>
          <div className='flex gap-[6px]'>
            <span className='text-body_lg text-gray-400'>우리 초면인가요?</span>
            <Link
              href={`${PAGES.JOIN}?step=1`}
              className='text-body_lg_bold text-white'
            >
              회원가입 하기
            </Link>
          </div>
        </ButtonWithText>
      </div>
    </div>
  );
}

export default LandingPage;
