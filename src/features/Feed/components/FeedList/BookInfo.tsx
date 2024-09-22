import Rating from '@/components/Rating/Rating';
import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

interface Props {
  isMemo?: boolean;
}

function BookInfo({ isMemo = false }: Props) {
  return (
    <div className='pt-[30px]'>
      <div className='tooltip-feed relative flex w-full gap-[16px] rounded-t-[20px] bg-category-bg-novel px-page pt-[24px] after:border-b-category-bg-novel'>
        <div className='h-[110px] w-[74px] bg-gray-500'>book</div>
        <div className={`flex flex-col ${isMemo && 'justify-end gap-[8px]'}`}>
          <div className='flex flex-col gap-[4px]'>
            <h5 className='text-body-lg-bold text-category-text-novel'>
              해변의 카프카(상)
            </h5>
            <ul className='flex text-caption-bold text-category-text-novel'>
              <li className="after:content-['|']">
                <span className='pr-[6px]'>무라카미 하루키</span>
              </li>
              <li>
                <span className='pl-[6px]'>민음사</span>
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
                rating={3.5}
                textClass='text-heading-lg-bold text-category-text-novel'
                category='novel'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;
