import React from 'react';
import { Metadata } from 'next';
import Flash from '@/components/Flash/Flash';
import { FlashKeys } from '@/data/ui/flash';

interface Props {
  params: {
    type: FlashKeys;
  };
}

export async function generateStaticParams() {
  return [{ type: 'review' }, { type: 'new_well' }, { type: 'first_new_well' }];
}

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

function FlashPage({ params: { type } }: Props) {
  return <Flash flashKey={type} />;
}

export default FlashPage;
