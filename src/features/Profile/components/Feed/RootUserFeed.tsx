'use client';

import Tab from '@/components/Tab/Tab';
import UserMemo from '@/features/Profile/components/Feed/UserMemoList';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

function RootUserFeed() {
  const tab = useSearchParams().get('currentTab') || 'memo';
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <Tab
        tabs={[
          { id: 1, label: 'memo', name: '메모 모음' },
          { id: 2, label: 'review', name: '리뷰 모음' },
        ]}
        currentTab={tab}
        defaultTab='memo'
        onChangeTab={(label: string) =>
          router.replace(`${pathname}?currentTab=${label}`)
        }
      />
      <UserMemo />
    </>
  );
}

export default RootUserFeed;
