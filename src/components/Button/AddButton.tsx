'use client';

import React from 'react';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { AddIcon } from 'public/icons';
import { CATEGORY } from '@/constants/category';
import Button from './Button';

interface Props {
  /** 버튼 텍스트 */
  text: string;
  /** 이동 경로 */
  route?: string;
  categoryId?: string;
  onClick?: () => void;
}

/** AddIcon이 적용된 'Button' 컴포넌트의 확장 버튼
 * - 리뷰, 메모 리스트 내의 버튼입니다.
 * - route가 전달된 경우 route로 이동하고, onClick이 전달된 경우 onClick을 실행합니다.
 * */
function AddButton({ route, text, categoryId, onClick }: Props) {
  const { navigate } = useCustomRouter('WELL');

  const handleClick = () => {
    if (route) {
      navigate(route);
    } else if (onClick) {
      onClick();
    }
  };

  const color = categoryId
    ? `bg-category-bg-${categoryId} text-category-text-${categoryId}`
    : 'light';

  return (
    <Button onClick={handleClick} theme={color}>
      <div className='flex-center gap-[8px]'>
        <AddIcon
          fill={categoryId ? CATEGORY[categoryId].text : '#727484'}
          width={25}
          height={24}
        />
        {text}
      </div>
    </Button>
  );
}

export default AddButton;
