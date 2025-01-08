'use client';

import ToggleButton from '@/components/Form/Button/ToggleButton';
import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

/** 메모 폼 하단 공개/비공개 토글 버튼 */
function PublicToggle() {
  const { setValue } = useFormContext();
  const isPublic = useWatch({ name: 'isPublic' });

  return (
    <div className='flex items-center justify-between gap-[0px]'>
      <span className='text-body-md text-gray-700'>
        이 메모를 다른 회원에게 공개하시겠습니까?
      </span>
      <ToggleButton
        theme='dark'
        isPublic={isPublic}
        handleChange={() => setValue('isPublic', !isPublic)}
      />
    </div>
  );
}

export default PublicToggle;
