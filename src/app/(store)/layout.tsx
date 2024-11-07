import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import StoreHeader from '@/components/Header/StoreHeader';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';

interface Props {
  children: React.ReactNode;
}

async function StoreLayout({ children }: Props) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  return (
    <>
      <StoreHeader userId={userId} />
      <MainLayout extraClass='px-page pt-[16px] gap-[40px] bg-white justify-between'>
        {children}
      </MainLayout>
    </>
  );
}

export default StoreLayout;
