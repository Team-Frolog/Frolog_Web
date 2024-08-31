'use client';

import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  title: string;
}

function SideHeader({ children, title }: Props) {
  return (
    <div className='h-[122px] w-full'>
      <Image
        src={IMAGES.side_header}
        alt='side header'
        width={390}
        height={144}
        className='absolute left-0 top-0 z-60 w-full'
      />
      <div className='flex w-full px-page py-[20px] pt-[50px]'>
        <h1 className='text-heading-md-bold text-start'>{title}</h1>
      </div>
      {children}
    </div>
  );
}

export default SideHeader;
