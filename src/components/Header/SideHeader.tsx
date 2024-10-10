'use client';

import { IMAGES } from '@/constants/images';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import BackButton from '../Button/BackButton';

interface Props {
  children?: React.ReactNode;
  title?: string;
  hasBackButton?: boolean;
}

function SideHeader({ children, title, hasBackButton = false }: Props) {
  const router = useRouter();

  return (
    <div className='flex h-fit w-full bg-white'>
      {hasBackButton && (
        <BackButton type='green' onClick={() => router.back()} />
      )}
      <Image
        src={IMAGES.side_header}
        alt='side header'
        width={390}
        height={144}
        loading='eager'
        className='absolute left-0 top-0 z-60 w-full'
      />
      {title && (
        <div className='flex h-fit w-full px-page py-[20px] pt-[50px]'>
          <h1 className='w-fit max-w-[250px] text-start text-heading-md-bold'>
            {title}
          </h1>
        </div>
      )}
      {children}
    </div>
  );
}

export default SideHeader;
