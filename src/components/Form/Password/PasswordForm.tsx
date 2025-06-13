import React from 'react';
import { useFormContext } from 'react-hook-form';
import FormInput from '../Input/FormInput';

/** 비밀번호 input 및 비밀번호 확인 input이 포함된 폼
 * - react-hook-form이 적용되어 있습니다. (password, passwordCheck)
 */
function PasswordForm() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='flex-column gap-[8px]'>
      <FormInput
        type='password'
        placeholder='대소문자, 숫자, 특수문자를 8~15자로 조합하세요.'
        title='비밀번호'
        fieldName='password'
        errorMessage={errors.password && String(errors.password.message)}
        {...register('password', {
          pattern: {
            value:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}\\[\]\\|;:'"<>,.?/~]).{8,15}$/,
            message: '대소문자, 숫자, 특수문자를 8~15자로 조합하세요.',
          },
          onChange: async () => {
            if (errors.password) {
              trigger('password');
            }
          },
        })}
      />
    </div>
  );
}

export default PasswordForm;
