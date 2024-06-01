'use client';

import React from 'react';
import { ICONS } from '@/constants/icons';
import { useFormTitle } from '@/hooks/useFormTitle';
import Image from 'next/image';

function FormHeader() {
  const { title } = useFormTitle();

  const handleClickBack = () => {
    window.history.back();
  };

  return (
    <div className='flex flex-col gap-3 p-[24px] pb-0'>
      <button
        type='button'
        className='cursor-pointer'
        onClick={handleClickBack}
      >
        <Image
          src={ICONS.form.backBtn}
          alt='backBtn'
          width={55}
          height={24}
          priority
        />
      </button>
      <h3 className='text-h_md_bold'>{title}</h3>
    </div>
  );
}

export default FormHeader;
