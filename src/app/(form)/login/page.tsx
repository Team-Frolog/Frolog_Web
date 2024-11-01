'use client';

import ErrorToast from '@/components/Toast/ErrorToast';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import {
  LoginForm,
  LoginFormType,
  RememberMe,
  useLogin,
  LoginButton,
} from '@/features/Login';
import GenericForm from '@/components/Form/GenericForm';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';

function LoginPage() {
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
      {isLoading && <LoadingOverlay />}
      <div className='flex flex-col gap-[20px]'>
        <LoginForm setIsFaild={setIsFaild} userLogin={userLogin} />
        <RememberMe isSaved={isSaved} setIsSaved={setIsSaved} />
      </div>
      <div className='flex-col-center w-full gap-[12px]'>
        <AnimatePresence>
          {isFaild && <ErrorToast errorMsg='로그인 정보를 다시 확인해주세요' />}
        </AnimatePresence>
        <LoginButton />
      </div>
    </GenericForm>
  );
}

export default LoginPage;
