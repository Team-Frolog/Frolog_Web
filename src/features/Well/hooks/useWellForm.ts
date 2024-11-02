import { useEffect, useState } from 'react';
import { UseFormReset } from 'react-hook-form';
import { useFlash } from '@/hooks/useFlash';
import { useMutation, useQuery } from '@tanstack/react-query';
import { bottomSheet } from '@/modules/BottomSheet';
import { PAGES } from '@/constants/page';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { addNewWell, editWell, getWell } from '../api/well.api';
import { WellFormType } from '../components/WellForm/WellForm';

export const useWellForm = (
  type: 'write' | 'edit',
  reset: UseFormReset<WellFormType>,
  wellId?: string
) => {
  const router = useRouter();
  const isSecond = useSearchParams().get('isSecond');
  const { data: session, update } = useSession();
  const [isLoading, setIsLoading] = useState(false);
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

  const {
    mutate: handleAddWell,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (data: WellFormType) => {
      setIsLoading(true);
      const res = await addNewWell({ ...data, owner: session!.user.id });
      return res;
    },
    onSuccess: async () => {
      if (isSecond) {
        await update({ defaultWellId: null });
        router.refresh();
      }
      openFlash({ type: 'new_well', callbackUrl: PAGES.HOME });
    },
  });

  const { mutate: handleEditWell } = useMutation({
    mutationFn: (data: WellFormType) => editWell({ ...data, id: wellId! }),
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

  return {
    handleAddWell,
    handleClickBack,
    handleEditWell,
    isPending,
    isSuccess,
    isLoading,
  };
};
