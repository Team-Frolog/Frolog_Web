'use client';

import ButtonWithText from '@/components/common/button/ButtonWithText';
import CheckButton from '@/components/common/button/CheckButton';
import ErrorPopUp from '@/components/common/popup/ErrorPopUp';
import FormInput from '@/components/common/form/input/FormInput';
import { PAGES } from '@/constants/page';
import { useLogin } from '@/hooks/auth/useLogin';
import { AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export interface ILoginForm {
  email: string;
  password: string;
}

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
  const methods = useForm<ILoginForm>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isValid },
  } = methods;

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit((data) => userLogin(data))();
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => userLogin(data))}
        className='form-layout'
      >
        <div className='flex flex-col gap-[20px]'>
          <div className='flex flex-col gap-[32px]'>
            <FormInput
              autoFocus
              type='email'
              onKeyDown={handleEnter}
              placeholder='이메일을 입력하세요'
              title='이메일'
              fieldName='email'
              errorMessage={errors.email && String(errors.email.message)}
              {...register('email', {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: '이메일 형식을 확인해주세요.',
                },
                onChange: () => {
                  setIsFaild(false);
                },
              })}
            />
            <FormInput
              type='password'
              placeholder='비밀번호를 입력하세요'
              onKeyDown={handleEnter}
              title='비밀번호'
              fieldName='password'
              errorMessage={errors.password && String(errors.password.message)}
              {...register('password', {
                onChange: () => {
                  setIsFaild(false);
                },
              })}
            />
          </div>
          <div
            className='flex items-center gap-[8px]'
            onClick={() => setIsSaved((prev) => !prev)}
          >
            <CheckButton isChecked={isSaved} />
            <span className='cursor-default text-body_md'>자동 로그인</span>
          </div>
        </div>
        <div className='flex w-full flex-col items-center gap-[12px]'>
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
