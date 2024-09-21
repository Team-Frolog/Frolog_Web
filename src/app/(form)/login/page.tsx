'use client';

import ErrorPopUp from '@/components/PopUp/ErrorPopUp';
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

function LoginPage() {
  const { isSaved, setIsSaved, userLogin, isFaild, setIsFaild } =
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
      <div className='flex flex-col gap-[20px]'>
        <LoginForm setIsFaild={setIsFaild} userLogin={userLogin} />
        <RememberMe isSaved={isSaved} setIsSaved={setIsSaved} />
      </div>
      <div className='flex-col-center w-full gap-[12px]'>
        <AnimatePresence>
          {isFaild && <ErrorPopUp errorMsg='로그인 정보를 다시 확인해주세요' />}
        </AnimatePresence>
        <LoginButton />
      </div>
    </GenericForm>
  );
}

export default LoginPage;
