import { ICONS } from '@/constants/icons';
import Image from 'next/image';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  text: string;
  fieldName: string;
}

function CheckItem({ text, fieldName }: Props) {
  const { watch, setValue } = useFormContext();
  const value = watch(fieldName);

  return (
    <div className='flex gap-[12px]'>
      <button type='button' onClick={() => setValue(fieldName, !value)}>
        <Image
          src={
            value
              ? ICONS.common.check.circle_checked
              : ICONS.common.check.circle_unchecked
          }
          alt='check'
          width={24}
          height={24}
        />
      </button>

      <span className='text-body_lg_bold'>{text}</span>
    </div>
  );
}

export default CheckItem;
