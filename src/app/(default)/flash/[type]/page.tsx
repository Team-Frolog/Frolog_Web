import React from 'react';
import { Metadata } from 'next';
import Flash from '@/components/Flash/Flash';
import { FlashKeys } from '@/data/ui/flash';
import Image from 'next/image';
import LinkButton from '@/components/Button/LinkButton';
import { IMAGES } from '@/constants/images';
import { PAGES } from '@/constants/page';

interface Props {
  params: {
    type: FlashKeys;
  };
}

export async function generateStaticParams() {
  return [{ type: 'review' }, { type: 'new_well' }, { type: 'first_new_well' }];
}

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

function FlashPage({ params: { type } }: Props) {
  return (
    <Flash flashKey={type}>
      {type === 'first_new_well' ? (
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
          <div className='absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-center px-page'>
            <LinkButton route={PAGES.HOME}>확인</LinkButton>
          </div>
        </div>
      ) : null}
    </Flash>
  );
}

export default FlashPage;
