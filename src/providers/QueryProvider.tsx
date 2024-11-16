'use client';

import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import * as Sentry from '@sentry/nextjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        networkMode: 'online',
        refetchOnWindowFocus: false,
        throwOnError: true,
        staleTime: 1000 * 20,
      },
      mutations: {
        onError: (err) => {
          Sentry.captureException(err);
          toast.error(ERROR_ALERT);
        },
      },
    },
  });

function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
