'use client';

import React from 'react';
import Textarea from '@/components/Form/Input/Textarea';
import { textareaType } from '@/data/ui/textareaType';
import { sheetData } from '@/data/ui/bottomSheet';
import ConfirmLeaveSheet from '@/components/PopUp/ConfirmLeaveSheet';
import { FormProvider, useForm } from 'react-hook-form';
import TitleHeader from '@/components/Header/TitleHeader';
import ImageForm from './ImageForm/ImageForm';
import PublicToggle from './PublicToggle';
import { MemoFormType } from '../../types/form';

interface Props {
  id?: string;
}

function MemoForm({ id }: Props) {
  console.log(id);

  const methods = useForm<MemoFormType>({
    mode: 'onBlur',
    defaultValues: {
      tags: [],
      images: [],
      pageNum: null,
      memo: '',
      isPublic: true,
    },
  });

  const { watch, handleSubmit } = methods;

  const handleEditMemo = () => {
    // TODO: 서버 연동
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(handleEditMemo)}
        className='flex h-fit w-full flex-1 flex-col bg-white'
      >
        <TitleHeader
          title='메리와 메리'
          theme='light'
          type='memo'
          isDisabled={!watch('memo')}
        />
        <div className='flex h-fit w-full flex-1 flex-col py-[36px]'>
          <div className='flex w-full flex-col gap-[36px]'>
            <ImageForm />
            <div className='flex w-full flex-col gap-[36px] px-page'>
              <Textarea option={textareaType.memo} />
              <PublicToggle />
            </div>
          </div>
          <ConfirmLeaveSheet sheetData={sheetData.leave_while_edit} />
        </div>
      </form>
    </FormProvider>
  );
}

export default MemoForm;
