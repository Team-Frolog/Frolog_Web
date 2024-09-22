'use client';

import FormTitleWithToggle from '@/components/Form/FormTitleWithToggle';
import { jobs } from '@/data/jobs';
import { SelectIcon } from 'public/icons';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  theme: 'dark' | 'light';
}

function JobSelector({ theme }: Props) {
  const { setValue } = useFormContext();
  return (
    <div className='flex w-full flex-col gap-[10px]'>
      <FormTitleWithToggle title='직업' fieldName='occupation' theme={theme} />
      <div className='relative w-full'>
        <select
          defaultValue={jobs[0].value}
          onChange={(e) =>
            setValue('personal_infos.occupation.value', e.target.value)
          }
          className={`w-full cursor-pointer appearance-none rounded-[12px] border border-solid px-[16px] py-[18px] text-body-lg outline-none ${theme === 'dark' ? 'input-default' : 'input-light'}`}
        >
          {jobs.map((item) => (
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
