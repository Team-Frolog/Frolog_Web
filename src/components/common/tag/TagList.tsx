import React from 'react';
import { conTags, proTags } from '@/data/tag';
import Tag from './Tag';

interface Props {
  type: 'pros' | 'cons';
}

function TagList({ type }: Props) {
  const tagData = type === 'pros' ? proTags : conTags;

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <span className='text-body_md text-gray-700'>
        {type === 'pros' ? '장점' : '단점'} 키워드 (1~5개 고르세요)
      </span>
      <div className='flex w-[90%] flex-wrap gap-[16px] mobile:w-full'>
        {tagData.map((item) => (
          <Tag key={item.id} type='pros' tag={item} />
        ))}
      </div>
    </div>
  );
}

export default TagList;
