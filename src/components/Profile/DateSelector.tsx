'use client';

import FormTitleWithToggle from '@/components/Form/FormTitleWithToggle';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  theme: 'dark' | 'light';
}

function DateSelector({ theme }: Props) {
  const { watch, setValue } = useFormContext();

  return (
    <div className='flex w-full flex-col gap-[10px]'>
      <FormTitleWithToggle
        title='생년월일'
        fieldName='birth_date'
        theme={theme}
      />
      <input
        type='date'
        value={watch('personal_infos.birth_date.value')}
        onChange={(e) =>
          setValue('personal_infos.birth_date.value', e.target.value, {
            shouldDirty: true,
          })
        }
        onKeyDown={(e) => e.preventDefault()}
        onClick={(e) => e.currentTarget.showPicker()}
        className={`relative w-full cursor-pointer appearance-none rounded-[12px] border px-[16px] py-[18px] text-body-lg outline-none ${theme === 'dark' ? 'input-default' : 'input-light'}`}
      />
    </div>
  );
}

export default DateSelector;
