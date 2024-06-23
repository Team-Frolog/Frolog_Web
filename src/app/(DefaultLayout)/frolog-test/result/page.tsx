'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

function TestResultPage() {
  const type = useSearchParams().get('type');

  return <div>result: {type}</div>;
}

export default TestResultPage;
