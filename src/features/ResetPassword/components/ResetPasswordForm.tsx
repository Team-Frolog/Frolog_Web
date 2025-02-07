'use client';

import CodeForm from '@/components/Form/Code/CodeForm';
import { STORAGE_KEY } from '@/constants/storage';
import { useStepActions } from '@/store/stepStore';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useResetPassword } from '../hooks/useResetPassword';
import { FindForm } from '../types/findForm';
import Step1 from './Step1';
import Step3 from './Step3';

/** 비밀번호 재설정 폼 */
function ResetPasswordForm() {
  const methods = useForm<FindForm>({
    mode: 'onBlur',
    defaultValues:
      typeof window !== 'undefined' &&
      localStorage.getItem(STORAGE_KEY.findFormKey)
        ? JSON.parse(localStorage.getItem(STORAGE_KEY.findFormKey)!)
        : {
            email: '',
            password: '',
            passwordCheck: '',
          },
  });

  const { handleSubmit } = methods;
  const { moveStep, resetStep } = useStepActions();
  const { step, resetPassword } = useResetPassword(methods.getValues);

  useEffect(
    () => () => {
      localStorage.removeItem(STORAGE_KEY.findFormKey);
      resetStep();
    },
    []
  );

  return (
    <FormProvider {...methods}>
      <form
        className='form-layout py-[34px]'
        onSubmit={handleSubmit((data) => resetPassword(data))}
      >
        {step === 1 && <Step1 />}
        {step === 2 && (
          <CodeForm type='resetPassword' onClickNext={() => moveStep(1)} />
        )}
        {step === 3 && <Step3 />}
      </form>
    </FormProvider>
  );
}

export default ResetPasswordForm;
