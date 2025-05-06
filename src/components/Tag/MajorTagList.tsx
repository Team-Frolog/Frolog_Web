import { Tag as TagType } from '@/types/tag';
import React from 'react';
import { getTags } from '@/utils/getTags';
import Tag from './Tag';

interface Props {
  /** 장점(pros) or 단점(cons) */
  type: TagType;
  /** 태그 키값 배열 */
  tagKeys: string[] | null;
}

/** 도서 상세 페이지에서 활용되는 대표 태그 5개 리스트 */
function MajorTagList({ type, tagKeys }: Props) {
  if (tagKeys === null) {
    return;
  }
  const tags = tagKeys ? getTags(type, tagKeys) : [];

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <span className='text-body-md text-gray-700'>
        {type === 'pros'
          ? '장점 키워드'
          : type === 'cons'
            ? '단점 키워드'
            : '이 책을 고른 이유'}
      </span>
      <div className='flex w-full flex-wrap gap-[16px] overflow-hidden'>
        {tags.length > 0 ? (
          tags.map((item) => (
            <Tag key={item.id} type={type} size='big' tagValue={item.value} />
          ))
        ) : (
          <Tag
            type='default'
            size='big'
            tagValue='첫 리뷰 작성자가 되어보세요!'
          />
        )}
      </div>
    </div>
  );
}

export default MajorTagList;
