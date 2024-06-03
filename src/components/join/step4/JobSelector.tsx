import FormTitleWithToggle from '@/components/common/form/FormTitleWithToggle';
import { ICONS } from '@/constants/icons';
import Image from 'next/image';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function JobSelector() {
  const { watch, setValue } = useFormContext();
  return (
    <div className='flex w-full flex-col gap-[10px]'>
      <FormTitleWithToggle title='직업' fieldName='job' />
      <div className='relative w-full'>
        <select
          defaultValue='무직'
          onChange={(e) => setValue('job', e.target.value)}
          className={`w-full appearance-none rounded-[12px] border border-solid border-gray-800 bg-gray-800 px-[16px] py-[18px] text-body_lg outline-none ${!watch('job') ? 'pointer-events-none text-gray-600' : 'cursor-pointer text-white'}`}
        >
          <option value='무직'>무직</option>
          <option value='학생'>학생</option>
          <option value='직장인'>직장인</option>
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
