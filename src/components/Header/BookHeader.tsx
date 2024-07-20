'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';

function BookHeader() {
  const router = useRouter();

  return (
    <ResponsiveHeaderLayout onClick={() => router.back()}>
      <></>
    </ResponsiveHeaderLayout>
  );
}

export default BookHeader;
