import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { bottomSheet } from '@/modules/BottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import { requestBook } from '../api/register.api';
import { RegisterFormType } from '../components/RegisterSheet/RegisterForm';

export const useBookRegister = () => {
  const [isRegistered, setIsRegistered] = useState<boolean | null>(false);

  const { mutate: handleRegister } = useMutation({
    mutationFn: (data: RegisterFormType) => requestBook(data),
    onSuccess: () => {
      setIsRegistered(null);
      setTimeout(() => {
        setIsRegistered(true);
        bottomSheet.open({
          sheetData: sheetData.done_register,
        });
      }, 500);
    },
  });

  return { isRegistered, handleRegister };
};