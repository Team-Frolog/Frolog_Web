'use client';

import Step1 from '@/components/join/step1/Step1';
import Step2 from '@/components/join/step2/Step2';
import Step3 from '@/components/join/step3/Step3';
import { IJoinForm } from '@/types/form';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function JoinPage() {
  const step = Number(useSearchParams().get('step')!);

  const methods = useForm<IJoinForm>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
      terms: {
        marketing: false,
        ads: false,
      },
    },
  });

  return (
    <FormProvider {...methods}>
      <form className='h-full'>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
      </form>
    </FormProvider>
  );
}

export default JoinPage;
