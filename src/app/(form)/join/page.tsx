'use client';

import {
  Step1,
  Step2,
  Step4,
  useJoin,
  defaultValue,
  JoinForm,
} from '@/features/Join';
import CodeForm from '@/components/Form/Code/CodeForm';
import { JOIN_FORM_KEY } from '@/constants/storage';
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
