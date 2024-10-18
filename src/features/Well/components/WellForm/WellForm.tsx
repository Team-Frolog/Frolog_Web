'use client';

import TitleHeader from '@/components/Header/TitleHeader';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import WellNameInput from './WellNameInput';
import FrogSelector from './Frog/FrogSelector';
import ShapeForm from './Shape/ShapeForm';
import { useWellForm } from '../../hooks/useWellForm';

export interface WellFormType {
  name: string;
  frog: string;
  color: string;
  shape: number;
}

interface Props {
  type: 'write' | 'edit';
  wellId?: string;
}

function WellForm({ type, wellId }: Props) {
  const methods = useForm<WellFormType>({
    mode: 'onChange',
    defaultValues: { name: '', frog: 'default', color: 'novel', shape: 1 },
  });

  const {
    watch,
    reset,
    handleSubmit,
    formState: { errors, isDirty },
  } = methods;

  const { handleAddWell, handleClickBack, handleEditWell } = useWellForm(
    type,
    reset,
    wellId
  );

  return (
    <FormProvider {...methods}>
      <form
        className='form-layout gap-0'
        onSubmit={handleSubmit((data) =>
          type === 'write' ? handleAddWell(data) : handleEditWell(data)
        )}
      >
        <TitleHeader
          title={type === 'write' ? '새 우물 파기' : '우물 고치기'}
          theme='light'
          type={type}
          onClickBack={() => handleClickBack(isDirty)}
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
