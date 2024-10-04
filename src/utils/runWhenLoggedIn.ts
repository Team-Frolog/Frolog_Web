import { PAGES } from '@/constants/page';
import { sheetData } from '@/data/ui/bottomSheet';
import { bottomSheet } from '@/modules/BottomSheet';
import { getSession } from 'next-auth/react';

export const runWhenLoggedIn = async (callFunc: () => void) => {
  const session = await getSession();

  if (session?.user) {
    callFunc();
  } else {
    bottomSheet.open({
      sheetData: sheetData.need_to_login_feed,
      onClick: () => {
        window.location.href = PAGES.LANDING;
      },
    });
  }
};
