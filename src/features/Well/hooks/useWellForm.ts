import { useMutation } from '@tanstack/react-query';
import { PAGES } from '@/constants/page';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { addNewWell } from '../api/well.api';
import { WellFormType } from '../components/WellForm/WellForm';

export const useWellForm = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const { mutate: handleAddWell } = useMutation({
    mutationFn: (data: WellFormType) =>
      addNewWell({ ...data, owner: session!.user.id }),
    onSuccess: () => {
      router.replace(PAGES.WELL);
    },
  });

  return { handleAddWell };
};
