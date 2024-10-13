'use client';

import FormTitleWithToggle from '@/components/Form/FormTitleWithToggle';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  theme: 'dark' | 'light';
}

function GenderSelector({ theme }: Props) {
  const { watch, setValue } = useFormContext();
  const buttonStyle = `rounded-[12px] border px-[16px] py-[18px] text-body-lg ${theme === 'dark' ? 'border-gray-800 bg-gray-800 text-white' : 'border-gray-200 bg-gray-200 text-gray-800'}`;
  const selected = 'border-main text-body-lg-bold';

  const handleClick = (value: string) => {
    setValue('personal_infos.gender.value', value, { shouldDirty: true });
  };

  return (
    <div className='flex w-full flex-col gap-[10px]'>
      <FormTitleWithToggle title='성별' fieldName='gender' theme={theme} />
      <div className='grid w-full grid-cols-3 gap-[12px]'>
        <button
          type='button'
          onClick={() => handleClick('남성')}
          className={`${buttonStyle} ${(watch('personal_infos.gender.value') === '남성' || typeof window === 'undefined') && selected}`}
        >
          남성
        </button>
        <button
          type='button'
          onClick={() => handleClick('여성')}
          className={`${buttonStyle} ${watch('personal_infos.gender.value') === '여성' && selected}`}
        >
          여성
        </button>
        <button
          type='button'
          onClick={() => handleClick('기타')}
          className={`${buttonStyle} ${watch('personal_infos.gender.value') === '기타' && selected}`}
        >
          기타
        </button>
      </div>
    </div>
  );
}

export default GenderSelector;
