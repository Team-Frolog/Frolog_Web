'use client';

import FormTitleWithToggle from '@/components/common/form/FormTitleWithToggle';
import { ICONS } from '@/constants/icons';
import { jobs } from '@/data/jobs';
import Image from 'next/image';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function JobSelector() {
  const { setValue } = useFormContext();
  return (
    <div className='flex w-full flex-col gap-[10px]'>
      <FormTitleWithToggle title='직업' fieldName='occupation' />
      <div className='relative w-full'>
        <select
          defaultValue={jobs[0].value}
          onChange={(e) =>
            setValue('personal_infos.occupation.value', e.target.value)
          }
          className='w-full cursor-pointer appearance-none rounded-[12px] border border-solid border-gray-800 bg-gray-800 px-[16px] py-[18px] text-body_lg text-white outline-none'
        >
          {jobs.map((item) => (
            <option key={item.id} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <Image
          src={ICONS.common.form.select}
          alt='select'
          width={24}
          height={24}
          className='absolute right-[14px] top-1/4'
        />
      </div>
    </div>
  );
}

export default JobSelector;
