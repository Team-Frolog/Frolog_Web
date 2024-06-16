import { ICONS } from '@/constants/icons';
import Image from 'next/image';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isChecked: boolean;
}

function CheckButton({ isChecked, ...props }: Props) {
  return (
    <button type='button' className='h-[24px] w-[24px]' {...props}>
      <Image
        src={
          isChecked
            ? ICONS.common.check.circle_checked
            : ICONS.common.check.circle_unchecked
        }
        alt='check'
        width={24}
        height={24}
      />
    </button>
  );
}

export default CheckButton;
