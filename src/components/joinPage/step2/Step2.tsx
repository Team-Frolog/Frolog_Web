'use client';

import { userAPI } from '@/api/user.api';
import Button from '@/components/common/button/Button';
import FormInput from '@/components/common/form/FormInput';
import { PAGES } from '@/constants/pageConfig';
import { useVerification } from '@/hooks/useVerification';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

function Step2() {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(true);
  const { isSendFailed, sendEmailCode } = useVerification();
  const {
    watch,
    trigger,
    register,
    setError,
    formState: { errors, isValid },
  } = useFormContext();
  const email = watch('email');
  const password = watch('password');
  const passwordCheck = watch('passwordCheck');

  useEffect(() => {
    const disabled = Boolean(!email || !password || !passwordCheck || !isValid);
    setIsDisabled(disabled);
  }, [email, password, passwordCheck, isValid]);

  const handleSendCode = () => {
    sendEmailCode(watch('email')).then(() => {
      if (isSendFailed) {
        setError('email', {
          type: 'manual',
          message: '인증 요청을 다시 시도해주세요.',
        });
      } else {
        router.push(`${PAGES.JOIN}?step=3`);
      }
    });
  };

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
                const isVaild = await trigger('email');
                const value = e.target.value;

                if (isVaild && value.trim() !== '') {
                  const data = await userAPI.checkEmail({
                    email: value,
                  });
                  if (!data) {
                    setError('email', {
                      type: 'manual',
                      message: '이미 사용 중인 이메일이에요.',
                    });
                  }
                }
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
                onChange: () => {
                  trigger('passwordCheck');
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
      <Button onClick={handleSendCode} disabled={isDisabled}>
        다음
      </Button>
    </div>
  );
}

export default Step2;
