import { useEffect } from 'react';
import { UseFormReset } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GetWellRes } from '@frolog/frolog-api';
import { flash } from '@/modules/Flash';
import { bottomSheet } from '@/modules/BottomSheet';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { addNewWell, editWell } from '../api/well.api';
import { WellFormType } from '../components/WellForm/WellForm';

export const useWellForm = (
  type: 'write' | 'edit',
  reset: UseFormReset<WellFormType>,
  wellId?: string
) => {
  const router = useRouter();
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (wellId) {
      const wellData = queryClient.getQueryData(['well', wellId]) as GetWellRes;
      const { name, frog, color, shape } = wellData;

      reset({
        name,
        frog,
        color,
        shape,
      });
    }
  }, [wellId]);

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
