'use client';

import React from 'react';
import { ICONS } from '@/constants/icons';
import { useFormTitle } from '@/hooks/useFormTitle';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { JOIN_FORM_KEY } from '@/constants/storage';
import { PAGES } from '@/constants/pageConfig';

function FormHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { title } = useFormTitle();

  const handleClickBack = () => {
    if (pathname === PAGES.LANDING) {
      router.push('/');
    } else {
      localStorage.removeItem(JOIN_FORM_KEY);
      router.push('/landing');
    }
  };

  return (
    <div className='flex flex-col gap-3 p-[24px] pb-0'>
      <button
        type='button'
        className='cursor-pointer'
        onClick={handleClickBack}
      >
        <Image
          src={ICONS.common.form.backBtn}
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
