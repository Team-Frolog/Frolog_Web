import LinkButton from '@/components/common/button/LinkButton';
import FormInput from '@/components/common/form/FormInput';
import { FORM_ERROR_MSG } from '@/constants/formMsg';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function Step2() {
  const {
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='p-page flex h-full flex-col justify-between'>
      <div className='flex flex-col gap-[36px]'>
        <FormInput
          type='email'
          placeholder='이메일을 입력하세요'
          title='이메일'
          fieldName='email'
          options={{
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: '이메일 형식을 확인해주세요.',
            },
            onBlur: () => {
              trigger('email');
              // 이메일 중복 확인
            },
          }}
        />
        <div className='flex flex-col gap-[8px]'>
          <FormInput
            type='password'
            placeholder='8~15자 영문 대소문자, 숫자 포함'
            title='비밀번호'
            fieldName='password'
            options={{
              pattern: {
                value: /^(?=.[A-Z])(?=.[a-z])(?=.*\d)[A-Za-z\d]{8,15}$/i,
                message: '8~15자의 영문 대소문자, 숫자를 조합하세요.',
              },
            }}
          />
          <FormInput
            type='password'
            placeholder='비밀번호를 재입력하세요'
            fieldName='passwordCheck'
            options={{
              validate: {
                matches: (value: string) =>
                  value === watch('password') || '비밀번호가 일치하지 않아요.',
              },
              onChange: () => {
                trigger('passwordCheck');
              },
            }}
          />
        </div>
      </div>
      <LinkButton
        route='/join?step=3'
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
