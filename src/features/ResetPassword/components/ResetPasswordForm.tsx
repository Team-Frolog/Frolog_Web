'use client';

import CodeForm from '@/components/Form/Code/CodeForm';
import { FIND_FORM_KEY } from '@/constants/storage';
import { useStepActions } from '@/store/stepStore';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useResetPassword } from '../hooks/useResetPassword';
import { FindForm } from '../types/findForm';
import Step1 from './Step1';
import Step3 from './Step3';

function ResetPasswordForm() {
  const methods = useForm<FindForm>({
    mode: 'onBlur',
    defaultValues:
      typeof window !== 'undefined' && localStorage.getItem(FIND_FORM_KEY)
        ? JSON.parse(localStorage.getItem(FIND_FORM_KEY)!)
        : {
            email: '',
            password: '',
            passwordCheck: '',
          },
  });

  const { handleSubmit } = methods;
  const { goNextFindStep } = useStepActions();
  const { findStep, resetPassword } = useResetPassword(methods.getValues);

  return (
    <FormProvider {...methods}>
      <form
        className='form-layout py-[34px]'
        onSubmit={handleSubmit((data) => resetPassword(data))}
      >
        {findStep === 1 && <Step1 />}
        {findStep === 2 && (
          <CodeForm type='resetPassword' onClickNext={goNextFindStep} />
        )}
        {findStep === 3 && <Step3 />}
      </form>
    </FormProvider>
  );
}

export default ResetPasswordForm;
