import { FeedItem } from '@/features/Feed';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function FeedPage() {
  return (
    <MainLayout>
      <FeedItem />
    </MainLayout>
  );
}

export default FeedPage;
