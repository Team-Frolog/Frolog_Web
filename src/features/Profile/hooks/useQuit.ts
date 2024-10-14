import { useMutation } from '@tanstack/react-query';
import { signOut } from 'next-auth/react';
import { PAGES } from '@/constants/page';
import { bottomSheet } from '@/modules/BottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import { quit } from '../api/quit.api';
import { QuitFormType } from '../components/Quit/QuitForm';
import { quitReasons } from '../data/quitForm';
import { Survey } from '../types/quit';

export const useQuit = () => {
  const { mutate: quitUser } = useMutation({
    mutationFn: (survey: Survey) => quit(survey),
    onSuccess: () => {
      signOut({ callbackUrl: PAGES.HOME, redirect: true });
    },
  });

  const handleQuit = (data: QuitFormType) => {
    const { reason, description } = data;
    const reasons = reason.map(
      (r) => quitReasons.find((item) => item.id === r)?.content
    ) as string[];

    const survey: Survey = {
      reasons,
      additional_desc: description || undefined,
    };

    quitUser(survey);
  };

  const reconfirmQuit = (data: QuitFormType) => {
    bottomSheet.open({
      sheetData: sheetData.quit,
      onClick: () => handleQuit(data),
    });
  };

  return { reconfirmQuit };
};
