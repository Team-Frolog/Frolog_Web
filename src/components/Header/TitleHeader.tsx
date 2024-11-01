'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { bottomSheet } from '@/modules/BottomSheet';
import BackButton from '../Button/BackButton';

interface Props {
  type: 'default' | 'edit' | 'write' | 'no_border';
  hasButton?: boolean;
  isDisabled?: boolean;
  title: string;
  theme: 'dark' | 'light';
  onClick?: () => void;
  onClickBack?: () => void;
}

function TitleHeader({
  type,
  isDisabled,
  theme,
  title,
  onClick,
  onClickBack,
  hasButton = true,
}: Props) {
  const router = useRouter();
  const themeColor =
    theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800';

  const handleClick = () => {
    if (type === 'edit' || type === 'write') {
      bottomSheet.open({
        sheetKey: type === 'edit' ? 'leave_while_edit' : 'leave_while_write',
        onClick: () => {
          setTimeout(() => {
            router.back();
          }, 300);
        },
      });
    } else {
      router.back();
    }
  };

  return (
    <div
      id='header'
      className={`header-sticky duration-50 z-70 flex justify-between px-[24px] py-[20px] transition-all ${themeColor} ${type === 'no_border' ? 'border-0' : 'border-b-[0.5px] border-gray-400'}`}
    >
      <BackButton
        onClick={onClickBack || handleClick}
        fill={theme === 'light' ? '#727484' : '#B3B6C5'}
      />
      <h2
        id='selected'
        className='absolute inset-x-0 top-1/2 mx-auto w-fit -translate-y-1/2 text-body-xl-bold'
      >
        {title}
      </h2>
      {hasButton && (
        <button
          type={type === 'default' ? 'button' : 'submit'}
          onClick={type === 'default' ? onClick : undefined}
          className={`text-body-lg-bold text-main ${(type === 'edit' || type === 'write') && isDisabled && 'pointer-events-none opacity-50'}`}
        >
          {type === 'default' ? '수정' : '저장'}
        </button>
      )}
    </div>
  );
}

export default TitleHeader;
