import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { StoreHeader, FrogList } from '@/features/Store';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';
import Image from 'next/image';
import { IMAGES } from '../../../constants/images';

async function StorePage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  return (
    <>
      <StoreHeader />
      <MainLayout extraClass='bg-white px-page pt-[16px] gap-[40px]'>
        {userId && <FrogList userId={userId} />}
        <Image
          src={IMAGES.frog.more_frogs}
          alt='more frogs'
          width={282}
          height={196}
        />
      </MainLayout>
    </>
  );
}

export default StorePage;
