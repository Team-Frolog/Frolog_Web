'use client';

import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      networkMode: 'online',
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: () => toast.error(ERROR_ALERT),
    },
  },
});

function QueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
