import { terms } from '@/data/terms/terms';
import TermsText from '@/features/Join/components/TermsText';
import React from 'react';

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
