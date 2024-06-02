'use client';

import ButtonWithText from '@/components/common/button/ButtonWithText';
import { ICONS } from '@/constants/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function LandingPage() {
  return (
    <div className='flex w-full flex-col bg-gray-900'>
      <header className='p-page pb-0'>
        <Image src={ICONS.common.cancel} alt='x' width={24} height={24} />
      </header>
      <div className='p-page flex w-full flex-1 flex-col justify-between'>
        <h2 className='text-main_bright text-h_lg_bold'>
          이제,
          <br />
          우물 밖으로
          <br />
          나갈 시간
        </h2>
        <ButtonWithText btnText='로그인 하기' route='/login'>
          <div className='flex gap-[6px]'>
            <span className='text-body_lg text-gray-400'>우리 초면인가요?</span>
            <Link href='/join?step=1' className='text-body_lg_bold text-white'>
              회원가입 하기
            </Link>
          </div>
        </ButtonWithText>
      </div>
    </div>
  );
}

export default LandingPage;
