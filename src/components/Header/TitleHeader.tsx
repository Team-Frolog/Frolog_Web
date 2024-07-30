'use client';

import React from 'react';
import BackIcon from 'public/icons/common/back/back.svg';
import { useRouter } from 'next/navigation';
import { usePopUpActions } from '@/store/popUpStore';
import { ON_LEAVE_ROUTE } from '@/constants/storage';

interface Props {
  type: 'default' | 'edit';
  isDisabled?: boolean;
  title: string;
  theme: 'dark' | 'light';
  onClick?: () => void;
}

function TitleHeader({ type, isDisabled, theme, title, onClick }: Props) {
  const router = useRouter();
  const themeColor =
    theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800';
  const { changePopUpState } = usePopUpActions();

  const handleClick = () => {
    if (type === 'edit') {
      sessionStorage.setItem(ON_LEAVE_ROUTE, 'back');
      changePopUpState('isOpenAlertSheet', true);
    } else {
      router.back();
    }
  };

  return (
    <div
      className={`header-sticky z-40 flex justify-between px-[24px] py-[20px] ${themeColor} ${onClick ? 'border-b-[0.5px] border-gray-400' : 'border-0'}`}
    >
      <button type='button' onClick={handleClick}>
        <BackIcon fill={theme === 'light' ? '#727484' : '#B3B6C5'} />
      </button>
      <h2 className='absolute inset-x-0 top-1/2 mx-auto w-fit -translate-y-1/2 text-body_xl_bold'>
        {title}
      </h2>
      {onClick && (
        <button
          type={type === 'edit' ? 'submit' : 'button'}
          onClick={type === 'edit' ? undefined : onClick}
          className={`text-body_lg_bold text-main ${type === 'edit' && isDisabled && 'pointer-events-none opacity-50'}`}
        >
          {type === 'edit' ? '저장' : '수정'}
        </button>
      )}
    </div>
  );
}

export default TitleHeader;
