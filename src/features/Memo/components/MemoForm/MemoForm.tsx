'use client';

import React from 'react';
import Textarea from '@/components/Form/Input/Textarea';
import { textareaType } from '@/data/ui/textareaType';
import { useFormContext } from 'react-hook-form';
import { sheetData } from '@/data/ui/bottomSheet';
import ConfirmLeaveSheet from '@/components/PopUp/ConfirmLeaveSheet';
import TitleHeader from '@/components/Header/TitleHeader';
import PublicToggle from './PublicToggle';
import ImageForm from './ImageForm/ImageForm';

function MemoForm() {
  const { watch } = useFormContext();

  return (
    <>
      <TitleHeader
        title='메리와 메리'
        theme='light'
        type='edit'
        isDisabled={!watch('memo')}
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
        <ConfirmLeaveSheet sheetData={sheetData.leave_while_edit} />
      </div>
    </>
  );
}

export default MemoForm;
