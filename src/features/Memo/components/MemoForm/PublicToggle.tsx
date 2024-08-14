'use client';

import ToggleButton from '@/components/Form/Button/ToggleButton';
import React, { useState } from 'react';

function PublicToggle() {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className='flex justify-between gap-[0px]'>
      <span className='text-body_md text-gray-700'>
        이 메모를 다른 회원에게 공개하시겠습니까?
      </span>
      <ToggleButton
        theme='dark'
        isPublic={isPublic}
        handleChange={() => setIsPublic((prev) => !prev)}
      />
    </div>
  );
}

export default PublicToggle;
