'use client';

import { getEmailAvailability, signUp } from '@/api/class';
import LinkButton from '@/components/common/button/LinkButton';
import FormInput from '@/components/common/form/FormInput';
import { PAGES } from '@/constants/pageConfig';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

function Step2() {
  const {
    watch,
    trigger,
    register,
    formState: { errors },
  } = useFormContext();
  const password = watch('password');

  useEffect(() => {
    trigger('passwordCheck');
  }, [password, trigger]);

  const signup = async () => {
    const data = await signUp.fetch({
      email: 'jm@gmail.com', // 이메일
      email_verified_token: 'string',
      password: 'Ys2920611', // 비밀번호 (Alphanumeric)
      username: 'string', // 닉네임 (Alphanumeric + 한글)

      consents: [
        {
          // 약관 동의 리스트(Array)
          type: 'string', // 약관 타입 (e.g. terms_of_service, marketing, ...)
          version: 'string', // 버전 (e.g. 2024-05-06)
          given: false, // 동의 여부
        },
      ],

      additional_info: [
        {
          // 개인 식별 정보 리스트(Array)
          type: 'string', // 정보 타입 (e.g. occupation, birth_date, ...)
          value: 'string', // 실제 데이터
          visibility: false, // 공개 여부
        },
      ],
    });

    console.log(data);
  };

  useEffect(() => {
    signup();
  }, []);

  return (
    <div className='flex h-full w-full flex-col justify-between p-page'>
      <div className='flex w-full flex-col'>
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
              onBlur: async (e) => {
                trigger('email');
                const data = await getEmailAvailability.fetch({
                  email: e.target.value,
                });
                console.log(data);
              },
            })}
          />
          <div className='flex flex-col gap-[8px]'>
            <FormInput
              type='password'
              placeholder='8~15자 영문 대소문자, 숫자를 포함해주세요'
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
            <FormInput
              type='password'
              placeholder='비밀번호를 재입력하세요'
              fieldName='passwordCheck'
              errorMessage={
                errors.passwordCheck && String(errors.passwordCheck.message)
              }
              {...register('passwordCheck', {
                validate: {
                  matches: (value: string) =>
                    value.length === 0 ||
                    value === watch('password') ||
                    '비밀번호가 일치하지 않아요.',
                },
                onChange: async (e) => {
                  const value = e.target.value;
                  if (value.length > 0) {
                    await trigger('passwordCheck');
                  }
                },
              })}
            />
          </div>
        </div>
      </div>
      <LinkButton
        route={`${PAGES.JOIN}?step=3`}
        disabled={Boolean(
          !watch('email') ||
            !watch('password') ||
            !watch('passwordCheck') ||
            errors.email ||
            errors.password ||
            errors.passwordCheck
        )}
      >
        다음
      </LinkButton>
    </div>
  );
}

export default Step2;
