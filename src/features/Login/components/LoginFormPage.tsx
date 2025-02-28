'use client';

import React from 'react';
import Link from 'next/link';
import ErrorToast from '@/components/Toast/ErrorToast';
import { AnimatePresence } from 'framer-motion';
import GenericForm from '@/components/Form/GenericForm';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import { PAGES } from '@/constants/page';
import { useLogin } from '../hooks/useLogin';
import LoginForm from './LoginForm';
import RememberMe from './RememberMe';
import { LoginForm as LoginFormType } from '../types/login';
import LoginButton from './LoginButton';

/** 로그인 페이지 */
function LoginFormPage() {
  const { isSaved, setIsSaved, userLogin, isFailed, setIsFailed, isLoading } =
    useLogin('login');

  return (
    <GenericForm<LoginFormType>
      onSubmit={userLogin}
      formOptions={{
        mode: 'onBlur',
        defaultValues: {
          email: '',
          password: '',
        },
      }}
    >
      {isLoading && <LoadingOverlay theme='dark' />}
      <div className='flex-column gap-[20px] py-[32px]'>
        <LoginForm setIsFailed={setIsFailed} userLogin={userLogin} />
        <div className='flex w-full items-center justify-between'>
          <RememberMe isSaved={isSaved} setIsSaved={setIsSaved} />
          <Link href={PAGES.FIND_PASSWORD} className='text-body-sm text-main'>
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>
      <div className='flex-col-center w-full gap-[12px] pb-[24px]'>
        <AnimatePresence>
          {isFailed && (
            <ErrorToast errorMsg='로그인 정보를 다시 확인해주세요' />
          )}
        </AnimatePresence>
        <LoginButton />
      </div>
    </GenericForm>
  );
}

export default LoginFormPage;
