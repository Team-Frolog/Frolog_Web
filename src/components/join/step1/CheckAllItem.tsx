import { ICONS } from '@/constants/icons';
import Image from 'next/image';
import React from 'react';
import { useFormContext } from 'react-hook-form';

function CheckAllItem() {
  const { setValue, watch } = useFormContext();
  const isAllAgree = watch('terms.marketing') && watch('terms.ads');

  const handleAllAgree = () => {
    if (isAllAgree) {
      setValue('terms.marketing', false);
      setValue('terms.ads', false);
    } else {
      setValue('terms.marketing', true);
      setValue('terms.ads', true);
    }
  };
  return (
    <div className='flex gap-[12px]'>
      <button type='button' onClick={handleAllAgree}>
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

      <span className='text-body_lg_bold'>네, 모두 동의합니다.</span>
    </div>
  );
}

export default CheckAllItem;
