'use client';

import ButtonWithText from '@/components/common/button/ButtonWithText';
import CheckButton from '@/components/common/button/CheckButton';
import FormInput from '@/components/common/form/FormInput';
import { PAGES } from '@/constants/pageConfig';
import Link from 'next/link';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface ILoginForm {
  email: string;
  password: string;
}

function LoginPage() {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const methods = useForm<ILoginForm>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    register,
    formState: { errors },
  } = methods;

  const handleLogin = () => {
    //
  };

  return (
    <FormProvider {...methods}>
      <form className='flex h-full flex-col justify-between'>
        <div className='flex flex-col gap-[20px]'>
          <div className='flex flex-col gap-[32px]'>
            <FormInput
              autoFocus
              type='email'
              placeholder='이메일을 입력하세요'
              title='이메일'
              fieldName='email'
              errorMessage={errors.email && String(errors.email.message)}
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: '이메일 형식을 확인해주세요.',
                },
              })}
            />
            <FormInput
              type='password'
              placeholder='비밀번호를 입력하세요'
              title='비밀번호'
              fieldName='password'
              errorMessage={errors.password && String(errors.password.message)}
              {...register('password', {
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
                  message: '8~15자의 영문 대소문자, 숫자를 조합하세요.',
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
        <ButtonWithText
          btnText='로그인 하기'
          route='/login'
          disabled={false}
          btnType='button'
          onClick={handleLogin}
        >
          <Link
            href={PAGES.FIND_PASSWORD}
            className='text-body_lg_bold text-white'
          >
            비밀번호를 잊으셨나요?
          </Link>
        </ButtonWithText>
      </form>
    </FormProvider>
  );
}

export default LoginPage;
