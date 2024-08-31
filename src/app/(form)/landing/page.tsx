import ButtonWithText from '@/components/Button/ButtonWithText';
import BigTitle from '@/components/Text/BigTitle';
import { PAGES } from '@/constants/page';
import Link from 'next/link';
import React from 'react';

function LandingPage() {
  return (
    <>
      <BigTitle type='bright' extraClass='text-start'>
        이제,
        <br />
        우물 밖으로
        <br />
        나갈 시간
      </BigTitle>
      <ButtonWithText
        btnText='로그인 하기'
        route={PAGES.LOGIN}
        disabled={false}
      >
        <div className='flex gap-[6px]'>
          <span className='text-body-lg text-gray-400'>우리 초면인가요?</span>
          <Link href={PAGES.JOIN} className='text-body-lg-bold text-white'>
            회원가입 하기
          </Link>
        </div>
      </ButtonWithText>
    </>
  );
}

export default LandingPage;
