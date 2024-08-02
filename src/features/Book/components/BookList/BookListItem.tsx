import React from 'react';
import Rating from '@/components/Rating/Rating';
import Tag from '@/components/Tag/Tag';

interface Props {
  type: 1 | 2;
}

function BookListItem({ type }: Props) {
  return (
    <div className='flex w-full gap-[20px] text-gray-800'>
      <div className='h-[180px] w-[120px] bg-gray-400'>image</div>
      <div className='flex flex-1 flex-col gap-[16px]'>
        <div className='flex flex-col gap-[4px]'>
          <div className='flex'>
            <span className='box-border rounded-[20px] bg-main px-[8px] py-[4px] text-caption_bold text-white'>
              내가 리뷰한 책
            </span>
          </div>

          <h5 className='text-body_xl_bold'>메리와 메리</h5>
          <ul className='flex text-caption_bold text-gray-600'>
            <li className="after:content-['|']">
              <span className='pr-[6px]'>샬럿 고든</span>
            </li>
            <li>
              <span className='pl-[6px]'>민음사</span>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-[8px]'>
          <Rating rating={type === 1 ? 3.2 : null} />
          <div className='flex flex-col gap-[4px]'>
            {type === 1 ? (
              <>
                <Tag type='pros' tagValue='술술 읽혀요' size='small' />
                <Tag
                  type='cons'
                  tagValue='다른 비슷한 책이 더 나아요'
                  size='small'
                />
              </>
            ) : (
              <Tag
                type='default'
                tagValue='첫 리뷰 작성자가 되어보세요!'
                size='small'
              />
            )}
          </div>
          <span className='text-caption_bold text-gray-600'>
            총 10개의 리뷰
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookListItem;
