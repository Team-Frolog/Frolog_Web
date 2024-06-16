'use client';

import FormInput from '@/components/common/form/FormInput';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface ILoginForm {
  email: string;
  password: string;
}

function LoginPage() {
  const methods = useForm<ILoginForm>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const handleLogin = () => {
    //
  };

  return (
    <FormProvider {...methods}>
      <form className='h-full' onSubmit={handleSubmit(handleLogin)}>
        <div className='flex flex-col gap-[36px]'>
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
      </form>
    </FormProvider>
  );
}

export default LoginPage;
