'use client';

import FormInput from '@/components/common/form/input/FormInput';
import SendButton from '@/components/common/form/button/SendButton';
import PasswordForm from '@/components/common/form/password/PasswordForm';
import { useEmailValidation } from '@/hooks/auth/useEmailValidation';
import { useStepActions } from '@/store/stepStore';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

function Step2() {
  const { goNextJoinStep } = useStepActions();
  const { handleValidateEmail, isEmailChecked, setIsEmailChecked } =
    useEmailValidation('signUp');
  const [isDisabled, setIsDisabled] = useState(true);

  const {
    watch,
    register,
    formState: { errors, isValid },
  } = useFormContext();
  const email = watch('email');
  const password = watch('password');
  const passwordCheck = watch('passwordCheck');

  useEffect(() => {
    const disabled = Boolean(!email || !password || !passwordCheck || !isValid);
    setIsDisabled(disabled);
  }, [email, password, passwordCheck, isValid, errors]);

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
              onChange: () => setIsEmailChecked(false),
              onBlur: (e) => handleValidateEmail(e),
            })}
          />
          <PasswordForm />
        </div>
      </div>
      <SendButton
        onNext={goNextJoinStep}
        isDisabled={isDisabled || !isEmailChecked}
        type='signUp'
      />
    </>
  );
}

export default Step2;
