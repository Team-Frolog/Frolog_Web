import { WellForm } from '@/features/Well';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '우물 수정',
};

interface Props {
  params: {
    userId: string;
    wellId: string;
  };
}

function WellEditPage({ params: { wellId, userId } }: Props) {
  return <WellForm type='edit' wellId={wellId} userId={userId} />;
}

export default WellEditPage;
