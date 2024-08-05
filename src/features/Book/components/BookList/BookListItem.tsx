'use client';

import React from 'react';
import Rating from '@/components/Rating/Rating';
import Tag from '@/components/Tag/Tag';
import { GetBookRes } from '@frolog/frolog-api';
import { getTagById } from '@/utils/getTags';
import { useRouter } from 'next/navigation';
import { IMAGES } from '@/constants/images';
import Image from 'next/image';

interface Props {
  bookData: GetBookRes;
}

function BookListItem({ bookData }: Props) {
  const router = useRouter();
  const {
    isbn,
    image_url,
    author,
    title,
    publisher,
    translator,
    has_review,
    avg_rating,
    tags_neg,
    tags_pos,
    review_cnt,
  } = bookData;

  return (
    <div
      onClick={() => router.push(`/book/${isbn}`)}
      className='flex w-full cursor-pointer gap-[20px] text-gray-800'
    >
      <Image
        className='h-[180px] w-[120px] bg-gray-400'
        src={image_url || IMAGES.book.cover}
        alt='book cover'
        width={126}
        height={186}
      />
      <div className='flex flex-1 flex-col gap-[16px]'>
        <div className='flex flex-col gap-[4px]'>
          {has_review && (
            <div className='flex'>
              <span className='box-border rounded-[20px] bg-main px-[8px] py-[4px] text-caption_bold text-white'>
                내가 리뷰한 책
              </span>
            </div>
          )}

          <h5 className='text-body_xl_bold'>{title}</h5>
          <ul className='flex text-caption_bold text-gray-600'>
            <li className="after:content-['|']">
              <span className='pr-[6px]'>
                {author}
                {translator && ` · ${translator} 옮김`}
              </span>
            </li>
            <li>
              <span className='pl-[6px]'>{publisher}</span>
            </li>
          </ul>
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
          <span className='text-caption_bold text-gray-600'>
            총 {review_cnt}개의 리뷰
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookListItem;
