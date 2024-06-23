import { ICONS } from '@/constants/icons';
import React from 'react';
import Image from 'next/image';
import BigTitle from '@/components/common/text/BigTitle';

interface Props {
  children: React.ReactNode;
}

function FinishLayout({ children }: Props) {
  return (
    <div className='relative z-0 h-full w-full'>
      <div className='absolute left-1/2 top-[170px] w-full -translate-x-1/2'>
        <BigTitle type='default' align='text-center'>
          {children}
        </BigTitle>
      </div>
    </div>
  );
}

export default FinishLayout;
