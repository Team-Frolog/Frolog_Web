import { PAGES } from '@/constants/page';
import { bottomSheet } from '@/modules/BottomSheet';
import { getSession } from 'next-auth/react';

export const runWhenLoggedIn = async (
  callFunc: () => void,
  type?: 'default' | 'feed'
) => {
  const session = await getSession();

  if (session?.user) {
    callFunc();
  } else {
    bottomSheet.open({
      sheetKey: type === 'feed' ? 'need_to_login_feed' : 'need_to_login',
      onClick: () => {
        window.location.href = PAGES.LANDING;
      },
    });
  }
};
