import React from 'react';
import { memoTag, MemoType } from '../../data/memoTag';

interface Props {
  type: MemoType;
}

function MemoTag({ type }: Props) {
  const { icon, label } = memoTag[type];

  return (
    <div className='flex w-fit shrink-0 items-center gap-[4px] rounded-[12px] border border-gray-500 bg-gray-200 px-[16px] py-[8px]'>
      {icon}
      <span className='text-body_lg_bold text-gray-800'>{label}</span>
    </div>
  );
}

export default MemoTag;
