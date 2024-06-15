'use client';

import { TInfoName } from '@/types/form';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  fieldName: TInfoName;
}

function ToggleButton({ fieldName }: Props) {
  const { watch, setValue } = useFormContext();
  const [isPublic, setIsPublic] = useState(true);

  useEffect(() => {
    const visibility = watch(`additional_info.${fieldName}.visibility`);
    setIsPublic(visibility);
  }, [watch, fieldName]);

  const handleChange = () => {
    setValue(`additional_info.${fieldName}.visibility`, !isPublic);
    setIsPublic(!isPublic);
  };

  return (
    <div className='flex gap-[4px]'>
      <span className='text-body_md text-white'>
        {isPublic ? '프로필 공개' : '프로필 비공개'}
      </span>
      <input
        type='checkbox'
        checked={isPublic}
        onChange={handleChange}
        className='relative h-[20px] w-[40px] cursor-pointer appearance-none rounded-[20px] bg-gray-700 outline-none before:absolute before:left-[2px] before:top-[2px] before:h-[16px] before:w-[16px] before:rounded-[50%] before:bg-white before:transition-transform before:duration-200 checked:bg-main checked:before:translate-x-[20px]'
      />
    </div>
  );
}

export default ToggleButton;
