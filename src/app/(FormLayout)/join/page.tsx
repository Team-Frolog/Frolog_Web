'use client';

import { userAPI } from '@/api/user.api';
import Step1 from '@/components/joinPage/step1/Step1';
import Step2 from '@/components/joinPage/step2/Step2';
import Step3 from '@/components/joinPage/step3/Step3';
import Step4 from '@/components/joinPage/step4/Step4';
import { PAGES } from '@/constants/pageConfig';
import { JOIN_FORM_KEY } from '@/constants/storage';
import { defaultValue } from '@/data/joinForm';
import usePreventRefresh from '@/hooks/usePreventRefresh';
import useStore from '@/store/store';
import { IJoinForm } from '@/types/form';
import { transformJoinForm } from '@/utils/transformJoinForm';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function JoinPage() {
  const router = useRouter();
  const { verification } = useStore();
  const step = Number(useSearchParams().get('step')!);

  usePreventRefresh(); // 새로고침 방지

  const methods = useForm<IJoinForm>({
    mode: 'onBlur',
    defaultValues:
      step === 1
        ? defaultValue
        : typeof window !== 'undefined' &&
          JSON.parse(localStorage.getItem(JOIN_FORM_KEY)!)!,
  });
  const { getValues, handleSubmit } = methods;

  // step별 폼 상태 저장
  useEffect(() => {
    if (typeof window !== 'undefined') {
      step === 1
        ? localStorage.removeItem(JOIN_FORM_KEY)
        : localStorage.setItem(JOIN_FORM_KEY, JSON.stringify(getValues()));
    }
  }, [step]);

  const handleSignUp = async (data: IJoinForm) => {
    const formData = transformJoinForm(data, verification.emailVerifiedToken!);
    const signUpResult = await userAPI.signUp(formData);

    if (signUpResult?.result) {
      verification.resetToken();
      localStorage.removeItem(JOIN_FORM_KEY);
      router.push(PAGES.JOIN_FINISH);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className='h-full' onSubmit={handleSubmit(handleSignUp)}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </form>
    </FormProvider>
  );
}

export default JoinPage;
