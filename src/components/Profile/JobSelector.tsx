'use client';

import FormTitleWithToggle from '@/components/Form/FormTitleWithToggle';
import { JOBS } from '@/constants/jobs';
import { SelectIcon } from 'public/icons';
import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

interface Props {
  theme: 'dark' | 'light';
}

function JobSelector({ theme }: Props) {
  const { setValue } = useFormContext();
  const original_value = useWatch({ name: 'personal_infos.occupation.value' });

  return (
    <div className='flex w-full flex-col gap-[10px]'>
      <FormTitleWithToggle title='직업' fieldName='occupation' theme={theme} />
      <div className='relative w-full'>
        <select
          value={original_value}
          onChange={(e) =>
            setValue('personal_infos.occupation.value', e.target.value, {
              shouldDirty: true,
            })
          }
          className={`w-full cursor-pointer appearance-none rounded-[12px] border border-solid px-[16px] py-[18px] text-body-lg outline-none ${theme === 'dark' ? 'input-default' : 'input-light'}`}
        >
          {JOBS.map((item) => (
            <option key={item.id} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <SelectIcon className='absolute right-[14px] top-1/4' />
      </div>
    </div>
  );
}

export default JobSelector;
