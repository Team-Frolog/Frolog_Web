import React from 'react';
import { Feeds } from '@/features/Feed';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '피드',
};

function FeedPage() {
  return <Feeds />;
}

export default FeedPage;
