import React from 'react';
import { Metadata } from 'next';
import { StoreItemList } from '@/features/Store';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';
import Image from 'next/image';
import { IMAGES } from '../../../constants/images';

export const metadata: Metadata = {
  title: '상점',
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

async function StorePage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  return (
    <>
      {userId && <StoreItemList userId={userId} />}
      <Image
        src={IMAGES.frog.more_frogs}
        alt='more frogs'
        width={282}
        height={196}
      />
    </>
  );
}

export default StorePage;
