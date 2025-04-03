import { MenuArrowIcon } from 'public/icons';
import React from 'react';

interface Props {
  title: string;
}

function FeedItemDetail({ title }: Props) {
  return (
    <button
      type='button'
      className='flex items-center justify-between bg-gray-200 py-[13px] pl-[12px] pr-[4px]'
    >
      <h3 className='text-body-md-bold'>{title}</h3>
      <div className='flex items-center'>
        <p className='text-body-sm-bold'>쓰러가기</p>
        <MenuArrowIcon fill='rgba(108, 90, 132, 1)' />
      </div>
    </button>
  );
}

export default FeedItemDetail;
