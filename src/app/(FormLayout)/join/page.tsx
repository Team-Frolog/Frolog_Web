'use client';

import Step1 from '@/components/joinPage/step1/Step1';
import Step2 from '@/components/joinPage/step2/Step2';
import Step3 from '@/components/joinPage/step3/Step3';
import Step4 from '@/components/joinPage/step4/Step4';
import { JOIN_FORM_KEY } from '@/constants/storage';
import usePreventRefresh from '@/hooks/usePreventRefresh';
import { IJoinForm } from '@/types/form';
import { getToday } from '@/utils/date';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function JoinPage() {
  const step = Number(useSearchParams().get('step')!);

  usePreventRefresh(); // 새로고침 방지

  const defaultValue =
    typeof window !== 'undefined' && localStorage.getItem(JOIN_FORM_KEY)
      ? JSON.parse(localStorage.getItem(JOIN_FORM_KEY)!)!
      : {
          email: '',
          password: '',
          passwordCheck: '',
          terms: {
            marketing: false,
            ads: false,
          },
          nickname: '',
          job: '무직',
          gender: '남성',
          birthDate: getToday(),
        };

  const methods = useForm<IJoinForm>({
    mode: 'onBlur',
    defaultValues: defaultValue,
  });
  const { getValues } = methods;

  // step별 폼 상태 저장
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(JOIN_FORM_KEY, JSON.stringify(getValues()));
    }
  }, [step]);

  return (
    <FormProvider {...methods}>
      <form className='h-full'>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </form>
    </FormProvider>
  );
}

export default JoinPage;
