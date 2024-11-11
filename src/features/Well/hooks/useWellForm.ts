import { useEffect, useState } from 'react';
import { UseFormReset, UseFormSetError } from 'react-hook-form';
import { useFlash } from '@/hooks/useFlash';
import { useMutation, useQuery } from '@tanstack/react-query';
import { bottomSheet } from '@/modules/BottomSheet';
import { toast } from '@/modules/Toast';
import { ERROR_ALERT } from '@/constants/message';
import { useUserId } from '@/store/sessionStore';
import { PAGES } from '@/constants/page';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { addNewWell, editWell, getWell } from '../api/well.api';
import { WellFormType } from '../components/WellForm/WellForm';

export const useWellForm = (
  type: 'write' | 'edit',
  reset: UseFormReset<WellFormType>,
  setError: UseFormSetError<WellFormType>,
  wellId?: string
) => {
  const router = useRouter();
  const isSecond = useSearchParams().get('isSecond');
  const userId = useUserId();
  const { update } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [isNameChecked, setIsNameChecked] = useState(false);
  const { openFlash } = useFlash();

  const { data: wellData } = useQuery({
    queryKey: ['well', wellId],
    queryFn: () => getWell(wellId!),
    enabled: type === 'edit' && !!wellId,
  });

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  useEffect(() => {
    if (wellData) {
      const { name, frog, color, shape } = wellData;

      reset({
        name,
        frog,
        color,
        shape,
      });
    }
  }, [wellData]);

  const { mutate: handleAddWell } = useMutation({
    mutationFn: async (data: WellFormType) => {
      if (!isNameChecked) {
        return;
      }
      setIsLoading(true);
      const res = await addNewWell({ ...data, owner: userId! });
      return res;
    },
    onError: () => {
      toast.error(ERROR_ALERT);
      setIsLoading(false);
    },
    onSuccess: async () => {
      if (isSecond) {
        await update({ defaultWellId: null });
        router.refresh();
        openFlash({ type: 'first_new_well', callbackUrl: PAGES.HOME });
      } else {
        openFlash({ type: 'new_well', callbackUrl: PAGES.HOME });
      }
    },
  });

  const { mutate: handleEditWell } = useMutation({
    mutationFn: (data: Partial<WellFormType>) =>
      editWell({ ...data, id: wellId! }),
    onError: () => {
      toast.error(ERROR_ALERT);
      setIsLoading(false);
    },
    onSuccess: () => router.replace(PAGES.HOME),
  });

  const handleClickBack = (isDirty: boolean) => {
    if (isDirty) {
      bottomSheet.open({
        sheetKey: type === 'edit' ? 'leave_while_edit' : 'leave_while_write',
        onClick: () => {
          setTimeout(() => {
            router.back();
          }, 300);
        },
      });
    } else {
      router.back();
    }
  };

  const handleWellFrom = (data: WellFormType) => {
    if (!isNameChecked) {
      setError('name', {
        type: 'custom',
        message: '이미 같은 이름의 우물이 있어요',
      });
    } else if (type === 'write') {
      handleAddWell(data);
    } else if (type === 'edit' && wellData) {
      const updatedFields: Partial<WellFormType> = data;

      Object.keys(data).forEach((key) => {
        const typedKey = key as keyof WellFormType;
        if (data[typedKey] === wellData[typedKey]) {
          updatedFields[typedKey] = undefined;
        }
      });

      if (Object.keys(updatedFields).length > 0) {
        handleEditWell(updatedFields);
      }
    }
  };

  return {
    originalName: wellData?.name,
    handleWellFrom,
    handleClickBack,
    isLoading,
    setIsNameChecked,
  };
};
