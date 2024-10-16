'use client';

import TitleHeader from '@/components/Header/TitleHeader';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import WellNameInput from './WellNameInput';
import FrogSelector from './Frog/FrogSelector';
import ShapeForm from './Shape/ShapeForm';

export interface WellFormType {
  name: string;
  frog: string;
  color: string;
  shape: number;
}

function WellForm() {
  const methods = useForm<WellFormType>({
    mode: 'onChange',
    defaultValues: { name: '', frog: 'default', color: 'novel', shape: 1 },
  });

  const {
    watch,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleAddNewWell = () => {
    //
  };

  return (
    <FormProvider {...methods}>
      <form
        className='form-layout gap-0'
        onSubmit={handleSubmit(handleAddNewWell)}
      >
        <TitleHeader
          title='새 우물 파기'
          theme='light'
          type='write'
          isDisabled={!watch('name') || !!errors.name}
        />
        <div className='flex w-full flex-1 flex-col gap-[36px] overflow-auto bg-white px-page py-[32px]'>
          <WellNameInput />
          <FrogSelector />
          <ShapeForm />
        </div>
      </form>
    </FormProvider>
  );
}

export default WellForm;
