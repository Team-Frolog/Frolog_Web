'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Tap from '@/components/Tap/Tap';
import MainLayout from '@/layouts/MainLayout';
import { PAGES } from '@/constants/page';
import { aos, ios } from '../../data/howToInstall';
import Instruction from './Instruction';

function HowToInstall() {
  const router = useRouter();
  const tap = useSearchParams().get('tap') || 'followers';

  return (
    <>
      <Tap
        taps={[
          {
            id: 1,
            label: 'ios',
            name: 'iOS',
          },
          {
            id: 2,
            label: 'aos',
            name: 'AOS',
          },
        ]}
        currentTap={tap}
        defaultTap='ios'
        onChangeTap={(label: string) =>
          router.replace(`${PAGES.INSTALL}?tap=${label}`)
        }
      />
      <MainLayout extraClass='bg-white flex w-full flex-col gap-[36px] px-page py-[36px] text-gray-800'>
        <Instruction data={tap === 'ios' ? ios : aos} />
      </MainLayout>
    </>
  );
}

export default HowToInstall;
