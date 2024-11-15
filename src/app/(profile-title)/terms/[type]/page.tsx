import React from 'react';
import { terms } from '@/data/terms/terms';
import TermsText from '@/components/Markdown/TermsText';
import { Metadata } from 'next';
import MainLayout from '@/layouts/MainLayout';

export const metadata: Metadata = {
  title: '이용약관',
};
interface Props {
  params: {
    type: string;
  };
}

function TermsDetailPage({ params: { type } }: Props) {
  const viewData = terms.find((item) => item.name === type);

  if (!viewData) return <></>;

  return (
    <MainLayout extraClass='flex bg-white px-page pb-[30px]'>
      <TermsText text={viewData.view!} />
    </MainLayout>
  );
}

export default TermsDetailPage;
