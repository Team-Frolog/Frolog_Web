'use client';

import React from 'react';
import { terms } from '@/data/terms/terms';
import { useRouter } from 'next/navigation';
import MenuItem from '../Menu/MenuItem';

function TermsMenu() {
  const router = useRouter();

  return (
    <div className='flex w-full flex-col gap-[32px]'>
      {terms.map(
        (item) =>
          item.title && (
            <MenuItem
              key={item.id}
              name={item.title}
              onClick={() => router.push(`/terms/${item.name}`)}
            />
          )
      )}
    </div>
  );
}

export default TermsMenu;
