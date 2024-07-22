'use client';

import ButtonWithText from '@/components/Button/ButtonWithText';
import ErrorPopUp from '@/components/PopUp/ErrorPopUp';
import { PAGES } from '@/constants/page';
import { AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  LoginForm,
  LoginFormType,
  RememberMe,
  useLogin,
} from '@/features/Login';

function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/');
    }
  }, [router, session, status]);

  const { isSaved, setIsSaved, userLogin, isFaild, setIsFaild } =
    useLogin('login');
  const methods = useForm<LoginFormType>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    watch,
    formState: { isValid },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => userLogin(data))}
        className='form-layout'
      >
        <div className='flex flex-col gap-[20px]'>
          <LoginForm setIsFaild={setIsFaild} userLogin={userLogin} />
          <RememberMe isSaved={isSaved} setIsSaved={setIsSaved} />
        </div>
        <div className='flex-col-center w-full gap-[12px]'>
          <AnimatePresence>
            {isFaild && (
              <ErrorPopUp errorMsg='로그인 정보를 다시 확인해주세요' />
            )}
          </AnimatePresence>
          <ButtonWithText
            btnText='로그인 하기'
            route='/login'
            disabled={!isValid || !watch('email') || !watch('password')}
            btnType='submit'
          >
            <Link
              href={PAGES.FIND_PASSWORD}
              className='text-body_lg_bold text-white'
            >
              비밀번호를 잊으셨나요?
            </Link>
          </ButtonWithText>
        </div>
      </form>
    </FormProvider>
  );
}

export default LoginPage;
