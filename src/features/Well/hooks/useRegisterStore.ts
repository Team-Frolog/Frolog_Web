import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { registerStoreAlarm } from '../api/well.api';

/** deprecated */
export const useRegisterStore = () => {
  const [isRegistered, setIsRegistered] = useState<boolean | null>(false);

  const { mutate: handleRegisterStore } = useMutation({
    mutationFn: () => registerStoreAlarm(),
    onSuccess: () => {
      setIsRegistered(true);
    },
  });

  return { isRegistered, handleRegisterStore };
};
