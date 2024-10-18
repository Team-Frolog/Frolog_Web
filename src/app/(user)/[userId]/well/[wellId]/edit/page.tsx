import { WellForm } from '@/features/Well';
import React from 'react';

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
