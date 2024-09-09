import { FeedItem } from '@/features/Feed';
import ReviewForBook from '@/features/Review/components/ReviewForBook/ReviewForBook';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function FeedPage() {
  return (
    <MainLayout extraClass='bg-gray-300'>
      <FeedItem />
      <ReviewForBook />
    </MainLayout>
  );
}

export default FeedPage;
