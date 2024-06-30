'use client';

import CheckButton from '@/components/common/button/CheckButton';
import { consentsKeys } from '@/data/joinForm';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function CheckAllItem() {
  const { setValue, watch } = useFormContext();
  const isAllAgree = consentsKeys.every((key) => watch(key));

  const handleAllAgree = () => {
    consentsKeys.forEach((key) => setValue(key, !isAllAgree));
  };

  return (
    <button type='button' className='flex gap-[12px]' onClick={handleAllAgree}>
      <CheckButton isChecked={isAllAgree} />
      <span className='cursor-default text-body_lg_bold'>
        네, 모두 동의합니다.
      </span>
    </button>
  );
}

export default CheckAllItem;
