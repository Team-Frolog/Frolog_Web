import { Tag as TagType } from '@/types/tag';
import { TagData } from '@/data/tag';
import React from 'react';
import Tag from './Tag';

interface Props {
  type: TagType;
  tagData: TagData[];
}

function MajorTagList({ type, tagData }: Props) {
  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <span className='text-body_md text-gray-700'>
        {type === 'pros' ? '장점' : '단점'} 키워드
      </span>
      <div className='flex w-full flex-wrap gap-[16px] overflow-hidden'>
        {tagData.map((item) => (
          <Tag key={item.id} type={type} tag={item} isSelected />
        ))}
      </div>
    </div>
  );
}

export default MajorTagList;
