import { Tag as TagType } from '@/types/tag';
import React from 'react';
import { getTags } from '@/utils/getTags';
import Tag from './Tag';

interface Props {
  type: TagType;
  tagData: string[];
}

function MajorTagList({ type, tagData }: Props) {
  const tags = getTags(type, tagData);

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <span className='text-body_md text-gray-700'>
        {type === 'pros' ? '장점' : '단점'} 키워드
      </span>
      <div className='flex w-full flex-wrap gap-[16px] overflow-hidden'>
        {tags.map((item) => (
          <Tag key={item.id} type={type} size='big' tagValue={item.value} />
        ))}
      </div>
    </div>
  );
}

export default MajorTagList;
