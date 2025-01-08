import { useMutation } from '@tanstack/react-query';
import { signOut } from 'next-auth/react';
import useSessionStore from '@/store/sessionStore';
import { PAGES } from '@/constants/page';
import { bottomSheet } from '@/modules/BottomSheet';
import { quit } from '../api/quit.api';
import { QuitFormType } from '../components/Quit/QuitForm';
import { quitReasons } from '../data/quitForm';
import { Survey } from '../types/quit';

/** 회원탈퇴 처리 훅 */
export const useQuit = () => {
  const clearSession = useSessionStore.persist.clearStorage;

  const { mutate: quitUser } = useMutation({
    mutationFn: (survey: Survey) => quit(survey),
    onSuccess: () => {
      clearSession();
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
      sheetKey: 'quit',
      onClick: () => handleQuit(data),
    });
  };

  return { reconfirmQuit };
};
