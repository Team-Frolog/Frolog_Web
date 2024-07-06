'use client';

import Step1 from '@/components/joinPage/step1/Step1';
import Step2 from '@/components/joinPage/step2/Step2';
import CodeForm from '@/components/common/form/code/CodeForm';
import Step4 from '@/components/joinPage/step4/Step4';
import { JOIN_FORM_KEY } from '@/constants/storage';
import { defaultValue } from '@/data/joinForm';
import { useJoin } from '@/hooks/auth/useJoin';
import { JoinForm } from '@/types/form';
import { FormProvider, useForm } from 'react-hook-form';
import { useStepActions } from '@/store/stepStore';

function JoinPage() {
  const methods = useForm<JoinForm>({
    mode: 'onBlur',
    defaultValues:
      typeof window !== 'undefined' && localStorage.getItem(JOIN_FORM_KEY)
        ? JSON.parse(localStorage.getItem(JOIN_FORM_KEY)!)
        : defaultValue,
  });
  const { getValues, handleSubmit } = methods;

  const { goNextJoinStep } = useStepActions();
  const { joinUser, joinStep } = useJoin(getValues);

  return (
    <FormProvider {...methods}>
      <form
        className='form-layout'
        onSubmit={handleSubmit((data) => joinUser(data))}
      >
        {joinStep === 1 && <Step1 />}
        {joinStep === 2 && <Step2 />}
        {joinStep === 3 && (
          <CodeForm type='signUp' onClickNext={goNextJoinStep} />
        )}
        {joinStep === 4 && <Step4 />}
      </form>
    </FormProvider>
  );
}

export default JoinPage;
