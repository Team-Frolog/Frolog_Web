import Rating from '@/components/Rating/Rating';
import { IMAGES } from '@/constants/images';
import { useBook } from '@/features/Book';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import Image from 'next/image';
import React from 'react';
import { isGetMemoRes } from '../../utils/typeGuard';

interface Props {
  isMemo: boolean;
  feedData: GetReviewRes | GetMemoRes;
}

function BookInfo({ feedData, isMemo }: Props) {
  const { bookData } = useBook(feedData.isbn);
  if (!bookData) return <></>;

  const { title, author, author_cnt, publisher, category } = bookData;

  return (
    <div className='pt-[30px]'>
      <div
        className={`tooltip-feed relative flex w-full gap-[16px] rounded-t-[20px] bg-category-bg-${category} px-page pt-[24px] after:border-b-category-bg-${category}`}
      >
        <div className='h-[110px] w-[74px] shrink-0 self-end bg-gray-500'>
          book
        </div>
        <div
          className={`flex w-full flex-col ${isMemo && 'justify-end gap-[8px]'}`}
        >
          <div className='flex flex-col gap-[4px]'>
            <h5 className={`text-body-lg-bold text-category-text-${category}`}>
              {title}
            </h5>
            <ul
              className={`flex text-caption-bold text-category-text-${category}`}
            >
              <li className="after:content-['|']">
                <span className='pr-[6px]'>
                  {author}{' '}
                  {author_cnt !== undefined &&
                    author_cnt > 1 &&
                    `외 ${author_cnt}명`}
                </span>
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
                className='w-full'
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
