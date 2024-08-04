import ButtonWithText from '@/components/Button/ButtonWithText';
import { PAGES } from '@/constants/page';
import Link from 'next/link';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function LoginButton() {
  const {
    watch,
    formState: { isValid },
  } = useFormContext();

  return (
    <ButtonWithText
      btnText='로그인 하기'
      route='/login'
      disabled={!isValid || !watch('email') || !watch('password')}
      btnType='submit'
    >
      <Link href={PAGES.FIND_PASSWORD} className='text-body_lg_bold text-white'>
        비밀번호를 잊으셨나요?
      </Link>
    </ButtonWithText>
  );
}

export default LoginButton;
