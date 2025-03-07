import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: '독서 성향 테스트',
};

const FrologTest = dynamic(
  () => import('@/features/FrologTest/components/FrologTest')
);

function TestPage() {
  return <FrologTest />;
}

export default TestPage;
