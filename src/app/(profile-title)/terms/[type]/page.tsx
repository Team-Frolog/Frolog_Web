import React from 'react';
import { terms } from '@/data/terms/terms';
import TermsText from '@/components/Markdown/TermsText';

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
