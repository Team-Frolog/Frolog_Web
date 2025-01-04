'use client';

import CheckButton from '@/components/Button/CheckButton';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { consentsKeys } from '../../data/joinForm';

/** 모두 동의 체크박스 컴포넌트 */
function CheckAllItem() {
  const { setValue, watch } = useFormContext();
  const isAllAgree = consentsKeys.every((key) => watch(key));

  const handleAllAgree = () => {
    consentsKeys.forEach((key) => setValue(key, !isAllAgree));
  };

  return (
    <div className='flex gap-[12px]' onClick={handleAllAgree}>
      <CheckButton isChecked={isAllAgree} />
      <span className='cursor-default text-body-lg-bold'>
        네, 모두 동의합니다.
      </span>
    </div>
  );
}

export default CheckAllItem;
