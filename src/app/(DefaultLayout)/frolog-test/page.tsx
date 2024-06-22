'use client';

import ProgressHeader from '@/components/common/header/ProgressHeader';
import { useSearchParams } from 'next/navigation';
import React from 'react';

function TestPage() {
  const step = Number(useSearchParams().get('step')!);
  return (
    <div className='h-full bg-white'>
      <ProgressHeader />
    </div>
  );
}

export default TestPage;
