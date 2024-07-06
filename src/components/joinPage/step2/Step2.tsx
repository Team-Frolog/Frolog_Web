'use client';

import authAPI from '@/app/api/auth.api';
import FormInput from '@/components/common/form/FormInput';
import SendButton from '@/components/common/form/SendButton';
import PasswordForm from '@/components/common/form/password/PasswordForm';
import { useStepActions } from '@/store/stepStore';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

function Step2() {
  const { goNextJoinStep } = useStepActions();
  const [isDisabled, setIsDisabled] = useState(true);

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

  return (
    <>
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
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: '이메일 형식을 확인해주세요.',
              },
              onBlur: async (e) => {
                const isVaild = await trigger('email');
                const { value } = e.target;

                if (isVaild && value.trim() !== '') {
                  const data = await authAPI.checkEmail({
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
          <PasswordForm />
        </div>
      </div>
      <SendButton
        onNext={goNextJoinStep}
        isDisabled={isDisabled}
        type='signUp'
      />
    </>
  );
}

export default Step2;
