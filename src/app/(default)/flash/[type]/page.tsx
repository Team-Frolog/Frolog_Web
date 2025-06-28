import React from 'react';
import { Metadata } from 'next';
import Flash from '@/components/Flash/Flash';
import { FlashKeys } from '@/data/ui/flash';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import FlashButton from '@/components/Button/FlashButton';

interface Props {
  params: {
    type: FlashKeys;
  };
}

export async function generateStaticParams() {
  return [
    { type: 'review' },
    { type: 'new_well' },
    { type: 'first_new_well' },
    { type: 'first_memo' },
  ];
}

function FlashPage({ params: { type } }: Props) {
  return (
    <Flash flashKey={type}>
      {type === 'first_new_well' || type === 'first_memo' ? (
        <div className='relative flex h-fit w-full'>
          <Image
            src={IMAGES.ground}
            alt='ground'
            width={390}
            height={182}
            className='h-[100px] w-full'
            loading='eager'
            priority
          />
          <FlashButton type={type} />
        </div>
      ) : null}
    </Flash>
  );
}

export default FlashPage;

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};
