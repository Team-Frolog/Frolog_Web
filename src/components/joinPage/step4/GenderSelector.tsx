'use client';

import FormTitleWithToggle from '@/components/common/form/FormTitleWithToggle';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function GenderSelector() {
  const { watch, setValue } = useFormContext();
  const buttonStyle =
    'rounded-[12px] border border-gray-800 bg-gray-800 px-[16px] py-[18px] text-body_lg';
  const selected = 'border-main text-body_lg_bold';

  const handleClick = (value: string) => {
    setValue('additional_info.gender.value', value);
  };

  return (
    <div className='flex w-full flex-col gap-[10px]'>
      <FormTitleWithToggle title='성별' fieldName='gender' />
      <div className='grid w-full grid-cols-3 gap-[12px]'>
        <button
          type='button'
          onClick={() => handleClick('남성')}
          className={`${buttonStyle} ${(watch('additional_info.gender.value') === '남성' || typeof window === 'undefined') && selected}`}
        >
          남성
        </button>
        <button
          type='button'
          onClick={() => handleClick('여성')}
          className={`${buttonStyle} ${watch('additional_info.gender.value') === '여성' && selected}`}
        >
          여성
        </button>
        <button
          type='button'
          onClick={() => handleClick('기타')}
          className={`${buttonStyle} ${watch('additional_info.gender.value') === '기타' && selected}`}
        >
          기타
        </button>
      </div>
    </div>
  );
}

export default GenderSelector;
