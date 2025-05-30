'use client';

import React from 'react';
import Image from 'next/image';
import Rating from '@/components/Rating/Rating';
import Tag from '@/components/Tag/Tag';
import { GetBookRes } from '@frolog/frolog-api';
import { getTagById } from '@/utils/getTags';
import { IMAGES } from '@/constants/images';
import CustomLink from '@/components/Link/CustomLink';
import { getPath } from '@/utils/getPath';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';

interface Props {
  bookData: GetBookRes;
  onSaveScroll?: () => void;
}

/** 도서 검색 결과 아이템 컴포넌트 */
function BookListItem({ bookData, onSaveScroll }: Props) {
  const {
    isbn,
    author,
    title,
    image,
    publisher,
    has_review,
    avg_rating,
    tags_neg,
    tags_pos,
    review_cnt,
  } = bookData;

  const hasPosTag = tags_pos.length > 0;
  const hasNegTag = tags_neg.length > 0;

  return (
    <CustomLink
      prefetch
      href={getPath.book(isbn)}
      onClick={onSaveScroll}
      className='flex w-full cursor-pointer gap-[20px] text-gray-800'
    >
      <div className='flex h-fit'>
        <Image
          className='h-auto w-[120px] bg-gray-400'
          src={image || IMAGES.book.cover}
          alt='book cover'
          width={126}
          height={186}
          unoptimized
        />
      </div>
      <div className='flex flex-1 flex-col gap-[16px]'>
        <div className='flex-column gap-[4px]'>
          <WithConditionalRendering condition={Boolean(has_review)}>
            <div className='flex'>
              <span className='box-border rounded-[20px] bg-main px-[8px] py-[4px] text-caption-bold text-white'>
                내가 리뷰한 책
              </span>
            </div>
          </WithConditionalRendering>

          <h5 className='text-body-xl-bold'>{title}</h5>
          <span className='flex text-caption-bold text-gray-600'>
            {author} | {publisher}
          </span>
        </div>
        <div className='flex-column gap-[8px]'>
          <Rating rating={avg_rating || null} />
          <div className='flex-column gap-[4px]'>
            <WithConditionalRendering
              condition={avg_rating !== 0}
              fallback={
                <Tag
                  type='default'
                  tagValue='첫 리뷰 작성자가 되어보세요!'
                  size='small'
                />
              }
            >
              {hasPosTag && (
                <Tag
                  type='pros'
                  tagValue={getTagById('pros', tags_pos[0])!}
                  size='small'
                />
              )}
              {hasNegTag && (
                <Tag
                  type='cons'
                  tagValue={getTagById('cons', tags_neg[0])!}
                  size='small'
                />
              )}
            </WithConditionalRendering>
          </div>
          <span className='text-caption-bold text-gray-600'>
            총 {review_cnt}개의 리뷰
          </span>
        </div>
      </div>
    </CustomLink>
  );
}

export default BookListItem;
