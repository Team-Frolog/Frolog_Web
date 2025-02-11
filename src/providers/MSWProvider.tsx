'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface Props {
  children: ReactNode;
}

function MSWProvider({ children }: Props) {
  const [mswReady, setMswReady] = useState<boolean>(false);
  const isWorkerStarted = useRef(false);

  useEffect(() => {
    const init = async () => {
      if (typeof window === 'undefined' && isWorkerStarted.current) return;

      const { setupWorker } = await import('msw/browser');
      const { handlers } = await import('@/__mock__/apiMock');

      const worker = setupWorker(...handlers);
      await worker.start();
      setMswReady(true);
    };

    init();
  }, []);

  if (!mswReady) return null;

  return <>{children}</>;
}

export default MSWProvider;
