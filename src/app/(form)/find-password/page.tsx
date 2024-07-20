'use client';

import CodeForm from '@/components/Form/Code/CodeForm';
import { FIND_FORM_KEY } from '@/constants/storage';
import {
  FindForm,
  Step1,
  Step3,
  useResetPassword,
} from '@/features/ResetPassword';
import { useStepActions } from '@/store/stepStore';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function FindPasswordPage() {
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
        className='form-layout'
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

export default FindPasswordPage;
