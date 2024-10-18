import { useMutation } from '@tanstack/react-query';
import { flash } from '@/modules/Flash';
import { bottomSheet } from '@/modules/BottomSheet';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { addNewWell } from '../api/well.api';
import { WellFormType } from '../components/WellForm/WellForm';

export const useWellForm = (type: 'write' | 'edit') => {
  const router = useRouter();
  const { data: session } = useSession();

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

  return { handleAddWell, handleClickBack };
};
