'use client';

import React from 'react';
import ErrorToast from '@/components/Toast/ErrorToast';
import { AnimatePresence } from 'framer-motion';
import GenericForm from '@/components/Form/GenericForm';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import { useLogin } from '../hooks/useLogin';
import LoginForm from './LoginForm';
import RememberMe from './RememberMe';
import { LoginForm as LoginFormType } from '../types/login';
import LoginButton from './LoginButton';

function LoginFormPage() {
  const { isSaved, setIsSaved, userLogin, isFaild, setIsFaild, isLoading } =
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
      <div className='flex flex-col gap-[20px] py-page'>
        <LoginForm setIsFaild={setIsFaild} userLogin={userLogin} />
        <RememberMe isSaved={isSaved} setIsSaved={setIsSaved} />
      </div>
      <div className='flex-col-center w-full gap-[12px] pb-[24px]'>
        <AnimatePresence>
          {isFaild && <ErrorToast errorMsg='로그인 정보를 다시 확인해주세요' />}
        </AnimatePresence>
        <LoginButton />
      </div>
    </GenericForm>
  );
}

export default LoginFormPage;
