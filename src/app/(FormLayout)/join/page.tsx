'use client';

import Step1 from '@/components/join/step1/Step1';
import { useSearchParams } from 'next/navigation';
import React from 'react';

function JoinPage() {
  const step = Number(useSearchParams().get('step')!);

  return <div className='h-full'>{step === 1 && <Step1 />}</div>;
}

export default JoinPage;
