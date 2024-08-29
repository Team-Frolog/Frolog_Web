'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { usePopUpActions } from '@/store/popUpStore';
import { ON_LEAVE_ROUTE } from '@/constants/storage';
import BackButton from '../Button/BackButton';

interface Props {
  type: 'default' | 'edit' | 'memo' | 'search';
  hasButton?: boolean;
  isDisabled?: boolean;
  title: string;
  theme: 'dark' | 'light';
  onClick?: () => void;
}

function TitleHeader({
  type,
  isDisabled,
  theme,
  title,
  onClick,
  hasButton = true,
}: Props) {
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
      id='header'
      className={`header-sticky duration-50 z-70 flex justify-between px-[24px] py-[20px] transition-all ${themeColor} ${type === 'search' || type === 'default' ? 'border-0' : 'border-b-[0.5px] border-gray-400'}`}
    >
      <BackButton
        onClick={handleClick}
        fill={theme === 'light' ? '#727484' : '#B3B6C5'}
      />
      <h2
        id='selected'
        className='absolute inset-x-0 top-1/2 mx-auto w-fit -translate-y-1/2 text-body_xl_bold'
      >
        {title}
      </h2>
      {hasButton && (
        <button
          type={type === 'default' ? 'button' : 'submit'}
          onClick={type === 'default' ? onClick : undefined}
          className={`text-body_lg_bold text-main ${(type === 'edit' || type === 'memo') && isDisabled && 'pointer-events-none opacity-50'}`}
        >
          {type === 'default' ? '수정' : '저장'}
        </button>
      )}
    </div>
  );
}

export default TitleHeader;
