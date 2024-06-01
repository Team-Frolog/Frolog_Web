import { ICONS } from '@/constants/icons';
import Image from 'next/image';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

function CheckAllItem() {
  const [allAgree, setAllAgree] = useState<boolean>(false);
  const { setValue } = useFormContext();

  const handleAllAgree = () => {
    if (allAgree) {
      setAllAgree(false);
      setValue('age', false);
      setValue('termsOfUse', false);
      setValue('privacyPolicy', false);
      setValue('marketing', false);
      setValue('ads', false);
    } else {
      setAllAgree(true);
      setValue('age', true);
      setValue('termsOfUse', true);
      setValue('privacyPolicy', true);
      setValue('marketing', true);
      setValue('ads', true);
    }
  };
  return (
    <div className='flex gap-[12px]'>
      <button type='button' onClick={handleAllAgree}>
        <Image
          src={
            allAgree
              ? ICONS.common.check.circle_checked
              : ICONS.common.check.circle_unchecked
          }
          alt='check'
          width={24}
          height={24}
        />
      </button>

      <span className='text-body_lg_bold'>네, 모두 동의합니다.</span>
    </div>
  );
}

export default CheckAllItem;
