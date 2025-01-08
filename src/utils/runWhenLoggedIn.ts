import { PAGES } from '@/constants/page';
import { bottomSheet } from '@/modules/BottomSheet';
import { getSession } from 'next-auth/react';

/** 로그인 여부에 따라 함수를 실행시키는 미들웨어 역할의 함수
 * @param callFunc - 실행할 함수
 * @param type - 'default' or 'feed', 로그인 유도 멘트 타입 (optional)
 *
 * - 로그인이 되지 않은 경우 로그인 유도 바텀시트를 띄우고, 로그인 된 경우 callFunc를 실행합니다.
 */
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
        window.location.href = PAGES.ONBOARDING;
      },
    });
  }
};
