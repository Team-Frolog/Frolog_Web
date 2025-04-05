'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { bottomSheet } from '@/modules/BottomSheet';
import WithWebViewTheme from '@/components/HOC/WithWebViewTheme';
import BackButton from '../Button/BackButton';
import WithConditionalRendering from '../HOC/WithConditionalRendering';

interface Props {
  /** 헤더의 성격 */
  type: 'default' | 'edit' | 'write' | 'no_border';
  /** 우측 추가 버튼 여부 */
  hasButton?: boolean;
  /** 추가 버튼의 비활성화 여부 */
  isDisabled?: boolean;
  /** 타이틀명 */
  title: string;
  /** 테마 색상 */
  theme: 'dark' | 'light' | 'gray';
  webviewBgColor?: string;
  /** 추가 버튼 핸들러 함수 */
  onClick?: () => void;
  /** 뒤로가기 핸들러 (주어지지 않은 경우 내부 함수 사용) */
  onClickBack?: () => void;
}

/** 기본 타이틀 헤더
 * - 중앙에 타이틀이 위치하고, 뒤로가기 버튼이 기본으로 적용되어 있습니다.
 */
function TitleHeader({
  type,
  isDisabled,
  theme,
  title,
  webviewBgColor = 'white',
  onClick,
  onClickBack,
  hasButton = true,
}: Props) {
  const router = useRouter();

  const getThemeColor = useCallback((th: 'dark' | 'light' | 'gray') => {
    switch (th) {
      case 'dark':
        return 'bg-gray-900 text-white';
      case 'light':
        return 'bg-white text-gray-800';
      case 'gray':
        return 'bg-gray-300 text-gray-800';
      default:
        return '';
    }
  }, []);

  /** 기본 뒤로가기 핸들러 함수
   * - type이 edit, write인 경우(수정 중, 작성 중), 이탈 확인 바텀시트를 렌더링합니다.
   * - 그렇지 않은 경우 뒤로가기 기능을 동작시킵니다.
   */
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
    <WithWebViewTheme bgColor={webviewBgColor}>
      <header
        id='header'
        className={`header-sticky duration-50 z-70 flex justify-between px-[24px] py-[20px] transition-all ${getThemeColor(theme)} ${type === 'no_border' ? 'border-0' : 'border-b-[0.5px] border-gray-400'}`}
      >
        <BackButton
          onClick={onClickBack || handleClick}
          fill={theme === 'light' ? '#727484' : '#B3B6C5'}
        />
        <h2
          id='selected'
          className='absolute inset-x-0 top-1/2 mx-auto w-[70%] -translate-y-1/2 truncate text-center text-body-xl-bold'
        >
          {title}
        </h2>
        <WithConditionalRendering condition={hasButton}>
          <button
            type={type === 'default' ? 'button' : 'submit'}
            onClick={type === 'default' ? onClick : undefined}
            className={`text-body-lg-bold text-main ${(type === 'edit' || type === 'write') && isDisabled && 'pointer-events-none opacity-50'}`}
          >
            {type === 'default' ? '수정' : '저장'}
          </button>
        </WithConditionalRendering>
      </header>
    </WithWebViewTheme>
  );
}

export default TitleHeader;
