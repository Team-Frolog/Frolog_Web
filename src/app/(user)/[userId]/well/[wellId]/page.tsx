import React from 'react';
import { WellDetailPage } from '@/features/Well';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetWell } from '@frolog/frolog-api';

export const metadata: Metadata = {
  title: '우물',
};

interface Props {
  params: {
    userId: string;
    wellId: string;
  };
}

async function UserWellDetailPage({ params: { userId, wellId } }: Props) {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['well', wellId],
    queryFn: () =>
      new GetWell({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ id: wellId }),
    staleTime: 1000 * 10,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WellDetailPage
        userId={userId}
        wellId={wellId}
        sessionUserId={session?.user.id}
        defaultWellId={session?.user.defaultWellId}
      />
    </HydrationBoundary>
  );
}

export default UserWellDetailPage;
