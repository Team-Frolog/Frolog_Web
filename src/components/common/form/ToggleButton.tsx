'use client';

import { getToday } from '@/utils/date';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  fieldName: 'job' | 'gender' | 'birthDate';
}

const defaultValue = {
  job: '무직',
  gender: '남성',
  birthDate: getToday(),
};

function ToggleButton({ fieldName }: Props) {
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const { setValue } = useFormContext();

  useEffect(() => {
    if (isPublic) {
      setValue(fieldName, defaultValue[fieldName]);
    } else {
      setValue(fieldName, null);
    }
  }, [isPublic]);

  return (
    <div className='flex gap-[4px]'>
      <span className='text-body_md text-white'>
        {isPublic ? '공개' : '비공개'}
      </span>
      <input
        type='checkbox'
        checked={isPublic}
        onChange={(e) => setIsPublic(e.target.checked)}
        className='relative h-[20px] w-[40px] cursor-pointer appearance-none rounded-[20px] bg-gray-700 outline-none before:absolute before:left-[2px] before:top-[2px] before:h-[16px] before:w-[16px] before:rounded-[50%] before:bg-white before:transition-transform before:duration-200 checked:bg-main checked:before:translate-x-[20px]'
      />
    </div>
  );
}

export default ToggleButton;
