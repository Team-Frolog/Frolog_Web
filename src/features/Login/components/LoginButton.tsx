import ButtonWithText from '@/components/Button/ButtonWithText';
import { PAGES } from '@/constants/page';
import Link from 'next/link';
import React from 'react';
import { useFormContext } from 'react-hook-form';

/** 로그인 버튼 */
function LoginButton() {
  const {
    watch,
    formState: { isValid },
  } = useFormContext();

  return (
    <ButtonWithText
      btnText='로그인 하기'
      disabled={!isValid || !watch('email') || !watch('password')}
      btnType='submit'
      gap={14}
    >
      <Link href={PAGES.JOIN} className='text-body-lg-bold text-main'>
        30초만에 회원가입 하기
      </Link>
    </ButtonWithText>
  );
}

export default LoginButton;
