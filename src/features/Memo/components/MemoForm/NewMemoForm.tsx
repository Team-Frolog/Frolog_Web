'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MemoFormType } from '../../types/form';
import MemoForm from './MemoForm';

function NewMemoForm() {
  const methods = useForm<MemoFormType>({
    mode: 'onBlur',
    defaultValues: {
      images: [],
      memo: '',
      isPublic: true,
    },
  });

  const handleAddTodo = () => {
    //
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleAddTodo)}
        className='flex h-dvh w-full flex-1 flex-col bg-white'
      >
        <MemoForm />
      </form>
    </FormProvider>
  );
}

export default NewMemoForm;
