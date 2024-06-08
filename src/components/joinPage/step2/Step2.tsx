import FormButton from '@/components/common/form/FormButton';
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

  return (
    <div className='flex h-full w-full flex-col justify-between pb-page'>
      <div className='flex w-full flex-col p-page'>
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
              onBlur: () => {
                trigger('email');
                // 이메일 중복 확인
              },
            })}
          />
          <div className='flex flex-col gap-[8px]'>
            <FormInput
              type='password'
              placeholder='8~15자 영문 대소문자, 숫자 포함'
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
      <FormButton
        route={`${PAGES.JOIN}?step=3`}
        isTyping={false}
        disabled={Boolean(
          !watch('email') ||
            !watch('password') ||
            !watch('passwordCheck') ||
            errors.email ||
            errors.password ||
            errors.passwordCheck
        )}
      />
    </div>
  );
}

export default Step2;
