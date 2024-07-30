'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import AddIcon from 'public/icons/common/add-icon.svg';
import { CATEGORY } from '@/constants/category';
import Button from './Button';

interface Props {
  route?: string;
  text: string;
  categoryId?: string;
  onClick?: () => void;
}

function AddButton({ route, text, categoryId, onClick }: Props) {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
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
