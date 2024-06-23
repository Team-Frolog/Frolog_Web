'use client';

import CodeForm from '@/components/common/form/code/CodeForm';
import Step1 from '@/components/findPasswordPage/Step1';
import Step3 from '@/components/findPasswordPage/Step3';
import { FIND_FORM_KEY } from '@/constants/storage';
import { useFindPassword } from '@/hooks/auth/useFindPassword';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export interface IFindForm {
  email: string;
  password: string;
  passwordCheck: string;
}

function FindPasswordPage() {
  const methods = useForm<IFindForm>({
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

  const { step, goNextStep } = useFindPassword(methods.getValues);

  return (
    <FormProvider {...methods}>
      <form className='h-full'>
        {step === 1 && <Step1 onClickNext={goNextStep} />}
        {step === 2 && (
          <CodeForm type='resetPassword' onClickNext={goNextStep} />
        )}
        {step === 3 && <Step3 />}
      </form>
    </FormProvider>
  );
}

export default FindPasswordPage;
