'use client';

import { useEffect, useState } from 'react';

export const useFirstMemoForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => () => {
      setIsLoading(false);
    },
    []
  );

  return { isLoading };
};
