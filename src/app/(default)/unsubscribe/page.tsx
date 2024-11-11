import React from 'react';
import { Metadata } from 'next';
import { UnsubscribeMailing } from '@frolog/frolog-api';
import { baseOptions } from '@/api/options';
import Flash from '@/components/Flash/Flash';

export type FlashType = 'review' | 'new_well' | 'first_new_well';

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

interface Props {
  searchParams?: { [key: string]: string | undefined };
}

async function UnsubscribePage({ searchParams }: Props) {
  await new UnsubscribeMailing(baseOptions).fetch({
    hash: searchParams!.hash!,
  });

  return <Flash flashKey='unsubscribe' />;
}

export default UnsubscribePage;
