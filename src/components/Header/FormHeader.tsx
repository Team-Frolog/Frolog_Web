'use client';

import React from 'react';
import { useFormTitle } from '@/hooks/form/useFormTitle';
import { usePathname, useRouter } from 'next/navigation';
import { STORAGE_KEY } from '@/constants/storage';
import { PAGES } from '@/constants/page';
import { BackIcon } from 'public/icons';

/** 각종 폼에 할용되는 타이틀 헤더
 * - FormLayout에 적용됩니다.
 */
function FormHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { title } = useFormTitle();

  /** 뒤로가기 핸들러
   * - 경로가 온보딩인 경우 메인으로 이동
   * - 그 외의 경우에는 localStorage 내의 회원가입 폼 저장내역 삭제
   */
  const handleClickBack = () => {
    if (pathname === PAGES.ONBOARDING) {
      router.push(PAGES.HOME);
    } else {
      localStorage.removeItem(STORAGE_KEY.joinFormKey);
      router.back();
    }
  };

  return (
    <header className='block w-full gap-3 p-[24px] pb-0'>
      <button
        type='button'
        className='cursor-pointer'
        onClick={handleClickBack}
      >
        <BackIcon fill='#B3B6C5' />
      </button>
      <h3 className='text-heading-md-bold'>{title}</h3>
    </header>
  );
}

export default FormHeader;
