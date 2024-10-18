'use client';

import React from 'react';
import { EditIcon } from 'public/icons';
import BackButton from '@/components/Button/BackButton';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Props {
  userId?: string;
  wellId?: string;
  hasEditButton?: boolean;
}

function WellHeader({ userId, wellId, hasEditButton = false }: Props) {
  const router = useRouter();

  return (
    <div className='absolute left-[50%] top-0 z-10 flex w-[450px] translate-x-[-50%] gap-[20px] pt-[70px] mobile:left-0 mobile:w-full mobile:translate-x-0'>
      <BackButton
        onClick={() => router.back()}
        fill='#B3B6C5'
        extraClass='absolute top-[28px] left-[28px] z-20'
      />
      {userId && hasEditButton && (
        <Link
          href={`/${userId}/well/${wellId}/edit`}
          className='absolute right-[28px] top-[28px] z-20'
        >
          <EditIcon />
        </Link>
      )}
    </div>
  );
}

export default WellHeader;
