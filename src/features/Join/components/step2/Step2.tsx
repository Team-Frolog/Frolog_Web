'use client';

import FormInput from '@/components/Form/Input/FormInput';
import SendButton from '@/components/Form/Button/SendButton';
import PasswordForm from '@/components/Form/Password/PasswordForm';
import { useEmailValidation } from '@/hooks/form/useEmailValidation';
import { useStepActions } from '@/store/stepStore';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

/** 회원가입 2단계: 이메일, 비밀번호 입력 폼 */
function Step2() {
  const { moveStep } = useStepActions();
  const { handleValidateEmail, isEmailChecked, setIsEmailChecked } =
    useEmailValidation('signUp');
  const [isDisabled, setIsDisabled] = useState(true);

  const {
    watch,
    register,
    trigger,
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
        <div className='flex-column gap-[36px]'>
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
              onChange: async (e) => {
                setIsEmailChecked(false);
                if (errors.email) {
                  const isPassed = await trigger('email');

                  if (isPassed) {
                    handleValidateEmail(e);
                  }
                }
              },
              onBlur: (e) => handleValidateEmail(e),
            })}
          />
          <PasswordForm />
        </div>
      </div>
      <SendButton
        onNext={() => moveStep(1)}
        isDisabled={isDisabled || !isEmailChecked}
        type='signUp'
      />
    </>
  );
}

export default Step2;
