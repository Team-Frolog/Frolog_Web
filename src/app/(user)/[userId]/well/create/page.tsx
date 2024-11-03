import { WellForm } from '@/features/Well';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '우물 생성',
};

interface Props {
  params: {
    userId: string;
  };
}

function WellCreatePage({ params: { userId } }: Props) {
  return <WellForm type='write' userId={userId} />;
}

export default WellCreatePage;
