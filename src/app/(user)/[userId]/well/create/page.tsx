import { WellForm } from '@/features/Well';
import React from 'react';

interface Props {
  params: {
    userId: string;
  };
}

function WellCreatePage({ params: { userId } }: Props) {
  return <WellForm type='write' userId={userId} />;
}

export default WellCreatePage;
