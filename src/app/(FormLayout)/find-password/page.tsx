'use client';

import Step1 from '@/components/findPasswordPage/Step1';
import { usePreventBack } from '@/hooks/gesture/usePreventBack';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface IFindForm {
  email: string;
  password: string;
  passwordCheck: string;
}

function FindPasswordPage() {
  usePreventBack();
  const step = Number(useSearchParams().get('step')!);

  const methods = useForm<IFindForm>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <form className='h-full'>{step === 1 && <Step1 />}</form>
    </FormProvider>
  );
}

export default FindPasswordPage;
