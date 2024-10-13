'use client';

import { useRouter } from 'next/navigation';
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
      <div className='pointer-events-none absolute left-0 top-0 z-60 flex w-full justify-between gap-[80px]'>
        <div className='side-header-left' />
        <div className='side-header-right' />
      </div>
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
