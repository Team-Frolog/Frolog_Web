'use client';

import TitleHeader from '@/components/Header/TitleHeader';
import ConfirmLeaveSheet from '@/components/PopUp/ConfirmLeaveSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import WellNameInput from './WellNameInput';
import FrogSelector from './Frog/FrogSelector';
import ShapeForm from './Shape/ShapeForm';

export interface WellFormType {
  wellName: string;
  frogId: number | null;
  color: string | null;
  shape: string | null;
}

function WellForm() {
  const methods = useForm<WellFormType>({
    mode: 'onChange',
    defaultValues: { wellName: '', frogId: null, color: null, shape: null },
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
        onSubmit={handleSubmit(handleAddNewWell)}
        className='flex h-fit w-full flex-1 flex-col bg-white'
      >
        <TitleHeader
          title='새 우물 파기'
          theme='light'
          type='edit'
          isDisabled={!watch('wellName') || !!errors.wellName}
        />
        <div className='flex h-fit w-full flex-1 flex-col gap-[36px] px-page py-[32px]'>
          <WellNameInput />
          <FrogSelector />
          <ShapeForm />
          <ConfirmLeaveSheet sheetData={sheetData.leave_while_edit} />
        </div>
      </form>
    </FormProvider>
  );
}

export default WellForm;
