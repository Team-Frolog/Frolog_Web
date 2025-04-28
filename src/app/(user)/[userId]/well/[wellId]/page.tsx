import React from 'react';
import { WellDetailPage } from '@/features/Well';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/nextAuth';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetProfile, GetWell } from '@frolog/frolog-api';
import {
  getWellDetail,
  getWellItemList,
} from '@/features/Well/api/well.server.api';

interface Props {
  params: {
    userId: string;
    wellId: string;
  };
}

async function UserWellDetailPage({ params: { userId, wellId } }: Props) {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();
  const wellDetail = await getWellDetail(wellId);
  const wellItemList = await getWellItemList(wellId);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WellDetailPage
        userId={userId}
        initialWellItemList={wellItemList}
        wellDetail={wellDetail}
        sessionUserId={session?.user.id}
        defaultWellId={session?.user.defaultWellId}
      />
    </HydrationBoundary>
  );
}

export default UserWellDetailPage;

export const generateMetadata = async ({
  params: { wellId, userId },
}: Props): Promise<Metadata> => {
  const session = await getServerSession(authOptions);

  const wellData = await new GetWell({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ id: wellId });

  const userInfo = await new GetProfile({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ id: userId });

  return {
    title: wellData.name,
    description: `${wellData.item_cnt}권의 책이 쌓인 ${userInfo.username}님의 우물`,
    openGraph: {
      title: wellData.name,
      description: `${wellData.item_cnt}권의 책이 쌓인 ${userInfo.username}님의 우물`,
      url: `https://www.frolog.kr/${userId}/well/${wellId}`,
    },
    twitter: {
      title: wellData.name,
      description: `${wellData.item_cnt}권의 책이 쌓인 ${userInfo.username}님의 우물`,
    },
  };
};
