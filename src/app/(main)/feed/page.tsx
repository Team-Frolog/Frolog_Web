import SideHeader from '@/components/Header/SideHeader';
import { FeedList } from '@/features/Feed';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function FeedPage() {
  return (
    <MainLayout extraClass='bg-gray-300'>
      <SideHeader title='피드' />
      <FeedList />
    </MainLayout>
  );
}

export default FeedPage;
