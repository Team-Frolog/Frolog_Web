'use client';

import React from 'react';
import { useFormTitle } from '@/hooks/useFormTitle';
import { usePathname, useRouter } from 'next/navigation';
import { JOIN_FORM_KEY } from '@/constants/storage';
import { PAGES } from '@/constants/page';
import BackIcon from 'public/icons/common/back/back.svg';

function FormHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { title } = useFormTitle();

  const handleClickBack = () => {
    if (pathname === PAGES.LANDING) {
      router.push('/');
    } else {
      localStorage.removeItem(JOIN_FORM_KEY);
      router.back();
    }
  };

  return (
    <div className='block w-full gap-3 p-[24px] pb-0'>
      <button
        type='button'
        className='cursor-pointer'
        onClick={handleClickBack}
      >
        <BackIcon fill='#B3B6C5' />
      </button>
      <h3 className='text-h_md_bold'>{title}</h3>
    </div>
  );
}

export default FormHeader;
