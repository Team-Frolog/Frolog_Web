'use client';

import TitleHeader from '@/components/Header/TitleHeader';
import ConfirmLeaveSheet from '@/components/PopUp/ConfirmLeaveSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import { MemoForm, MemoFormType } from '@/features/Memo';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function NewMemoPage() {
  const router = useRouter();
  const pathname = usePathname();
  const isEditing = !!useSearchParams().get('edit');

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
          type={isEditing ? 'edit' : 'default'}
          isDisabled={!watch('memo')}
          onClick={() => router.push(`${pathname}?edit=true`)}
        />
        <div className='flex h-fit w-full flex-1 flex-col py-[36px]'>
          <MemoForm />
          <ConfirmLeaveSheet sheetData={sheetData.leave_while_edit} />
        </div>
      </form>
    </FormProvider>
  );
}

export default NewMemoPage;
