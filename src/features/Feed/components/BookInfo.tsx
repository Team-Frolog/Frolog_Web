import Rating from '@/components/Rating/Rating';
import React from 'react';

function BookInfo() {
  return (
    <div className='pt-[30px]'>
      <div className='relative flex w-full flex-col'>
        <div className='absolute left-[24px] top-[20px] z-10 h-[110px] w-[74px] bg-gray-500' />
        <div className='tooltip-feed relative flex w-full flex-col gap-[4px] rounded-t-[20px] bg-category-bg-novel px-page py-[14px] pl-[115px] after:border-b-category-bg-novel'>
          <h5 className='text-body-lg-bold text-category-text-novel'>
            해변의 카프카(상)
          </h5>
          <ul className='flex text-caption text-category-text-novel'>
            <li className="after:content-['|']">
              <span className='pr-[6px]'>무라카미 하루키</span>
            </li>
            <li>
              <span className='pl-[6px]'>민음사</span>
            </li>
          </ul>
        </div>
        <div className='w-full pl-[115px]'>
          <Rating rating={4.5} textClass='text-heading-lg-bold' />
        </div>
      </div>
    </div>
  );
}

export default BookInfo;
