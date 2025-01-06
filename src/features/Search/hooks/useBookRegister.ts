import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { bottomSheet } from '@/modules/BottomSheet';
import { requestBook } from '../api/register.api';
import { RegisterFormType } from '../components/RegisterSheet/RegisterForm';

/** 검색되지 않는 도서에 대한 등록 요청 핸들링 훅 */
export const useBookRegister = () => {
  const [isRegistered, setIsRegistered] = useState<boolean | null>(false);

  const { mutate: handleRegister } = useMutation({
    mutationFn: (data: RegisterFormType) => requestBook(data),
    onSuccess: () => {
      setIsRegistered(null);
      setTimeout(() => {
        setIsRegistered(true);
        bottomSheet.open({
          sheetKey: 'done_register',
        });
      }, 500);
    },
  });

  return { isRegistered, handleRegister };
};
