import React from 'react';
import { useFormContext } from 'react-hook-form';
import FormInput from '../FormInput';

function PasswordForm() {
  const {
    register,
    trigger,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
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
          onChange: async () => {
            await trigger('passwordCheck');
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
            const { value } = e.target;
            if (value.length > 0) {
              await trigger('passwordCheck');
            }
          },
        })}
      />
    </div>
  );
}

export default PasswordForm;
