import BackButton from '@/components/Button/BackButton';
import React from 'react';

function StoreHeader() {
  return (
    <div className='block w-full gap-3 bg-white p-page pb-[20px]'>
      <BackButton fill='#727384' />
      <div className='flex w-full justify-between'>
        <h3 className='text-heading-md-bold'>상점</h3>
        <div className='rounded-[50px] bg-gray-300 px-[16px] py-[8px] text-title-lg-bold'>
          1,000 P
        </div>
      </div>
    </div>
  );
}

export default StoreHeader;
