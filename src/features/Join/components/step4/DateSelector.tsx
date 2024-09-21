'use client';

import FormTitleWithToggle from '@/components/Form/FormTitleWithToggle';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function DateSelector() {
  const { watch, setValue } = useFormContext();

  return (
    <div className='flex w-full flex-col gap-[10px]'>
      <FormTitleWithToggle title='생년월일' fieldName='birth_date' />
      <input
        type='date'
        value={watch('personal_infos.birth_date.value')}
        onChange={(e) =>
          setValue('personal_infos.birth_date.value', e.target.value)
        }
        onKeyDown={(e) => e.preventDefault()}
        onClick={(e) => e.currentTarget.showPicker()}
        className='text-body-lg relative w-full cursor-pointer appearance-none rounded-[12px] border border-gray-800 bg-gray-800 px-[16px] py-[18px] outline-none focus:border-main'
      />
    </div>
  );
}

export default DateSelector;
