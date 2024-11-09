import React from 'react';
import Image from 'next/image';
import Rating from '@/components/Rating/Rating';
import { IMAGES } from '@/constants/images';
import { useBook } from '@/features/Book';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import { isGetMemoRes } from '../../utils/typeGuard';

interface Props {
  isMemo: boolean;
  feedData: GetReviewRes | GetMemoRes;
}

function BookInfo({ feedData, isMemo }: Props) {
  const { bookData } = useBook(feedData.isbn);
  if (!bookData) return <></>;

  const { title, author, publisher, category, image } = bookData;

  return (
    <div className='pt-[30px]'>
      <div
        className={`relative flex h-fit w-full gap-[16px] rounded-t-[20px] bg-category-bg-${category} px-page pt-[24px]`}
      >
        <div className={`tooltip-feed border-b-category-bg-${category}`} />
        <div className='flex'>
          <Image
            src={image || IMAGES.book.cover}
            alt='book cover'
            width={74}
            height={110}
            className='h-full max-w-fit self-end bg-gray-400'
          />
        </div>

        <div
          className={`flex w-full flex-1 flex-col ${isMemo ? 'z-[-1px] mb-[-2px] justify-between gap-[8px]' : 'pb-[8px]'}`}
        >
          <div className='flex w-full flex-col gap-[4px]'>
            <h5
              className={`w-full line-clamp-1 text-body-lg-bold text-category-text-${category}`}
            >
              {title}
            </h5>
            <ul
              className={`flex text-caption-bold text-category-text-${category}`}
            >
              <li className="after:content-['|']">
                <span className='pr-[6px]'>{author}</span>
              </li>
              <li>
                <span className='pl-[6px]'>{publisher}</span>
              </li>
            </ul>
          </div>
          <div className='w-full'>
            {isMemo ? (
              <Image
                src={IMAGES.frog.memo_frog}
                alt='memo frog'
                width={252}
                height={56}
                className='w-full max-w-[95%]'
              />
            ) : (
              <Rating
                rating={!isGetMemoRes(feedData) ? feedData.rating : null}
                textClass={`text-heading-lg-bold text-category-text-${category}`}
                category={category}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;
