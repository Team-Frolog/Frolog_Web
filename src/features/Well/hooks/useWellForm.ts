import { useEffect } from 'react';
import { UseFormReset } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { flash } from '@/modules/Flash';
import { bottomSheet } from '@/modules/BottomSheet';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { addNewWell, editWell, getWell } from '../api/well.api';
import { WellFormType } from '../components/WellForm/WellForm';

export const useWellForm = (
  type: 'write' | 'edit',
  reset: UseFormReset<WellFormType>,
  wellId?: string
) => {
  const router = useRouter();
  const { data: session } = useSession();

  const { data: wellData } = useQuery({
    queryKey: ['well', wellId],
    queryFn: () => getWell(wellId!),
    enabled: type === 'edit' && !!wellId,
  });

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
    mutationFn: (data: WellFormType) =>
      addNewWell({ ...data, owner: session!.user.id }),
    onSuccess: () => {
      flash.open({
        flashType: 'new_well',
        callbackUrl: `/${session!.user.id}/well`,
      });
    },
  });

  const { mutate: handleEditWell } = useMutation({
    mutationFn: (data: WellFormType) => editWell({ ...data, id: wellId! }),
    onSuccess: () => router.replace(`/${session!.user.id}/well`),
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

  return { handleAddWell, handleClickBack, handleEditWell };
};
