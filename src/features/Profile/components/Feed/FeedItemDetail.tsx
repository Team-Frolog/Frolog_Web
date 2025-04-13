import { MenuArrowIcon } from 'public/icons';
import React from 'react';

interface Props {
  title: string;
  count: number;
  category: string;
}

function FeedItemDetail({ title, count, category }: Props) {
  return (
    <button
      type='button'
      className={`flex items-center justify-between bg-category-bg-${category} py-[13px] pl-[12px] pr-[4px] text-category-text-${category}`}
    >
      <h3 className='text-body-md-bold'>{title}</h3>
      <div className='flex items-center'>
        <p className='text-body-sm-bold'>{count ? `${count}개` : '쓰러가기'}</p>
        <MenuArrowIcon fill='currentColor' />
      </div>
    </button>
  );
}

export default FeedItemDetail;
