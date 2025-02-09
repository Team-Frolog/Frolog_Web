'use client';

import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

function MSWProvider({ children }: Props) {
  const [mswReady, setMswReady] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      if (typeof window === 'undefined') return;

      const { setupWorker } = await import('msw/browser');
      const { handlers } = await import('@/__mock__/apiMock');

      const worker = setupWorker(...handlers);
      await worker.start();
      setMswReady(true);
    };

    if (!mswReady) init();
  }, [mswReady]);

  return <>{children}</>;
}

export default MSWProvider;
