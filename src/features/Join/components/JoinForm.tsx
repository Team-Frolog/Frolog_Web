'use client';

import CodeForm from '@/components/Form/Code/CodeForm';
import { JOIN_FORM_KEY } from '@/constants/storage';
import { FormProvider, useForm } from 'react-hook-form';
import { useStepActions } from '@/store/stepStore';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import { JoinForm as JoinFormType } from '../types/form';
import Step4 from './step4/Step4';
import Step1 from './step1/Step1';
import Step2 from './step2/Step2';
import { defaultValue } from '../data/joinForm';
import { useJoin } from '../hooks/useJoin';

function JoinForm() {
  const methods = useForm<JoinFormType>({
    mode: 'onBlur',
    defaultValues:
      typeof window !== 'undefined' && localStorage.getItem(JOIN_FORM_KEY)
        ? JSON.parse(localStorage.getItem(JOIN_FORM_KEY)!)
        : defaultValue,
  });
  const { getValues, handleSubmit } = methods;
  const { goNextJoinStep } = useStepActions();
  const { joinUser, joinStep, isLoading } = useJoin(getValues);

  return (
    <FormProvider {...methods}>
      <form
        className='form-layout overflow-auto py-page scrollbar-hide'
        onSubmit={handleSubmit((data) => joinUser(data))}
      >
        {joinStep === 1 && <Step1 />}
        {joinStep === 2 && <Step2 />}
        {joinStep === 3 && (
          <CodeForm type='signUp' onClickNext={goNextJoinStep} />
        )}
        {joinStep === 4 && <Step4 />}
      </form>
      {isLoading && <LoadingOverlay theme='dark' />}
    </FormProvider>
  );
}

export default JoinForm;
