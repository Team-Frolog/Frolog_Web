import { ChatIcon, HeartIcon } from 'public/icons';
import React from 'react';

function DummyItem() {
  return (
    <div className='w-full blur-xl'>
      <div className='flex w-full items-center justify-between px-page'>
        <button type='button' className='flex items-center gap-[8px]'>
          <div className='relative flex h-[40px] w-[40px] shrink-0 rounded-[50%] bg-main' />
          <h5 className='text-body-lg-bold text-gray-600'>username</h5>
        </button>
      </div>
      <div className='flex w-full flex-col'>
        <div className='flex w-full flex-col'>
          <div className='pt-[30px] w-full flex'>
            <div className='relative flex h-[80px] w-full gap-[16px] rounded-t-[20px] bg-category-bg-economic_business after:border-b-category-bg-economic_business'>
              rating
            </div>
          </div>
          <div className='h-[150px] w-full bg-white px-page'>content</div>
        </div>
        <div className='flex w-full items-center justify-between bg-white px-page py-[12px]'>
          <span className='text-body-md text-gray-600'>2000.00.00</span>
          <div className='flex gap-[20px]'>
            <button type='button' className='flex items-center gap-[4px]'>
              <HeartIcon />
              <span className='text-body-md text-gray-600'>0</span>
            </button>
            <button type='button' className='flex items-center gap-[4px]'>
              <ChatIcon />
              <span className='text-body-md text-gray-600'>0</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DummyItem;
