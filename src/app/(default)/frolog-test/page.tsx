import React from 'react';
import { FrologTest } from '@/features/Test';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '독서 성향 테스트',
};

function TestPage() {
  return <FrologTest />;
}

export default TestPage;
