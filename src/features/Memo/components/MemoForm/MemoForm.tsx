'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import isEqual from 'lodash/isEqual';
import Textarea from '@/components/Form/Input/Textarea';
import { textareaType } from '@/data/ui/textareaType';
import { useFormContext } from 'react-hook-form';
import TitleHeader from '@/components/Header/TitleHeader';
import { bottomSheet } from '@/modules/BottomSheet';
import PublicToggle from './PublicToggle';
import ImageForm from './ImageForm/ImageForm';
import { MemoFormType } from '../../types/form';

interface Props {
  defaultValues?: MemoFormType;
  isPending?: boolean;
}

function MemoForm({ defaultValues, isPending }: Props) {
  const router = useRouter();
  const { watch, getValues } = useFormContext();

  const handleClickBack = () => {
    const formData = getValues();
    if (!isEqual(defaultValues, formData)) {
      bottomSheet.open({
        sheetKey: defaultValues ? 'leave_while_edit' : 'leave_while_write',
        onClick: () => {
          setTimeout(() => {
            router.back();
          }, 300);
        },
      });
    } else {
      router.back();
    }
  };

  return (
    <>
      <TitleHeader
        title='메리와 메리'
        theme='light'
        type='edit'
        isDisabled={!watch('memo') || isPending}
        onClickBack={handleClickBack}
      />
      <div className='flex w-full flex-1 flex-col overflow-auto py-[36px]'>
        <div className='flex w-full flex-col gap-[36px]'>
          <div className='flex w-full flex-col gap-[12px]'>
            <div className='flex w-full flex-col gap-[8px] px-page'>
              <span className='text-body-md text-gray-700'>사진 [선택]</span>
              <span className='text-body-lg text-gray-600'>
                인상깊은 구절을 찍어 기록하세요
              </span>
            </div>
            <ImageForm />
          </div>
          <Textarea option={textareaType.memo} />
          <div className='w-full px-page'>
            <PublicToggle />
          </div>
        </div>
      </div>
    </>
  );
}

export default MemoForm;
