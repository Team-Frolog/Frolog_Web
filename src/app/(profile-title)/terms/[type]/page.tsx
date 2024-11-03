import React from 'react';
import { terms } from '@/data/terms/terms';
import TermsText from '@/components/Markdown/TermsText';
import { Metadata } from 'next';

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
    <div className='flex px-page pb-[30px]'>
      <TermsText text={viewData.view!} />
    </div>
  );
}

export default TermsDetailPage;
