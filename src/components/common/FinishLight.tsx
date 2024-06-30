import { ICONS } from '@/constants/icons';
import React from 'react';
import Image from 'next/image';
import BigTitle from '@/components/common/text/BigTitle';

interface Props {
  children: React.ReactNode;
}

function FinishLight({ children }: Props) {
  return (
    <div className='relative z-0 w-full'>
      <div className='absolute bottom-[60px] left-1/2 w-full -translate-x-1/2'>
        <BigTitle type='default' align='text-center'>
          {children}
        </BigTitle>
      </div>

      <Image
        src={ICONS.join.light}
        alt='light'
        width={30}
        height={30}
        className='w-full'
      />
    </div>
  );
}

export default FinishLight;
