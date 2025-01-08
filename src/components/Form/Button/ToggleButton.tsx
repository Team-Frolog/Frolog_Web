'use client';

import React, { memo } from 'react';

interface Props {
  /** 토글 버튼 클릭 시 핸들러 함수 */
  handleChange: () => void;
  /** 공개 여부 */
  isPublic: boolean;
  /** 다크/라이트 테마 */
  theme?: 'light' | 'dark';
}

/** 공개/비공개 토글 버튼
 * - 회원가입 Step 4 - 개인정보 입력에서 활용됩니다.
 * - 프로필 편집에서 활용됩니다.
 */
const ToggleButton = memo(
  ({ isPublic, handleChange, theme = 'light' }: Props) => {
    const themeStyles = {
      light: {
        textColor: 'text-gray-700',
        bgColor: 'bg-gray-400',
      },
      dark: {
        textColor: 'text-white',
        bgColor: 'bg-gray-700',
      },
    };

    const { textColor, bgColor } = themeStyles[theme];

    return (
      <div className='flex gap-1'>
        <span className={`text-body-md ${textColor}`}>
          {isPublic ? '공개' : '비공개'}
        </span>
        <input
          type='checkbox'
          checked={isPublic}
          onChange={handleChange}
          className={`relative h-5 w-10 cursor-pointer appearance-none rounded-full ${bgColor} outline-none before:absolute before:left-0.5 before:top-0.5 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-transform before:duration-200 checked:bg-main checked:before:translate-x-5`}
        />
      </div>
    );
  }
);

export default ToggleButton;
