import FormInput from '@/components/Form/Input/FormInput';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { LoginForm as LoginFormType } from '../types/login';

interface Props {
  /** 로그인 실패 flag 변수 setter */
  setIsFailed: React.Dispatch<React.SetStateAction<boolean>>;
  /** 로그인 핸들러 */
  userLogin: (data: LoginFormType) => Promise<void>;
}

/** 로그인 폼 */
function LoginForm({ setIsFailed, userLogin }: Props) {
  const {
    register,
    trigger,
    formState: { errors },
    handleSubmit,
  } = useFormContext<LoginFormType>();

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      (document.activeElement as HTMLElement).blur();
      handleSubmit((data) => userLogin(data))();
    }
  };

  return (
    <div className='flex-column gap-[32px]'>
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
          onChange: async () => {
            if (errors.email) {
              trigger('email');
            }
            setIsFailed(false);
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
            setIsFailed(false);
          },
        })}
      />
    </div>
  );
}

export default LoginForm;
