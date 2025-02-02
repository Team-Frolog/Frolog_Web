'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Tab from '@/components/Tab/Tab';
import MainLayout from '@/layouts/MainLayout';
import { PAGES } from '@/constants/page';
import { aos, ios } from '../../data/howToInstall';
import Instruction from './Instruction';

/** 프롤로그 앱 설치 방법 컴포넌트 */
function HowToInstall() {
  const router = useRouter();
  const tab = useSearchParams().get('currentTab') || 'ios';

  return (
    <>
      <Tab
        tabs={[
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
        currentTab={tab}
        defaultTab='ios'
        onChangeTab={(label: string) =>
          router.replace(`${PAGES.INSTALL}?currentTab=${label}`)
        }
      />
      <MainLayout extraClass='bg-white flex w-full flex-col gap-[36px] px-page py-[36px] text-gray-800'>
        <Instruction data={tab === 'ios' ? ios : aos} />
      </MainLayout>
    </>
  );
}

export default HowToInstall;
