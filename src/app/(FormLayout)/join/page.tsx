'use client';

import Step1 from '@/components/joinPage/step1/Step1';
import Step2 from '@/components/joinPage/step2/Step2';
import CodeForm from '@/components/common/form/code/CodeForm';
import Step4 from '@/components/joinPage/step4/Step4';
import { JOIN_FORM_KEY } from '@/constants/storage';
import { defaultValue } from '@/data/joinForm';
import { useJoin } from '@/hooks/auth/useJoin';
import { IJoinForm } from '@/types/form';
import { FormProvider, useForm } from 'react-hook-form';

function JoinPage() {
  const methods = useForm<IJoinForm>({
    mode: 'onBlur',
    defaultValues:
      typeof window !== 'undefined' && localStorage.getItem(JOIN_FORM_KEY)
        ? JSON.parse(localStorage.getItem(JOIN_FORM_KEY)!)
        : defaultValue,
  });
  const { getValues, handleSubmit } = methods;

  const { joinUser, step, goNextStep } = useJoin(getValues);

  const handleSignUp = (data: IJoinForm) => {
    joinUser(data);
  };

  return (
    <FormProvider {...methods}>
      <form className='h-full' onSubmit={handleSubmit(handleSignUp)}>
        {step === 1 && <Step1 onClickNext={goNextStep} />}
        {step === 2 && <Step2 onClickNext={goNextStep} />}
        {step === 3 && <CodeForm type='signUp' onClickNext={goNextStep} />}
        {step === 4 && <Step4 />}
      </form>
    </FormProvider>
  );
}

export default JoinPage;
