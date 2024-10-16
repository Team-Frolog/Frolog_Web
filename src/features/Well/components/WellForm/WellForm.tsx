'use client';

import TitleHeader from '@/components/Header/TitleHeader';
import React from 'react';
import GenericForm from '@/components/Form/GenericForm';
import { useForm } from 'react-hook-form';
import WellNameInput from './WellNameInput';
import FrogSelector from './Frog/FrogSelector';
import ShapeForm from './Shape/ShapeForm';

export interface WellFormType {
  wellName: string;
  frogId: number | null;
  color: string | null;
  shape: number | null;
}

function WellForm() {
  const methods = useForm<WellFormType>({
    mode: 'onChange',
    defaultValues: { wellName: '', frogId: 1, color: 'novel', shape: 1 },
  });

  const {
    watch,
    formState: { errors },
  } = methods;

  const handleAddNewWell = () => {
    //
  };

  return (
    <GenericForm<WellFormType>
      onSubmit={handleAddNewWell}
      formOptions={{
        mode: 'onChange',
        defaultValues: { wellName: '', frogId: 1, color: 'novel', shape: 1 },
      }}
      className='form-layout gap-0'
    >
      <TitleHeader
        title='새 우물 파기'
        theme='light'
        type='write'
        isDisabled={!watch('wellName') || !!errors.wellName}
      />
      <div className='flex w-full flex-1 flex-col gap-[36px] overflow-auto bg-white px-page py-[32px]'>
        <WellNameInput />
        <FrogSelector />
        <ShapeForm />
      </div>
    </GenericForm>
  );
}

export default WellForm;
