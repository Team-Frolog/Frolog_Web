'use client';

import { STORAGE_KEY } from '@/constants/storage';
import { FormProvider, useForm } from 'react-hook-form';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import { JoinForm as JoinFormType } from '../types/form';
import Step4 from './step4/Step4';
import Step1 from './step1/Step1';
import { defaultValue } from '../data/joinForm';
import { useJoin } from '../hooks/useJoin';

function GoogleJoinForm() {
  const methods = useForm<JoinFormType>({
    mode: 'onBlur',
    defaultValues:
      typeof window !== 'undefined' &&
      localStorage.getItem(STORAGE_KEY.joinFormKey)
        ? JSON.parse(localStorage.getItem(STORAGE_KEY.joinFormKey)!)
        : defaultValue,
  });
  const { getValues, handleSubmit } = methods;
  const { joinUser, step, isLoading } = useJoin(getValues);

  return (
    <FormProvider {...methods}>
      <form
        className='form-layout overflow-auto py-page scrollbar-hide'
        onSubmit={handleSubmit((data) => joinUser(data))}
      >
        {step === 1 && <Step1 />}
        {step === 2 && <Step4 />}
      </form>
      {isLoading && <LoadingOverlay theme='dark' />}
    </FormProvider>
  );
}

export default GoogleJoinForm;
