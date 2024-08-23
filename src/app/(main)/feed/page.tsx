import { WellList } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function FeedPage() {
  return (
    <MainLayout>
      <WellList />
    </MainLayout>
  );
}

export default FeedPage;
