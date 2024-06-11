'use client';

import { ICONS } from '@/constants/icons';
import { consentsKeys } from '@/data/joinForm';
import Image from 'next/image';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function CheckAllItem() {
  const { setValue, watch } = useFormContext();
  const isAllAgree = consentsKeys.every((key) => watch(key));

  const handleAllAgree = () => {
    consentsKeys.forEach((key) => setValue(key, !isAllAgree));
  };

  return (
    <div className='flex gap-[12px]' onClick={handleAllAgree}>
      <button type='button'>
        <Image
          src={
            isAllAgree
              ? ICONS.common.check.circle_checked
              : ICONS.common.check.circle_unchecked
          }
          alt='check'
          width={24}
          height={24}
        />
      </button>

      <span className='cursor-default text-body_lg_bold'>
        네, 모두 동의합니다.
      </span>
    </div>
  );
}

export default CheckAllItem;
