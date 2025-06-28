import WellListSkeleton from '@/components/Fallback/Skeleton/Well/WellListSkeleton';
import { PAGES } from '@/constants/page';
import { SearchInput } from '@/features/Search';
import { getExploreWellList } from '@/features/Well/api/well.server.api';
import WellExploreList from '@/features/Well/components/WellSearch/WellExploreList';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

async function ExplorePage() {
  const refTime = new Date().toISOString();
  const wellList = await getExploreWellList(0, refTime);

  return (
    <div className='flex w-full flex-col'>
      <div className='flex px-[24px] pb-[20px]'>
        <SearchInput
          route={PAGES.WELL_SEARCH}
          placeholder='우물 키워드를 검색해보세요'
        />
      </div>

      <Suspense fallback={<WellListSkeleton />}>
        <WellExploreList refTime={refTime} wellList={wellList} />
      </Suspense>
    </div>
  );
}

export default ExplorePage;

export const metadata: Metadata = {
  title: '우물 탐색',
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
  openGraph: {
    title: '우물 탐색',
  },
  twitter: {
    title: '우물 탐색',
  },
};
