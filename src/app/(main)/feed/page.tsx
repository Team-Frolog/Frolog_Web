import { FeedItem } from '@/features/Feed';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function FeedPage() {
  return (
    <MainLayout extraClass='bg-gray-300'>
      <FeedItem />
    </MainLayout>
  );
}

export default FeedPage;
