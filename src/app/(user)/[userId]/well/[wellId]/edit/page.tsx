import { WellForm } from '@/features/Well';
import React from 'react';

interface Props {
  params: {
    wellId: string;
  };
}

function WellEditPage({ params: { wellId } }: Props) {
  return <WellForm type='edit' wellId={wellId} />;
}

export default WellEditPage;
