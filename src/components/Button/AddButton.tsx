import React from 'react';
import Image from 'next/image';
import { ICONS } from '@/constants/icons';
import LinkButton from './LinkButton';

interface Props {
  route: string;
  text: string;
}

function AddButton({ route, text }: Props) {
  return (
    <div className='w-full px-[24px] pb-[8px]'>
      <LinkButton route={route} theme='light'>
        <div className='flex items-center justify-center gap-[8px]'>
          <Image src={ICONS.common.add} alt='add' width={25} height={24} />
          {text}
        </div>
      </LinkButton>
    </div>
  );
}

export default AddButton;
