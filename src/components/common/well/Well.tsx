import Image from 'next/image';
import React from 'react';
import Outline from 'public/images/well/outline/9.svg';

function Well() {
  return (
    <div className='relative box-content flex h-[132px] w-[132px] items-center justify-center bg-gray-900 p-[20px]'>
      <Image
        src='/images/frog/frog-sitting.svg'
        alt='frog'
        width={80}
        height={110}
        className='absolute inset-x-0 bottom-[18px] z-10 mx-auto h-[60%]'
      />
      <div className='absolute left-1/2 top-1/2 z-20 h-full w-full -translate-x-1/2 -translate-y-1/2 pt-[0px]'>
        <Outline fill='red' />
      </div>
    </div>
  );
}

export default Well;
