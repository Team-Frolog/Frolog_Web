import React from 'react';
import { WellDetailPage } from '@/features/Well';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '우물',
};

interface Props {
  params: {
    userId: string;
    wellId: string;
  };
}

function UserWellDetailPage({ params: { userId, wellId } }: Props) {
  return <WellDetailPage userId={userId} wellId={wellId} />;
}

export default UserWellDetailPage;
