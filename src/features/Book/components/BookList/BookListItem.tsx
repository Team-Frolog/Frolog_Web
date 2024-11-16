'use client';

import React from 'react';
import Image from 'next/image';
import Rating from '@/components/Rating/Rating';
import Tag from '@/components/Tag/Tag';
import { GetBookRes } from '@frolog/frolog-api';
import { getTagById } from '@/utils/getTags';
import { IMAGES } from '@/constants/images';
import Link from 'next/link';

interface Props {
  bookData: GetBookRes;
}

function BookListItem({ bookData }: Props) {
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

  return (
    <Link
      prefetch
      href={`/book/${isbn}`}
      className='flex w-full cursor-pointer gap-[20px] text-gray-800'
    >
      <div className='flex h-fit'>
        <Image
          className='h-auto w-[120px] bg-gray-400'
          src={image || IMAGES.book.cover}
          alt='book cover'
          width={126}
          height={186}
        />
      </div>
      <div className='flex flex-1 flex-col gap-[16px]'>
        <div className='flex flex-col gap-[4px]'>
          {has_review && (
            <div className='flex'>
              <span className='box-border rounded-[20px] bg-main px-[8px] py-[4px] text-caption-bold text-white'>
                내가 리뷰한 책
              </span>
            </div>
          )}

          <h5 className='text-body-xl-bold'>{title}</h5>
          <span className='flex text-caption-bold text-gray-600'>
            {author} | {publisher}
          </span>
        </div>
        <div className='flex flex-col gap-[8px]'>
          <Rating rating={avg_rating || null} />
          <div className='flex flex-col gap-[4px]'>
            {avg_rating !== 0 ? (
              <>
                <Tag
                  type='pros'
                  tagValue={getTagById('pros', tags_pos[0])!}
                  size='small'
                />
                <Tag
                  type='cons'
                  tagValue={getTagById('cons', tags_neg[0])!}
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
          <span className='text-caption-bold text-gray-600'>
            총 {review_cnt}개의 리뷰
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BookListItem;
